"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const STATUS_OPTIONS = [
  "Scheduled",
  "Confirmed",
  "Completed",
  "Cancelled",
  "No-show",
];

const TREATMENT_OPTIONS = [
  "Consultation",
  "Scaling",
  "Root Canal Treatment",
  "Dental Implant",
  "Laser Dentistry",
  "Periodontal Treatment",
  "Crown / Bridge",
  "Extraction",
  "Cosmetic Dentistry",
  "Follow-up",
  "Other",
];

function getToday() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatTime(timeString) {
  if (!timeString) return "";

  const [hours, minutes] = timeString.split(":");

  const date = new Date();

  date.setHours(
    Number(hours),
    Number(minutes),
    0,
    0
  );

  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function statusClasses(status) {
  switch (status) {
    case "Confirmed":
      return "bg-blue-50 text-blue-700 border-blue-200";

    case "Completed":
      return "bg-green-50 text-green-700 border-green-200";

    case "Cancelled":
      return "bg-red-50 text-red-700 border-red-200";

    case "No-show":
      return "bg-gray-100 text-gray-700 border-gray-200";

    default:
      return "bg-orange-50 text-orange-700 border-orange-200";
  }
}

export default function AppointmentsPage() {
  const supabase = useMemo(
    () => createClient(),
    []
  );

  const searchParams = useSearchParams();

  const patientFromUrl =
    searchParams.get("patient");

  const [appointments, setAppointments] =
    useState([]);

  const [patients, setPatients] =
    useState([]);

  const [role, setRole] =
    useState(null);

  const canManageAppointments = [
    "doctor",
    "assistant_doctor",
    "receptionist",
    "dental_assistant",
  ].includes(role);

  const canDeleteAppointments =
    role === "doctor";

  const [selectedDate, setSelectedDate] =
    useState(getToday());

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [showForm, setShowForm] =
    useState(false);

  const [editingAppointment, setEditingAppointment] =
    useState(null);

  const [
    autoOpenedFromPatient,
    setAutoOpenedFromPatient,
  ] = useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  const [form, setForm] = useState({
    patient_id: "",
    appointment_date: getToday(),
    appointment_time: "",
    treatment: "",
    notes: "",
    dentist_name: "Dr. Bhuvan",
    status: "Scheduled",
  });

  useEffect(() => {
    loadUserRole();
    loadAppointments();
    loadPatients();
  }, [selectedDate]);

  useEffect(() => {
    if (
      !patientFromUrl ||
      patients.length === 0 ||
      autoOpenedFromPatient
    ) {
      return;
    }

    const selectedPatient =
      patients.find(
        (patient) =>
          String(patient.id) ===
          String(patientFromUrl)
      );

    if (!selectedPatient) {
      return;
    }

    setForm((previous) => ({
      ...previous,
      patient_id: String(
        selectedPatient.id
      ),
    }));

    setSearch(
      selectedPatient.full_name || ""
    );

    setShowForm(true);
    setMessage("");
    setError("");

    setAutoOpenedFromPatient(true);
  }, [
    patientFromUrl,
    patients,
    autoOpenedFromPatient,
  ]);

  async function loadUserRole() {
    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setError("You must be logged in.");
        return;
      }

      const {
        data: profile,
        error: profileError,
      } = await supabase
        .from("user_profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (profileError) {
        throw profileError;
      }

      setRole(profile?.role || null);
    } catch (err) {
      console.error(
        "ROLE LOAD ERROR:",
        err
      );

      setError(
        err?.message ||
          "Unable to load user role."
      );
    }
  }

 async function loadAppointments() {
  setLoading(true);
  setError("");

  try {
    // 1. Load appointments for selected date
    const {
      data: appointmentData,
      error: appointmentsError,
    } = await supabase
      .from("appointments")
      .select("*")
      .eq("appointment_date", selectedDate)
      .order("appointment_time", {
        ascending: true,
      });

    if (appointmentsError) {
      throw appointmentsError;
    }

    const rows = appointmentData || [];

    // 2. Load patient details separately
    if (rows.length === 0) {
      setAppointments([]);
      return;
    }

    const patientIds = [
      ...new Set(rows.map((appointment) => appointment.patient_id)),
    ];

    const {
      data: patientData,
      error: patientsError,
    } = await supabase
      .from("patients")
      .select("id, full_name, phone")
      .in("id", patientIds);

    if (patientsError) {
      throw patientsError;
    }

    const patientMap = new Map(
      (patientData || []).map((patient) => [
        String(patient.id),
        patient,
      ])
    );

    const appointmentsWithPatients = rows.map((appointment) => ({
      ...appointment,
      patients:
        patientMap.get(String(appointment.patient_id)) || null,
    }));

    setAppointments(appointmentsWithPatients);
  } catch (err) {
    console.error("LOAD APPOINTMENTS ERROR:", err);

    setError(
      err?.message ||
        err?.details ||
        err?.hint ||
        "Unable to load appointments."
    );
  } finally {
    setLoading(false);
  }
}
  async function loadPatients() {
    try {
      const {
        data,
        error: patientsError,
      } = await supabase
        .from("patients")
        .select(
          "id, full_name, phone"
        )
        .order("full_name", {
          ascending: true,
        });

      if (patientsError) {
        throw patientsError;
      }

      setPatients(data || []);
    } catch (err) {
      console.error(err);

      setError(
        err?.message ||
          "Unable to load patients."
      );
    }
  }
    function resetForm() {
    setForm({
      patient_id: "",
      appointment_date: selectedDate,
      appointment_time: "",
      treatment: "",
      notes: "",
      dentist_name: "Dr. Bhuvan",
      status: "Scheduled",
    });

    setEditingAppointment(null);
  }

  function openNewAppointment() {
    if (!canManageAppointments) {
      setError(
        "You do not have permission to manage appointments."
      );

      return;
    }

    resetForm();

    setShowForm(true);
    setMessage("");
    setError("");
  }

  function openEditAppointment(
    appointment
  ) {
    if (!canManageAppointments) {
      setError(
        "You do not have permission to edit appointments."
      );

      return;
    }

    setEditingAppointment(
      appointment
    );

    setForm({
      patient_id: String(
        appointment.patient_id
      ),

      appointment_date:
        appointment.appointment_date,

      appointment_time:
        appointment.appointment_time?.slice(
          0,
          5
        ) || "",

      treatment:
        appointment.treatment || "",

      notes:
        appointment.notes || "",

      dentist_name:
        appointment.dentist_name ||
        "Dr. Bhuvan",

      status:
        appointment.status ||
        "Scheduled",
    });

    setShowForm(true);
    setMessage("");
    setError("");
  }

  function closeForm() {
    if (saving) return;

    setShowForm(false);
    resetForm();
  }

  function updateForm(
    field,
    value
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  async function saveAppointment(
    event
  ) {
    event.preventDefault();

    if (!canManageAppointments) {
      setError(
        "You do not have permission to manage appointments."
      );

      return;
    }

    setError("");
    setMessage("");

    if (!form.patient_id) {
      setError(
        "Please select a patient."
      );

      return;
    }

    if (!form.appointment_date) {
      setError(
        "Please select an appointment date."
      );

      return;
    }

    if (!form.appointment_time) {
      setError(
        "Please select an appointment time."
      );

      return;
    }

    setSaving(true);

    try {
      const payload = {
        patient_id:
          Number(form.patient_id),

        appointment_date:
          form.appointment_date,

        appointment_time:
          form.appointment_time,

        treatment:
          form.treatment || null,

        notes:
          form.notes || null,

        dentist_name:
          form.dentist_name || null,

        status:
          form.status ||
          "Scheduled",
      };

      let result;

      if (editingAppointment) {
        result = await supabase
          .from("appointments")
          .update(payload)
          .eq(
            "id",
            editingAppointment.id
          );
      } else {
        result = await supabase
          .from("appointments")
          .insert(payload);
      }

      if (result.error) {
        throw result.error;
      }

      setShowForm(false);
      resetForm();

      setMessage(
        editingAppointment
          ? "Appointment updated successfully."
          : "Appointment created successfully."
      );

      loadAppointments();

      setTimeout(() => {
        setMessage("");
      }, 2500);
    } catch (err) {
      console.error(
        "APPOINTMENT SAVE ERROR:",
        err
      );

      setError(
        err?.message ||
          err?.details ||
          err?.hint ||
          "Unable to save appointment."
      );

      setTimeout(() => {
        setError("");
      }, 5000);
    } finally {
      setSaving(false);
    }
  }

  async function updateStatus(
    appointmentId,
    newStatus
  ) {
    if (!canManageAppointments) {
      setError(
        "You do not have permission to update appointment status."
      );

      return;
    }

    setError("");
    setMessage("");

    try {
      const {
        error: updateError,
      } = await supabase
        .from("appointments")
        .update({
          status: newStatus,
        })
        .eq(
          "id",
          appointmentId
        );

      if (updateError) {
        throw updateError;
      }

      setAppointments(
        (previous) =>
          previous.map(
            (appointment) =>
              appointment.id ===
              appointmentId
                ? {
                    ...appointment,
                    status:
                      newStatus,
                  }
                : appointment
          )
      );

      setMessage(
        "Appointment status updated successfully."
      );

      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (err) {
      console.error(
        "APPOINTMENT STATUS ERROR:",
        err
      );

      setError(
        err?.message ||
          "Unable to update appointment status."
      );

      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }

  async function deleteAppointment(
    appointmentId
  ) {
    if (!canDeleteAppointments) {
      setError(
        "Only a doctor can permanently delete appointments."
      );

      return;
    }

    const confirmed =
      window.confirm(
        "Are you sure you want to delete this appointment?"
      );

    if (!confirmed) return;

    setError("");
    setMessage("");

    try {
      const {
        error: deleteError,
      } = await supabase
        .from("appointments")
        .delete()
        .eq(
          "id",
          appointmentId
        );

      if (deleteError) {
        throw deleteError;
      }

      setAppointments(
        (previous) =>
          previous.filter(
            (appointment) =>
              appointment.id !==
              appointmentId
          )
      );

      setMessage(
        "Appointment deleted successfully."
      );

      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (err) {
      console.error(err);

      setError(
        err?.message ||
          "Unable to delete appointment."
      );
    }
  }

  const filteredPatients =
    patients.filter((patient) => {
      const searchText =
        search.trim().toLowerCase();

      if (!searchText) return true;

      return (
        patient.full_name
          ?.toLowerCase()
          .includes(searchText) ||
        patient.phone
          ?.toLowerCase()
          .includes(searchText)
      );
    });

  const todayAppointments =
    appointments.length;

  const confirmedCount =
    appointments.filter(
      (appointment) =>
        appointment.status ===
        "Confirmed"
    ).length;

  const completedCount =
    appointments.filter(
      (appointment) =>
        appointment.status ===
        "Completed"
    ).length;

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
                  ? "bg-green-100"
                  : "bg-red-100"
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

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <Link
                href="/dashboard"
                className="text-sm font-semibold text-orange-500 hover:text-orange-600"
              >
                ← Dashboard
              </Link>

              <h1 className="mt-2 text-3xl font-bold text-gray-900">
                Appointments
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Manage your clinic appointments and patient visits.
              </p>

            </div>

            {canManageAppointments && (
              <button
                type="button"
                onClick={
                  openNewAppointment
                }
                className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600"
              >
                + New Appointment
              </button>
            )}

          </div>

        </div>
      </header>

      {/* MAIN */}

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* DATE + STATS */}

        <div className="grid gap-4 md:grid-cols-4">

          <div className="rounded-2xl border bg-white p-5 shadow-sm">

            <label className="text-sm font-semibold text-gray-600">
              Appointment Date
            </label>

            <input
              type="date"
              value={selectedDate}
              onChange={(event) =>
                setSelectedDate(
                  event.target.value
                )
              }
              className="mt-3 h-12 w-full rounded-xl border border-gray-300 px-3 font-semibold text-gray-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />

          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">

            <p className="text-sm font-medium text-gray-500">
              Today
            </p>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              {todayAppointments}
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Appointments
            </p>

          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">

            <p className="text-sm font-medium text-gray-500">
              Confirmed
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-600">
              {confirmedCount}
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Confirmed visits
            </p>

          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">

            <p className="text-sm font-medium text-gray-500">
              Completed
            </p>

            <p className="mt-2 text-3xl font-bold text-green-600">
              {completedCount}
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Completed visits
            </p>

          </div>

        </div>

        {/* APPOINTMENT LIST */}

        <div className="mt-8 overflow-hidden rounded-2xl border bg-white shadow-sm">

          <div className="border-b px-5 py-5 sm:px-6">

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <h2 className="text-xl font-bold text-gray-900">
                  {formatDate(selectedDate)}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {appointments.length === 0
                    ? "No appointments scheduled."
                    : `${appointments.length} appointment${
                        appointments.length === 1
                          ? ""
                          : "s"
                      }`}
                </p>

              </div>

              <button
                type="button"
                onClick={loadAppointments}
                className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                ↻ Refresh
              </button>

            </div>

          </div>

          {loading ? (
            <div className="flex min-h-[250px] items-center justify-center">
              <p className="text-gray-500">
                Loading appointments...
              </p>
            </div>
          ) : appointments.length === 0 ? (

            <div className="px-6 py-16 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl">
                📅
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                No appointments
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                There are no appointments scheduled for this date.
              </p>

              {canManageAppointments && (
                <button
                  type="button"
                  onClick={
                    openNewAppointment
                  }
                  className="mt-6 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
                >
                  + Create Appointment
                </button>
              )}

            </div>

          ) : (
            <div className="divide-y">

              {appointments.map(
                (appointment) => (
                  <div
                    key={appointment.id}
                    className="p-5 transition hover:bg-orange-50/30 sm:p-6"
                  >

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                      {/* PATIENT */}

                      <div className="flex items-start gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 font-bold text-orange-600">
                          {appointment.appointment_time?.slice(
                            0,
                            5
                          )}
                        </div>

                        <div>

                          <Link
                            href={`/patients/${appointment.patient_id}`}
                            className="text-lg font-bold text-gray-900 hover:text-orange-600"
                          >
                            {appointment.patients?.full_name ||
                              "Unknown Patient"}
                          </Link>

                          <p className="mt-1 text-sm text-gray-500">
                            {appointment.patients?.phone ||
                              "No phone number"}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-2">

                            {appointment.treatment && (
                              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                                {appointment.treatment}
                              </span>
                            )}

                            {appointment.dentist_name && (
                              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                                {appointment.dentist_name}
                              </span>
                            )}

                          </div>

                        </div>

                      </div>
                                            {/* RIGHT SIDE */}

                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

                        {canManageAppointments && (
                          <select
                            value={
                              appointment.status
                            }
                            onChange={(event) =>
                              updateStatus(
                                appointment.id,
                                event.target.value
                              )
                            }
                            className={`rounded-xl border px-3 py-2 text-sm font-semibold outline-none ${statusClasses(
                              appointment.status
                            )}`}
                          >

                            {STATUS_OPTIONS.map(
                              (status) => (
                                <option
                                  key={status}
                                  value={status}
                                >
                                  {status}
                                </option>
                              )
                            )}

                          </select>
                        )}

                        {canManageAppointments && (
                          <button
                            type="button"
                            onClick={() =>
                              openEditAppointment(
                                appointment
                              )
                            }
                            className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                          >
                            Edit
                          </button>
                        )}

                        {canDeleteAppointments && (
                          <button
                            type="button"
                            onClick={() =>
                              deleteAppointment(
                                appointment.id
                              )
                            }
                            className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100"
                          >
                            Delete
                          </button>
                        )}

                      </div>

                    </div>

                    {appointment.notes && (
                      <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-600">

                        <span className="font-semibold text-gray-800">
                          Notes:
                        </span>{" "}

                        {appointment.notes}

                      </div>
                    )}

                  </div>
                )
              )}

            </div>
          )}

        </div>

      </div>

      {/* NEW / EDIT APPOINTMENT MODAL */}

      {showForm &&
        canManageAppointments && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6">

            <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

              {/* MODAL HEADER */}

              <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-6 py-5">

                <div>

                  <h2 className="text-xl font-bold text-gray-900">
                    {editingAppointment
                      ? "Edit Appointment"
                      : "New Appointment"}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Add appointment details below.
                  </p>

                </div>

                <button
                  type="button"
                  onClick={closeForm}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 text-xl text-gray-500 hover:bg-gray-50"
                >
                  ×
                </button>

              </div>

              {/* FORM */}

              <form
                onSubmit={
                  saveAppointment
                }
                className="space-y-5 p-6"
              >

                {/* PATIENT */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Patient *
                  </label>

                  <input
                    type="text"
                    value={search}
                    onChange={(event) =>
                      setSearch(
                        event.target.value
                      )
                    }
                    placeholder="Search patient by name or phone..."
                    className="mb-2 h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />

                  <select
                    value={
                      form.patient_id
                    }
                    onChange={(event) =>
                      updateForm(
                        "patient_id",
                        event.target.value
                      )
                    }
                    required
                    className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 font-medium text-gray-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  >

                    <option value="">
                      Select patient
                    </option>

                    {filteredPatients.map(
                      (patient) => (
                        <option
                          key={patient.id}
                          value={patient.id}
                        >
                          {patient.full_name} —{" "}
                          {patient.phone}
                        </option>
                      )
                    )}

                  </select>

                  {filteredPatients.length ===
                    0 && (
                    <p className="mt-2 text-xs text-red-500">
                      No patients found.
                    </p>
                  )}

                </div>

                {/* DATE + TIME */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Date *
                    </label>

                    <input
                      type="date"
                      value={
                        form.appointment_date
                      }
                      onChange={(event) =>
                        updateForm(
                          "appointment_date",
                          event.target.value
                        )
                      }
                      required
                      className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />

                  </div>

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Time *
                    </label>

                    <input
                      type="time"
                      value={
                        form.appointment_time
                      }
                      onChange={(event) =>
                        updateForm(
                          "appointment_time",
                          event.target.value
                        )
                      }
                      required
                      className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />

                  </div>

                </div>

                {/* TREATMENT */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Treatment / Reason
                  </label>

                  <select
                    value={
                      form.treatment
                    }
                    onChange={(event) =>
                      updateForm(
                        "treatment",
                        event.target.value
                      )
                    }
                    className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  >

                    <option value="">
                      Select treatment
                    </option>

                    {TREATMENT_OPTIONS.map(
                      (treatment) => (
                        <option
                          key={treatment}
                          value={treatment}
                        >
                          {treatment}
                        </option>
                      )
                    )}

                  </select>

                </div>
                                {/* DENTIST + STATUS */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Dentist
                    </label>

                    <input
                      type="text"
                      value={
                        form.dentist_name
                      }
                      onChange={(event) =>
                        updateForm(
                          "dentist_name",
                          event.target.value
                        )
                      }
                      className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />

                  </div>

                  <div>

                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Status
                    </label>

                    <select
                      value={
                        form.status
                      }
                      onChange={(event) =>
                        updateForm(
                          "status",
                          event.target.value
                        )
                      }
                      className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    >

                      {STATUS_OPTIONS.map(
                        (status) => (
                          <option
                            key={status}
                            value={status}
                          >
                            {status}
                          </option>
                        )
                      )}

                    </select>

                  </div>

                </div>

                {/* NOTES */}

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Notes
                  </label>

                  <textarea
                    value={form.notes}
                    onChange={(event) =>
                      updateForm(
                        "notes",
                        event.target.value
                      )
                    }
                    rows={4}
                    placeholder="Additional appointment notes..."
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />

                </div>

                {/* ACTIONS */}

                <div className="flex flex-col-reverse gap-3 border-t pt-5 sm:flex-row sm:justify-end">

                  <button
                    type="button"
                    onClick={closeForm}
                    disabled={saving}
                    className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={saving}
                    className="rounded-xl bg-orange-500 px-7 py-3 font-semibold text-white shadow-sm hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {saving
                      ? "Saving..."
                      : editingAppointment
                      ? "Update Appointment"
                      : "Create Appointment"}
                  </button>

                </div>

              </form>

            </div>

          </div>
        )}

    </main>
  );
}
