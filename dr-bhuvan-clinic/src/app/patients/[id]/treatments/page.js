"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useParams } from "next/navigation";

export default function TreatmentsPage() {
  const supabase = createClient();
  const params = useParams();
  const patientId = params.id;

  const [patient, setPatient] = useState(null);
  const [treatments, setTreatments] = useState([]);
  const [role, setRole] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [editingTreatment, setEditingTreatment] = useState(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [treatmentDate, setTreatmentDate] = useState("");
  const [treatmentName, setTreatmentName] = useState("");
  const [toothNumber, setToothNumber] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [procedureNotes, setProcedureNotes] = useState("");
  const [dentistName, setDentistName] = useState("Dr. Bhuvan");
  const [fee, setFee] = useState("");
  const [status, setStatus] = useState("Completed");

  const canManageTreatments =
    role === "doctor" || role === "assistant_doctor";

  const canViewTreatments =
    role === "doctor" ||
    role === "assistant_doctor" ||
    role === "receptionist";

  async function loadData() {
    setLoading(true);
    setError("");

    // -----------------------------------------
    // CURRENT USER
    // -----------------------------------------

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setError("You must be logged in.");
      setLoading(false);
      return;
    }

    // -----------------------------------------
    // USER ROLE
    // -----------------------------------------

    const { data: profile, error: profileError } =
      await supabase
        .from("user_profiles")
        .select("role")
        .eq("id", user.id)
        .single();

    if (profileError) {
      setError(profileError.message);
      setLoading(false);
      return;
    }

    setRole(profile.role);

    // -----------------------------------------
    // PATIENT
    // -----------------------------------------

    const { data: patientData, error: patientError } =
      await supabase
        .from("patients")
        .select("id, full_name")
        .eq("id", patientId)
        .single();

    if (patientError) {
      setError(patientError.message);
      setLoading(false);
      return;
    }

    // -----------------------------------------
    // TREATMENTS
    // -----------------------------------------

    const {
      data: treatmentData,
      error: treatmentError,
    } = await supabase
      .from("Treatments")
      .select("*")
      .eq("patient_id", patientId)
      .order("treatment_date", {
        ascending: false,
      });

    if (treatmentError) {
      setError(treatmentError.message);
      setLoading(false);
      return;
    }

    setPatient(patientData);
    setTreatments(treatmentData || []);
    setLoading(false);
  }

  useEffect(() => {
    if (patientId) {
      loadData();
    }
  }, [patientId]);

  function resetForm() {
    setTreatmentDate("");
    setTreatmentName("");
    setToothNumber("");
    setDiagnosis("");
    setProcedureNotes("");
    setDentistName("Dr. Bhuvan");
    setFee("");
    setStatus("Completed");
    setEditingTreatment(null);
  }

  function openAddForm() {
    resetForm();
    setError("");
    setSuccess("");
    setShowForm(true);
  }

  function openEditForm(treatment) {
    if (!canManageTreatments) {
      return;
    }

    setEditingTreatment(treatment);

    setTreatmentDate(treatment.treatment_date || "");
    setTreatmentName(treatment.treatment_name || "");
    setToothNumber(treatment.tooth_number || "");
    setDiagnosis(treatment.diagnosis || "");
    setProcedureNotes(treatment.procedure_notes || "");
    setDentistName(treatment.dentist_name || "");

    setFee(
      treatment.fee !== null &&
        treatment.fee !== undefined
        ? String(treatment.fee)
        : ""
    );

    setStatus(treatment.status || "Completed");

    setError("");
    setSuccess("");
    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
    async function handleSaveTreatment(e) {
    e.preventDefault();

    if (!canManageTreatments) {
      setError(
        "You have view-only access to treatment history."
      );
      return;
    }

    setSaving(true);
    setError("");
    setSuccess("");

    if (!treatmentName.trim()) {
      setError("Please enter the treatment name.");
      setSaving(false);
      return;
    }

    if (!treatmentDate) {
      setError("Please select the treatment date.");
      setSaving(false);
      return;
    }

    const treatmentData = {
      patient_id: Number(patientId),
      treatment_date: treatmentDate,
      treatment_name: treatmentName.trim(),
      tooth_number: toothNumber.trim() || null,
      diagnosis: diagnosis.trim() || null,
      procedure_notes: procedureNotes.trim() || null,
      dentist_name: dentistName.trim() || null,
      fee: fee ? Number(fee) : null,
      status: status || null,
    };

    let result;

    if (editingTreatment) {
      result = await supabase
        .from("Treatments")
        .update(treatmentData)
        .eq("id", editingTreatment.id);
    } else {
      result = await supabase
        .from("Treatments")
        .insert(treatmentData);
    }

    if (result.error) {
      setError(result.error.message);
      setSaving(false);
      return;
    }

    setSuccess(
      editingTreatment
        ? "Treatment updated successfully."
        : "Treatment saved successfully."
    );

    resetForm();
    setShowForm(false);
    setSaving(false);

    await loadData();
  }

  async function handleDeleteTreatment(treatmentId) {
    if (!canManageTreatments) {
      setError(
        "You have view-only access to treatment history."
      );
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete this treatment record?\n\nThis action cannot be undone."
    );

    if (!confirmed) {
      return;
    }

    setDeleting(true);
    setError("");
    setSuccess("");

    const { error } = await supabase
      .from("Treatments")
      .delete()
      .eq("id", treatmentId);

    if (error) {
      setError(error.message);
      setDeleting(false);
      return;
    }

    setSuccess("Treatment deleted successfully.");
    setDeleting(false);

    await loadData();
  }

  function formatDate(date) {
    if (!date) return "—";

    return new Date(
      `${date}T00:00:00`
    ).toLocaleDateString("en-IN");
  }

  function statusStyle(value) {
    switch (value) {
      case "Completed":
        return "bg-green-100 text-green-700";

      case "In Progress":
        return "bg-blue-100 text-blue-700";

      case "Planned":
        return "bg-yellow-100 text-yellow-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">
          Loading treatment history...
        </p>
      </main>
    );
  }

  if (!patient) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-600">
          Patient not found.
        </p>
      </main>
    );
  }

  if (!canViewTreatments) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-2xl border bg-white p-8 text-center shadow-sm">
          <div className="text-5xl">
            🔒
          </div>

          <h1 className="mt-5 text-2xl font-bold text-gray-900">
            Access Restricted
          </h1>

          <p className="mt-2 text-gray-500">
            You do not have permission to view
            treatment records.
          </p>

          <a
            href={`/patients/${patient.id}`}
            className="mt-6 inline-flex rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
          >
            ← Back to Patient
          </a>
        </div>
      </main>
    );
  }
    return (
    <main className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          <div>
            <p className="text-sm font-semibold text-orange-500">
              Treatment History
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              {patient.full_name}
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Patient ID: P
              {String(patient.id).padStart(6, "0")}
            </p>
          </div>

          <div className="flex items-center gap-3">

            {role === "receptionist" && (
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                View Only
              </span>
            )}

            <a
              href={`/patients/${patient.id}`}
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50"
            >
              ← Back to Patient
            </a>

          </div>

        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* MESSAGES */}

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {success}
          </div>
        )}

        {/* HEADING */}

        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Dental Treatments
            </h2>

            <p className="mt-1 text-gray-500">
              Complete history of treatments and procedures
            </p>
          </div>

          {canManageTreatments && (
            <button
              onClick={() => {
                if (showForm) {
                  resetForm();
                  setShowForm(false);
                } else {
                  openAddForm();
                }
              }}
              className="rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white shadow-sm transition hover:bg-orange-600"
            >
              {showForm
                ? "Close"
                : "+ Add Treatment"}
            </button>
          )}

        </div>

        {/* RECEPTIONIST VIEW-ONLY NOTICE */}

        {role === "receptionist" && (
          <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700">
            You can view this patient&apos;s
            previous treatment history, but
            clinical treatment records cannot be
            modified.
          </div>
        )}

        {/* ADD / EDIT FORM */}

        {showForm && canManageTreatments && (
          <form
            onSubmit={handleSaveTreatment}
            className="mb-8 rounded-2xl border bg-white p-6 shadow-sm"
          >

            <div className="flex items-center justify-between">

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {editingTreatment
                    ? "Edit Treatment"
                    : "Add New Treatment"}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {editingTreatment
                    ? "Update the treatment information."
                    : "Record the treatment or procedure performed for this patient."}
                </p>
              </div>

              {editingTreatment && (
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                  Editing
                </span>
              )}

            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              {/* DATE */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Treatment Date *
                </label>

                <input
                  type="date"
                  value={treatmentDate}
                  onChange={(e) =>
                    setTreatmentDate(e.target.value)
                  }
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* TREATMENT NAME */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Treatment Name *
                </label>

                <input
                  type="text"
                  value={treatmentName}
                  onChange={(e) =>
                    setTreatmentName(e.target.value)
                  }
                  placeholder="e.g. Scaling, Implant Placement, RCT"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* TOOTH */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Tooth Number
                </label>

                <input
                  type="text"
                  value={toothNumber}
                  onChange={(e) =>
                    setToothNumber(e.target.value)
                  }
                  placeholder="e.g. 11, 36, 46, Full Mouth"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* DENTIST */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Dentist
                </label>

                <input
                  type="text"
                  value={dentistName}
                  onChange={(e) =>
                    setDentistName(e.target.value)
                  }
                  placeholder="Dentist name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* DIAGNOSIS */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Diagnosis
                </label>

                <input
                  type="text"
                  value={diagnosis}
                  onChange={(e) =>
                    setDiagnosis(e.target.value)
                  }
                  placeholder="e.g. Gingivitis, Chronic periodontitis, Caries"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* NOTES */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Procedure Notes
                </label>

                <textarea
                  value={procedureNotes}
                  onChange={(e) =>
                    setProcedureNotes(e.target.value)
                  }
                  placeholder="Describe the procedure, materials used, implant system, instructions, etc."
                  rows={4}
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* FEE */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Treatment Fee
                </label>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={fee}
                  onChange={(e) =>
                    setFee(e.target.value)
                  }
                  placeholder="₹ Amount"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* STATUS */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Status
                </label>

                <select
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value)
                  }
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                >
                  <option value="Planned">
                    Planned
                  </option>

                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Completed">
                    Completed
                  </option>

                  <option value="Cancelled">
                    Cancelled
                  </option>
                </select>
              </div>

            </div>

            {/* FORM BUTTONS */}

            <div className="mt-6 flex justify-end gap-3">

              <button
                type="button"
                onClick={() => {
                  resetForm();
                  setShowForm(false);
                }}
                className="rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving
                  ? "Saving..."
                  : editingTreatment
                  ? "Update Treatment"
                  : "Save Treatment"}
              </button>

            </div>

          </form>
        )}
                {/* TREATMENT LIST */}

        {treatments.length === 0 ? (

          <div className="rounded-2xl border bg-white p-16 text-center shadow-sm">

            <div className="text-6xl">
              🦷
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              No treatments recorded
            </h2>

            <p className="mt-2 text-gray-500">
              {canManageTreatments
                ? "Add the first treatment for this patient."
                : "No treatment history has been recorded for this patient."}
            </p>

            {canManageTreatments && !showForm && (
              <button
                onClick={openAddForm}
                className="mt-6 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
              >
                + Add First Treatment
              </button>
            )}

          </div>

        ) : (

          <div className="space-y-5">

            {treatments.map((treatment) => (

              <div
                key={treatment.id}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >

                {/* TREATMENT HEADER */}

                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                  <div>

                    <div className="flex flex-wrap items-center gap-3">

                      <h3 className="text-xl font-bold text-gray-900">
                        {treatment.treatment_name}
                      </h3>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(
                          treatment.status
                        )}`}
                      >
                        {treatment.status || "—"}
                      </span>

                    </div>

                    <p className="mt-2 text-sm text-gray-500">

                      {formatDate(
                        treatment.treatment_date
                      )}

                      {treatment.tooth_number
                        ? ` • Tooth ${treatment.tooth_number}`
                        : ""}

                    </p>

                  </div>

                  {/* FEE + ACTIONS */}

                  <div className="flex items-start gap-6">

                    <div className="text-right">

                      <p className="text-sm text-gray-500">
                        Treatment Fee
                      </p>

                      <p className="mt-1 text-xl font-bold text-orange-500">

                        {treatment.fee !== null &&
                        treatment.fee !== undefined
                          ? `₹${Number(
                              treatment.fee
                            ).toLocaleString("en-IN")}`
                          : "—"}

                      </p>

                    </div>

                    {/* ACTIONS — DOCTOR / ASSISTANT ONLY */}

                    {canManageTreatments && (
                      <div className="flex gap-2">

                        <button
                          type="button"
                          onClick={() =>
                            openEditForm(treatment)
                          }
                          className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-100"
                        >
                          ✏️ Edit
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleDeleteTreatment(
                              treatment.id
                            )
                          }
                          disabled={deleting}
                          className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-100 disabled:opacity-50"
                        >
                          🗑️ Delete
                        </button>

                      </div>
                    )}

                  </div>

                </div>

                {/* DETAILS */}

                <div className="mt-5 grid gap-5 border-t pt-5 md:grid-cols-2">

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Diagnosis
                    </p>

                    <p className="mt-1 text-gray-800">
                      {treatment.diagnosis ||
                        "Not recorded"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Dentist
                    </p>

                    <p className="mt-1 text-gray-800">
                      {treatment.dentist_name ||
                        "Not recorded"}
                    </p>
                  </div>

                  <div className="md:col-span-2">

                    <p className="text-sm font-medium text-gray-500">
                      Procedure Notes
                    </p>

                    <p className="mt-1 whitespace-pre-wrap text-gray-800">
                      {treatment.procedure_notes ||
                        "No procedure notes recorded."}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </main>
  );
}