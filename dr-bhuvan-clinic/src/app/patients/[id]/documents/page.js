"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const CATEGORIES = [
  "Intraoral Photo",
  "Extraoral Photo",
  "OPG",
  "IOPA",
  "CBCT",
  "Report",
  "Other",
];

const MAX_FILE_SIZE = 40 * 1024 * 1024;

function formatDate(dateString) {
  if (!dateString) return "—";

  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatFileSize(bytes) {
  if (!bytes) return "—";

  if (bytes < 1024 * 1024) {
    return `${Math.round(bytes / 1024)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function isImage(fileType) {
  return fileType?.startsWith("image/");
}

function isPdf(fileType) {
  return fileType === "application/pdf";
}

export default function PatientDocumentsPage({ params }) {
  const supabase = useMemo(() => createClient(), []);

  const [patientId, setPatientId] = useState(null);
  const [patient, setPatient] = useState(null);
  const [documents, setDocuments] = useState([]);

  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const [showForm, setShowForm] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [category, setCategory] = useState("Intraoral Photo");
  const [notes, setNotes] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // -----------------------------------
  // GET PATIENT ID
  // -----------------------------------

  useEffect(() => {
    async function getPatientId() {
      try {
        const resolvedParams = await params;

        if (!resolvedParams?.id) {
          throw new Error("Patient ID not found.");
        }

        setPatientId(String(resolvedParams.id));
      } catch (err) {
        console.error(err);
        setError(
          err?.message || "Unable to identify patient."
        );
        setLoading(false);
      }
    }

    getPatientId();
  }, [params]);

  // -----------------------------------
  // LOAD PATIENT + DOCUMENTS
  // -----------------------------------

  useEffect(() => {
    if (!patientId) return;

    loadData();
  }, [patientId]);

  async function loadData() {
    setLoading(true);
    setError("");

    try {
      const numericPatientId = Number(patientId);

      if (!numericPatientId) {
        throw new Error("Invalid patient ID.");
      }

      // Load patient
      const {
        data: patientData,
        error: patientError,
      } = await supabase
        .from("patients")
        .select("*")
        .eq("id", numericPatientId)
        .single();

      if (patientError) {
        throw patientError;
      }

      if (!patientData) {
        throw new Error("Patient not found.");
      }

      setPatient(patientData);

      // Load documents
      const {
        data: documentData,
        error: documentError,
      } = await supabase
        .from("patient_documents")
        .select("*")
        .eq("patient_id", numericPatientId)
        .order("created_at", {
          ascending: false,
        });

      if (documentError) {
        throw documentError;
      }

      // Create temporary signed URLs
      const documentsWithUrls = await Promise.all(
        (documentData || []).map(async (document) => {
          const {
            data: signedUrlData,
            error: signedUrlError,
          } = await supabase.storage
            .from("patient-files")
            .createSignedUrl(
              document.file_path,
              3600
            );

          if (signedUrlError) {
            console.error(
              "SIGNED URL ERROR:",
              signedUrlError
            );

            return {
              ...document,
              signed_url: null,
            };
          }

          return {
            ...document,
            signed_url:
              signedUrlData?.signedUrl || null,
          };
        })
      );

      setDocuments(documentsWithUrls);
    } catch (err) {
      console.error("DOCUMENT LOAD ERROR:", err);

      setError(
        err?.message ||
          err?.details ||
          err?.hint ||
          "Unable to load patient documents."
      );
    } finally {
      setLoading(false);
    }
  }

  // -----------------------------------
  // FILE SELECT
  // -----------------------------------

  function handleFileChange(event) {
    const file = event.target.files?.[0];

    if (!file) {
      setSelectedFile(null);
      return;
    }

    setError("");
    setMessage("");

    if (file.size > MAX_FILE_SIZE) {
      setSelectedFile(null);

      setError(
        "File is too large. Maximum allowed size is 40 MB."
      );

      event.target.value = "";
      return;
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "application/pdf",
    ];

    if (!allowedTypes.includes(file.type)) {
      setSelectedFile(null);

      setError(
        "Only JPEG, PNG, WebP and PDF files are allowed."
      );

      event.target.value = "";
      return;
    }

    setSelectedFile(file);
  }

  // -----------------------------------
  // RESET FORM
  // -----------------------------------

  function resetForm() {
    setSelectedFile(null);
    setCategory("Intraoral Photo");
    setNotes("");

    const fileInput =
      document.getElementById("patient-file");

    if (fileInput) {
      fileInput.value = "";
    }
  }

  function closeForm() {
    if (uploading) return;

    setShowForm(false);
    resetForm();
    setError("");
  }

  // -----------------------------------
  // UPLOAD DOCUMENT
  // -----------------------------------

  async function uploadDocument(event) {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!selectedFile) {
      setError("Please select a file.");
      return;
    }

    if (!category) {
      setError("Please select a category.");
      return;
    }

    if (!patientId) {
      setError("Patient ID is missing.");
      return;
    }

    setUploading(true);

    let uploadedPath = null;

    try {
      const numericPatientId = Number(patientId);

      // Create unique file name
      const extension =
        selectedFile.name.includes(".")
          ? selectedFile.name
              .split(".")
              .pop()
              .toLowerCase()
          : "";

      const uniqueName = `${Date.now()}-${crypto.randomUUID()}${
        extension ? `.${extension}` : ""
      }`;

      // Patient-specific folder
      const filePath = `${numericPatientId}/${uniqueName}`;

      uploadedPath = filePath;

      console.log("Uploading file:", filePath);

      // -----------------------------------
      // 1. UPLOAD TO PRIVATE STORAGE
      // -----------------------------------

      const {
        error: uploadError,
      } = await supabase.storage
        .from("patient-files")
        .upload(filePath, selectedFile, {
          cacheControl: "3600",
          upsert: false,
          contentType: selectedFile.type,
        });

      if (uploadError) {
        throw uploadError;
      }

      // -----------------------------------
      // 2. SAVE FILE INFORMATION
      // -----------------------------------

      const {
        error: insertError,
      } = await supabase
        .from("patient_documents")
        .insert({
          patient_id: numericPatientId,
          file_name: selectedFile.name,
          file_path: filePath,
          file_type: selectedFile.type,
          category: category,
          notes: notes || null,
        });

      if (insertError) {
        // If database insert fails,
        // remove the uploaded file.
        await supabase.storage
          .from("patient-files")
          .remove([filePath]);

        uploadedPath = null;

        throw insertError;
      }

      // -----------------------------------
      // SUCCESS
      // -----------------------------------

      setShowForm(false);
      resetForm();

      setMessage(
        "File uploaded successfully."
      );

      await loadData();

      setTimeout(() => {
        setMessage("");
      }, 2500);
    } catch (err) {
      console.error(
        "DOCUMENT UPLOAD ERROR:",
        err
      );

      // Extra cleanup if needed
      if (uploadedPath) {
        await supabase.storage
          .from("patient-files")
          .remove([uploadedPath]);
      }

      setError(
        err?.message ||
          err?.details ||
          err?.hint ||
          "Unable to upload file."
      );

      setTimeout(() => {
        setError("");
      }, 5000);
    } finally {
      setUploading(false);
    }
  }

  // -----------------------------------
  // DELETE DOCUMENT
  // -----------------------------------

  async function deleteDocument(document) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${document.file_name}"?`
    );

    if (!confirmed) return;

    setError("");
    setMessage("");

    try {
      // Delete storage file
      const {
        error: storageError,
      } = await supabase.storage
        .from("patient-files")
        .remove([document.file_path]);

      if (storageError) {
        throw storageError;
      }

      // Delete database record
      const {
        error: databaseError,
      } = await supabase
        .from("patient_documents")
        .delete()
        .eq("id", document.id);

      if (databaseError) {
        throw databaseError;
      }

      setDocuments((previous) =>
        previous.filter(
          (item) => item.id !== document.id
        )
      );

      setMessage(
        "File deleted successfully."
      );

      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (err) {
      console.error(
        "DOCUMENT DELETE ERROR:",
        err
      );

      setError(
        err?.message ||
          "Unable to delete file."
      );
    }
  }

  // -----------------------------------
  // LOADING
  // -----------------------------------

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500">
          Loading patient documents...
        </p>
      </main>
    );
  }

  // -----------------------------------
  // PATIENT NOT FOUND
  // -----------------------------------

  if (!patient) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">

        <div className="text-center">

          <h1 className="text-xl font-bold text-gray-900">
            Patient not found
          </h1>

          {error && (
            <p className="mt-3 text-sm text-red-500">
              {error}
            </p>
          )}

          <Link
            href="/patients"
            className="mt-4 inline-block font-semibold text-orange-500 hover:text-orange-600"
          >
            ← Back to Patients
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* SUCCESS / ERROR POPUP */}
      {(message || error) && (
        <div className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center px-4">

          <div
            className={`w-full max-w-md rounded-2xl border bg-white p-7 text-center shadow-2xl ${
              message
                ? "border-green-200"
                : "border-red-200"
            }`}
          >

            <div
              className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full text-2xl ${
                message
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message ? "✓" : "!"}
            </div>

            <p
              className={`mt-4 text-lg font-semibold ${
                message
                  ? "text-green-700"
                  : "text-red-700"
              }`}
            >
              {message || error}
            </p>

          </div>

        </div>
      )}

      {/* HEADER */}
      <header className="border-b bg-white">

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

          <Link
            href={`/patients/${patient.id}`}
            className="text-sm font-semibold text-orange-500 hover:text-orange-600"
          >
            ← Back to Patient Profile
          </Link>

          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-sm font-semibold text-orange-500">
                Clinical Records
              </p>

              <h1 className="mt-1 text-3xl font-bold text-gray-900">
                Photos & X-rays
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                {patient.full_name} • Patient ID: P
                {String(patient.id).padStart(6, "0")}
              </p>

            </div>

            <button
              type="button"
              onClick={() => {
                setShowForm(true);
                setError("");
                setMessage("");
              }}
              className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600"
            >
              + Upload File
            </button>

          </div>

        </div>

      </header>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* SUMMARY */}
        <div className="mb-8 grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border bg-white p-5 shadow-sm">

            <p className="text-sm text-gray-500">
              Total Files
            </p>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              {documents.length}
            </p>

          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">

            <p className="text-sm text-gray-500">
              Images
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-600">
              {
                documents.filter((document) =>
                  isImage(document.file_type)
                ).length
              }
            </p>

          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">

            <p className="text-sm text-gray-500">
              Reports / PDFs
            </p>

            <p className="mt-2 text-3xl font-bold text-purple-600">
              {
                documents.filter((document) =>
                  isPdf(document.file_type)
                ).length
              }
            </p>

          </div>

        </div>

        {/* DOCUMENTS */}
        <section className="overflow-hidden rounded-2xl border bg-white shadow-sm">

          <div className="border-b px-5 py-5 sm:px-6">

            <h2 className="text-xl font-bold text-gray-900">
              Clinical Files
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Patient photos, X-rays and clinical reports.
            </p>

          </div>

          {documents.length === 0 ? (

            <div className="px-6 py-16 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-3xl">
                📷
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                No clinical files yet
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Upload intraoral photos, OPG, IOPA, CBCT reports or other clinical records.
              </p>

              <button
                type="button"
                onClick={() => {
                  setShowForm(true);
                  setError("");
                  setMessage("");
                }}
                className="mt-6 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
              >
                + Upload First File
              </button>

            </div>

          ) : (

            <div className="grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3">

              {documents.map((document) => (

                <div
                  key={document.id}
                  className="overflow-hidden rounded-2xl border bg-white shadow-sm"
                >

                  {/* PREVIEW */}
                  <div className="flex h-56 items-center justify-center overflow-hidden bg-gray-100">

                    {document.signed_url &&
                    isImage(document.file_type) ? (

                      <img
                        src={document.signed_url}
                        alt={document.file_name}
                        className="h-full w-full object-cover"
                      />

                    ) : document.signed_url &&
                      isPdf(document.file_type) ? (

                      <a
                        href={document.signed_url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center justify-center text-center"
                      >
                        <div className="text-5xl">
                          📄
                        </div>

                        <p className="mt-3 font-semibold text-purple-600">
                          Open PDF
                        </p>
                      </a>

                    ) : (

                      <div className="text-center text-gray-400">

                        <div className="text-4xl">
                          📁
                        </div>

                        <p className="mt-2 text-sm">
                          Preview unavailable
                        </p>

                      </div>

                    )}

                  </div>

                  {/* DETAILS */}
                  <div className="p-4">

                    <div className="flex items-start justify-between gap-3">

                      <div className="min-w-0">

                        <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                          {document.category}
                        </span>

                        <p className="mt-3 truncate font-semibold text-gray-900">
                          {document.file_name}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          {formatDate(
                            document.created_at
                          )}
                        </p>

                      </div>

                    </div>

                    {document.notes && (
                      <p className="mt-3 line-clamp-2 text-sm text-gray-500">
                        {document.notes}
                      </p>
                    )}

                    <div className="mt-4 flex gap-2">

                      {document.signed_url && (
                        <a
                          href={document.signed_url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 rounded-xl border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-gray-700 hover:bg-gray-50"
                        >
                          View
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          deleteDocument(document)
                        }
                        className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>

      </div>

      {/* UPLOAD MODAL */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6">

          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

            {/* MODAL HEADER */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-6 py-5">

              <div>

                <h2 className="text-xl font-bold text-gray-900">
                  Upload Clinical File
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Add a photo, X-ray or clinical report.
                </p>

              </div>

              <button
                type="button"
                onClick={closeForm}
                disabled={uploading}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 text-xl text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              >
                ×
              </button>

            </div>

            {/* FORM */}
            <form
              onSubmit={uploadDocument}
              className="space-y-5 p-6"
            >

              {/* PATIENT */}
              <div className="rounded-xl bg-orange-50 p-4">

                <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                  Patient
                </p>

                <p className="mt-1 font-bold text-gray-900">
                  {patient.full_name}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Patient ID: P
                  {String(patient.id).padStart(6, "0")}
                </p>

              </div>

              {/* CATEGORY */}
              <div>

                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  File Category *
                </label>

                <select
                  id="category"
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value)
                  }
                  className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                >

                  {CATEGORIES.map(
                    (item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>
                    )
                  )}

                </select>

              </div>

              {/* FILE */}
              <div>

                <label
                  htmlFor="patient-file"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Select File *
                </label>

                <input
                  id="patient-file"
                  type="file"
                  accept=".jpg,.jpeg,.png,.webp,.pdf,image/jpeg,image/png,image/webp,application/pdf"
                  onChange={handleFileChange}
                  className="block w-full rounded-xl border border-gray-300 bg-white p-3 text-sm text-gray-700 file:mr-4 file:rounded-lg file:border-0 file:bg-orange-50 file:px-4 file:py-2 file:font-semibold file:text-orange-600"
                />

                <p className="mt-2 text-xs text-gray-400">
                  JPEG, PNG, WebP or PDF • Maximum 40 MB
                </p>

                {selectedFile && (
                  <div className="mt-3 rounded-xl bg-gray-50 p-3">

                    <p className="font-semibold text-gray-800">
                      {selectedFile.name}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      {formatFileSize(
                        selectedFile.size
                      )}
                    </p>

                  </div>
                )}

              </div>

              {/* NOTES */}
              <div>

                <label
                  htmlFor="notes"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Notes
                </label>

                <textarea
                  id="notes"
                  value={notes}
                  onChange={(event) =>
                    setNotes(event.target.value)
                  }
                  rows={4}
                  placeholder="Example: Pre-operative OPG / Post-op intraoral photo..."
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />

              </div>

              {/* ACTIONS */}
              <div className="flex flex-col-reverse gap-3 border-t pt-5 sm:flex-row sm:justify-end">

                <button
                  type="button"
                  onClick={closeForm}
                  disabled={uploading}
                  className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={uploading}
                  className="rounded-xl bg-orange-500 px-7 py-3 font-semibold text-white shadow-sm hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {uploading
                    ? "Uploading..."
                    : "Upload File"}
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </main>
  );
}