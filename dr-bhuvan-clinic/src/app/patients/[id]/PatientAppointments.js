"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const STATUS_OPTIONS = [
  "Scheduled",
  "Confirmed",
  "Completed",
  "Cancelled",
  "No-show",
];

function formatDate(dateString) {
  if (!dateString) return "";

  return new Date(`${dateString}T00:00:00`).toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
}

function formatTime(timeString) {
  if (!timeString) return "";

  const [hours, minutes] = timeString.split(":");

  const date = new Date();
  date.setHours(Number(hours), Number(minutes), 0, 0);

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

export default function PatientAppointments({ patientId }) {
  const supabase = useMemo(() => createClient(), []);

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!patientId) return;

    loadAppointments();
  }, [patientId]);

  async function loadAppointments() {
    setLoading(true);
    setError("");

    try {
      const numericPatientId = Number(patientId);

      const {
        data,
        error: appointmentsError,
      } = await supabase
        .from("appointments")
        .select("*")
        .eq("patient_id", numericPatientId)
        .order("appointment_date", {
          ascending: false,
        })
        .order("appointment_time", {
          ascending: false,
        });

      if (appointmentsError) {
        throw appointmentsError;
      }

      setAppointments(data || []);
    } catch (err) {
      console.error(err);

      setError(
        err?.message ||
          "Unable to load patient appointments."
      );
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id, status) {
    try {
      const {
        error: updateError,
      } = await supabase
        .from("appointments")
        .update({ status })
        .eq("id", id);

      if (updateError) {
        throw updateError;
      }

      setAppointments((previous) =>
        previous.map((appointment) =>
          appointment.id === id
            ? {
                ...appointment,
                status,
              }
            : appointment
        )
      );
    } catch (err) {
      console.error(err);

      setError(
        err?.message ||
          "Unable to update appointment status."
      );
    }
  }

  const upcomingAppointments = appointments.filter(
    (appointment) =>
      appointment.status !== "Completed" &&
      appointment.status !== "Cancelled" &&
      appointment.status !== "No-show"
  );

  const pastAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "Completed" ||
      appointment.status === "Cancelled" ||
      appointment.status === "No-show"
  );

  return (
    <section className="mt-8">

      {/* HEADER */}

      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-sm font-semibold text-orange-500">
            Patient Visits
          </p>

          <h2 className="mt-1 text-2xl font-bold text-gray-900">
            Appointments
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Appointment history for this patient.
          </p>
        </div>

        <Link
          href={`/appointments?patient=${patientId}`}
          className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
        >
          + New Appointment
        </Link>

      </div>

      {/* ERROR */}

      {error && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      {/* LOADING */}

      {loading ? (
        <div className="rounded-2xl border bg-white p-8 text-center shadow-sm">
          <p className="text-gray-500">
            Loading appointments...
          </p>
        </div>
      ) : appointments.length === 0 ? (

        /* EMPTY */

        <div className="rounded-2xl border bg-white p-8 text-center shadow-sm">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
            📅
          </div>

          <h3 className="mt-4 font-bold text-gray-900">
            No appointments yet
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            No appointment history is available for this patient.
          </p>

          <Link
            href={`/appointments?patient=${patientId}`}
            className="mt-5 inline-flex rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
          >
            + Create Appointment
          </Link>

        </div>

      ) : (

        <div className="space-y-5">

          {/* UPCOMING */}

          {upcomingAppointments.length > 0 && (
            <div className="rounded-2xl border bg-white shadow-sm">

              <div className="border-b px-5 py-4">
                <h3 className="font-bold text-gray-900">
                  Upcoming Appointments
                </h3>
              </div>

              <div className="divide-y">

                {upcomingAppointments.map(
                  (appointment) => (
                    <div
                      key={appointment.id}
                      className="p-5"
                    >

                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        <div className="flex items-start gap-4">

                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 font-bold text-orange-600">
                            📅
                          </div>

                          <div>

                            <p className="font-bold text-gray-900">
                              {formatDate(
                                appointment.appointment_date
                              )}
                            </p>

                            <p className="mt-1 text-sm font-semibold text-orange-600">
                              {formatTime(
                                appointment.appointment_time
                              )}
                            </p>

                            {appointment.treatment && (
                              <p className="mt-2 text-sm text-gray-600">
                                {appointment.treatment}
                              </p>
                            )}

                            {appointment.notes && (
                              <p className="mt-1 text-xs text-gray-400">
                                {appointment.notes}
                              </p>
                            )}

                          </div>

                        </div>

                        <select
                          value={appointment.status}
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

                      </div>

                    </div>
                  )
                )}

              </div>

            </div>
          )}

          {/* HISTORY */}

          {pastAppointments.length > 0 && (
            <div className="rounded-2xl border bg-white shadow-sm">

              <div className="border-b px-5 py-4">
                <h3 className="font-bold text-gray-900">
                  Appointment History
                </h3>
              </div>

              <div className="divide-y">

                {pastAppointments.map(
                  (appointment) => (
                    <div
                      key={appointment.id}
                      className="p-5"
                    >

                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        <div>

                          <p className="font-semibold text-gray-900">
                            {formatDate(
                              appointment.appointment_date
                            )}
                          </p>

                          <p className="mt-1 text-sm text-gray-500">
                            {formatTime(
                              appointment.appointment_time
                            )}
                          </p>

                          {appointment.treatment && (
                            <p className="mt-2 text-sm text-gray-700">
                              {appointment.treatment}
                            </p>
                          )}

                        </div>

                        <span
                          className={`inline-flex w-fit rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses(
                            appointment.status
                          )}`}
                        >
                          {appointment.status}
                        </span>

                      </div>

                    </div>
                  )
                )}

              </div>

            </div>
          )}

        </div>
      )}

    </section>
  );
}