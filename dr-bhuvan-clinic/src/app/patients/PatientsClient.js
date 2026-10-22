"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const MODULES = {
  treatments: {
    title: "Select Patient for Treatments",
    subtitle: "Choose a patient to view and manage treatment records.",
    path: "treatments",
    color: "orange",
    button: "Open Treatments →",
  },

  periodontal: {
    title: "Select Patient for Periodontal Chart",
    subtitle: "Choose a patient to open the periodontal chart.",
    path: "periodontal",
    color: "blue",
    button: "Open Periodontal Chart →",
  },

  payments: {
    title: "Select Patient for Payments",
    subtitle: "Choose a patient to view and manage payments.",
    path: "payments",
    color: "green",
    button: "Open Payments →",
  },

  documents: {
    title: "Select Patient for Photos & X-rays",
    subtitle: "Choose a patient to manage clinical photos and X-rays.",
    path: "documents",
    color: "purple",
    button: "Open Photos & X-rays →",
  },
};

export default function PatientsClient() {
  const supabase = createClient();

  const searchParams = useSearchParams();

  const requestedModule =
    searchParams.get("module") || "";

  const activeModule =
    MODULES[requestedModule] || null;

  const [showForm, setShowForm] = useState(false);

  const [patients, setPatients] = useState([]);

  const [loading, setLoading] = useState(false);

  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const [search, setSearch] = useState("");

  const [fullName, setFullName] = useState("");

  const [phone, setPhone] = useState("");

  const [dateOfBirth, setDateOfBirth] = useState("");

  const [gender, setGender] = useState("");

  // -----------------------------------------
  // LOAD PATIENTS
  // -----------------------------------------

  async function loadPatients() {
    setLoading(true);
    setError("");

    try {
      const {
  data,
  error,
} = await supabase
  .from("patients")
  .select(`
    id,
    created_at,
    full_name,
    phone,
    date_of_birth,
    gender,
    email,
    address
  `)
  .order("created_at", {
    ascending: false,
  });

      if (error) {
        throw error;
      }

      setPatients(data || []);
    } catch (err) {
      console.error(err);

      setError(
        err?.message ||
          "Unable to load patients."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPatients();
  }, []);

  // -----------------------------------------
  // SAVE PATIENT
  // -----------------------------------------

  async function handleSavePatient(e) {
    e.preventDefault();

    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const {
        error,
      } = await supabase
        .from("patients")
        .insert({
          full_name: fullName.trim(),
          phone: phone.trim(),
          date_of_birth:
            dateOfBirth || null,
          gender: gender || null,
        });

      if (error) {
        throw error;
      }

      setSuccess(
        "Patient saved successfully."
      );

      setFullName("");
      setPhone("");
      setDateOfBirth("");
      setGender("");

      setShowForm(false);

      await loadPatients();

      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (err) {
      console.error(err);

      setError(
        err?.message ||
          "Unable to save patient."
      );
    } finally {
      setSaving(false);
    }
  }

  // -----------------------------------------
  // SEARCH
  // -----------------------------------------

  const filteredPatients = patients.filter(
    (patient) => {
      const searchText =
        search.toLowerCase().trim();

      if (!searchText) return true;

      const patientId =
        `P${String(patient.id).padStart(
          6,
          "0"
        )}`.toLowerCase();

      return (
        patient.full_name
          ?.toLowerCase()
          .includes(searchText) ||

        patient.phone
          ?.toLowerCase()
          .includes(searchText) ||

        patient.email
          ?.toLowerCase()
          .includes(searchText) ||

        patientId.includes(searchText)
      );
    }
  );

  // -----------------------------------------
  // PATIENT DESTINATION
  // -----------------------------------------

  function getPatientHref(patient) {
    if (!activeModule) {
      return `/patients/${patient.id}`;
    }

    return `/patients/${patient.id}/${activeModule.path}`;
  }

  // -----------------------------------------
  // PAGE TITLE
  // -----------------------------------------

  const pageTitle =
    activeModule?.title ||
    "Patients";

  const pageSubtitle =
    activeModule?.subtitle ||
    "Manage your clinic patient records.";

  // -----------------------------------------
  // UI
  // -----------------------------------------

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="border-b bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          <div>

            <p className="text-sm font-semibold text-orange-500">
              Clinic Management
            </p>

            <h1 className="mt-1 text-3xl font-bold text-gray-900">
              {pageTitle}
            </h1>

            <p className="mt-1 text-gray-500">
              {pageSubtitle}
            </p>

          </div>

          <div className="flex items-center gap-3">

            {activeModule && (
              <a
                href="/patients"
                className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                ← All Patients
              </a>
            )}

            <a
              href="/dashboard"
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              ← Dashboard
            </a>

          </div>

        </div>

      </header>

      {/* MAIN */}
      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* ERROR */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* SUCCESS */}
        {success && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {success}
          </div>
        )}

        {/* SEARCH + ADD */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex-1">

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search by name, phone, email or Patient ID..."
              className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />

          </div>

          {!activeModule && (
            <button
              type="button"
              onClick={() => {
                setShowForm(!showForm);
                setError("");
                setSuccess("");
              }}
              className="rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              {showForm
                ? "Close"
                : "+ Add Patient"}
            </button>
          )}

        </div>

        {/* MODULE INFO */}
        {activeModule && (
          <div className="mb-6 rounded-2xl border border-orange-200 bg-orange-50 p-5">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                {requestedModule ===
                  "treatments" && "🦷"}

                {requestedModule ===
                  "periodontal" && "🩺"}

                {requestedModule ===
                  "payments" && "💰"}

                {requestedModule ===
                  "documents" && "📷"}
              </div>

              <div>

                <p className="font-bold text-gray-900">
                  Select a patient
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  Click the patient below to open
                  their{" "}
                  {requestedModule ===
                    "treatments"
                    ? "treatment records"
                    : requestedModule ===
                      "periodontal"
                    ? "periodontal chart"
                    : requestedModule ===
                      "payments"
                    ? "payment records"
                    : "photos and X-rays"}
                  .
                </p>

              </div>

            </div>

          </div>
        )}

        {/* ADD PATIENT FORM */}
        {showForm && !activeModule && (
          <form
            onSubmit={handleSavePatient}
            className="mb-8 rounded-2xl border bg-white p-6 shadow-sm"
          >

            <h2 className="text-xl font-bold text-gray-900">
              Add New Patient
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Enter the patient's basic information.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              {/* FULL NAME */}
              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name *
                </label>

                <input
                  type="text"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(e.target.value)
                  }
                  placeholder="Patient full name"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />

              </div>

              {/* PHONE */}
              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone *
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  placeholder="Phone number"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />

              </div>

              {/* DOB */}
              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>

                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) =>
                    setDateOfBirth(e.target.value)
                  }
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />

              </div>

              {/* GENDER */}
              <div>

                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Gender
                </label>

                <select
                  value={gender}
                  onChange={(e) =>
                    setGender(e.target.value)
                  }
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                >

                  <option value="">
                    Select gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

            </div>

            <div className="mt-6 flex justify-end gap-3">

              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setError("");
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
                  : "Save Patient"}
              </button>

            </div>

          </form>
        )}

        {/* PATIENT COUNT */}
        <div className="mb-4 text-sm text-gray-500">
          Total patients:{" "}
          <span className="font-semibold text-gray-900">
            {filteredPatients.length}
          </span>
        </div>

        {/* PATIENT LIST */}
        {loading ? (

          <div className="rounded-2xl border bg-white p-12 text-center shadow-sm">

            <p className="text-gray-500">
              Loading patients...
            </p>

          </div>

        ) : filteredPatients.length === 0 ? (

          <div className="rounded-2xl border bg-white p-12 text-center shadow-sm">

            <div className="text-5xl">
              🦷
            </div>

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              No patients found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {search
                ? "Try a different search."
                : "Add your first patient to start managing clinic records."}
            </p>

            {!search && !activeModule && (
              <button
                type="button"
                onClick={() =>
                  setShowForm(true)
                }
                className="mt-6 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
              >
                + Add First Patient
              </button>
            )}

          </div>

        ) : (

          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

            {/* TABLE HEADER */}
            <div className="hidden grid-cols-6 border-b bg-gray-50 px-6 py-4 text-xs font-bold uppercase tracking-wide text-gray-500 md:grid">

              <div className="col-span-2">
                Patient
              </div>

              <div>
                Patient ID
              </div>

              <div>
                Phone
              </div>

              <div>
                Gender
              </div>

              <div className="text-right">
                Action
              </div>

            </div>

            {/* PATIENTS */}
            <div className="divide-y">

              {filteredPatients.map(
                (patient) => (

                  <div
                    key={patient.id}
                    className="group transition hover:bg-orange-50"
                  >

                    <a
                      href={getPatientHref(
                        patient
                      )}
                      className="block px-6 py-5"
                    >

                      <div className="grid gap-4 md:grid-cols-6 md:items-center">

                        {/* PATIENT */}
                        <div className="flex items-center gap-4 md:col-span-2">

                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 font-bold text-orange-500">
                            {patient.full_name
                              ?.charAt(0)
                              ?.toUpperCase()}
                          </div>

                          <div className="min-w-0">

                            <p className="font-bold text-gray-900">
                              {patient.full_name}
                            </p>

                            <p className="mt-1 truncate text-sm text-gray-500">
                              {patient.email ||
                                "No email provided"}
                            </p>

                          </div>

                        </div>

                        {/* PATIENT ID */}
                        <div>

                          <p className="text-xs text-gray-500 md:hidden">
                            Patient ID
                          </p>

                          <p className="font-bold text-orange-500">
                            P
                            {String(
                              patient.id
                            ).padStart(
                              6,
                              "0"
                            )}
                          </p>

                        </div>

                        {/* PHONE */}
                        <div>

                          <p className="text-xs text-gray-500 md:hidden">
                            Phone
                          </p>

                          <p className="font-medium text-gray-700">
                            {patient.phone}
                          </p>

                        </div>

                        {/* GENDER */}
                        <div>

                          <p className="text-xs text-gray-500 md:hidden">
                            Gender
                          </p>

                          <p className="font-medium text-gray-700">
                            {patient.gender ||
                              "—"}
                          </p>

                        </div>

                        {/* ACTION */}
                        <div className="flex items-center justify-between md:justify-end">

                          <span className="text-sm font-semibold text-orange-500 md:hidden">
                            {activeModule
                              ? activeModule.button
                              : "View profile →"}
                          </span>

                          <span className="hidden rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition group-hover:border-orange-300 group-hover:text-orange-500 md:inline-flex">
                            {activeModule
                              ? "Select Patient"
                              : "View"}
                          </span>

                        </div>

                      </div>

                    </a>

                  </div>

                )
              )}

            </div>

          </div>

        )}

      </div>

    </main>
  );
}