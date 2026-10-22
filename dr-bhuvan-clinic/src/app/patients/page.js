"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function PatientsPage() {
  const supabase = useMemo(() => createClient(), []);

  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadPatients() {
    setLoading(true);
    setError("");

    try {
      const {
        data,
        error: patientsError,
      } = await supabase
        .from("patients")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

      if (patientsError) {
        throw patientsError;
      }

      setPatients(data || []);
    } catch (err) {
      console.error(err);

      setError(
        err?.message || "Unable to load patients."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPatients();
  }, []);

  // --------------------------------------------------
  // SEARCH
  // --------------------------------------------------

  const filteredPatients = patients.filter((patient) => {
    const searchText = search.trim().toLowerCase();

    if (!searchText) {
      return true;
    }

    const name =
      patient.full_name?.toLowerCase() || "";

    const phone =
      patient.phone?.toLowerCase() || "";

    const email =
      patient.email?.toLowerCase() || "";

    const patientId =
      `P${String(patient.id).padStart(6, "0")}`
        .toLowerCase();

    const databaseId =
      String(patient.id).toLowerCase();

    return (
      name.includes(searchText) ||
      phone.includes(searchText) ||
      email.includes(searchText) ||
      patientId.includes(searchText) ||
      databaseId.includes(searchText)
    );
  });

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="border-b bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>

            <p className="text-sm font-semibold text-orange-500">
              Clinic Management
            </p>

            <h1 className="mt-1 text-2xl font-bold text-gray-900">
              Patients
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage your clinic patient records.
            </p>

          </div>

          <Link
            href="/dashboard"
            className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            ← Dashboard
          </Link>

        </div>

      </header>


      {/* CONTENT */}

      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* TOP BAR */}

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* SEARCH */}

          <div className="relative w-full lg:max-w-xl">

            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
              🔍
            </div>

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search by name, phone, email or Patient ID..."
              className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute inset-y-0 right-0 px-4 text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>
            )}

          </div>


          {/* ADD PATIENT */}

          <Link
            href="/patients/new"
            className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600"
          >
            + Add Patient
          </Link>

        </div>


        {/* SEARCH RESULT INFO */}

        <div className="mt-5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-gray-500">

            {search ? (
              <>
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {filteredPatients.length}
                </span>{" "}
                result
                {filteredPatients.length !== 1
                  ? "s"
                  : ""}{" "}
                for{" "}
                <span className="font-semibold text-gray-900">
                  &quot;{search}&quot;
                </span>
              </>
            ) : (
              <>
                Total patients:{" "}
                <span className="font-semibold text-gray-900">
                  {patients.length}
                </span>
              </>
            )}

          </p>

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-left text-sm font-semibold text-orange-500 hover:text-orange-600 sm:text-right"
            >
              Clear search
            </button>
          )}

        </div>


        {/* ERROR */}

        {error && (
          <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
            {error}
          </div>
        )}


        {/* LOADING */}

        {loading ? (

          <div className="mt-6 rounded-2xl border bg-white p-12 text-center shadow-sm">

            <div className="text-3xl">
              ⏳
            </div>

            <p className="mt-3 text-sm text-gray-500">
              Loading patients...
            </p>

          </div>

        ) : filteredPatients.length === 0 ? (

          /* NO RESULTS */

          <div className="mt-6 rounded-2xl border bg-white p-12 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl">
              👤
            </div>

            <h2 className="mt-5 text-lg font-bold text-gray-900">
              {search
                ? "No patients found"
                : "No patients yet"}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {search
                ? "Try a different name, phone number or Patient ID."
                : "Start by adding your first patient."}
            </p>

            {search ? (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-5 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
              >
                Clear Search
              </button>
            ) : (
              <Link
                href="/patients/new"
                className="mt-5 inline-flex rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
              >
                + Add First Patient
              </Link>
            )}

          </div>

        ) : (

          /* PATIENT LIST */

          <div className="mt-6 overflow-hidden rounded-2xl border bg-white shadow-sm">

            {/* DESKTOP TABLE */}

            <div className="hidden overflow-x-auto md:block">

              <table className="w-full">

                <thead className="border-b bg-gray-50">

                  <tr>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Patient
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Patient ID
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Phone
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Gender
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Registered
                    </th>

                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Action
                    </th>

                  </tr>

                </thead>


                <tbody className="divide-y">

                  {filteredPatients.map(
                    (patient) => (

                      <tr
                        key={patient.id}
                        className="transition hover:bg-gray-50"
                      >

                        <td className="px-6 py-4">

                          <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 font-semibold text-orange-500">
                              {patient.full_name
                                ?.charAt(0)
                                ?.toUpperCase() || "P"}
                            </div>

                            <div>

                              <p className="font-semibold text-gray-900">
                                {patient.full_name}
                              </p>

                              {patient.email && (
                                <p className="mt-1 text-xs text-gray-500">
                                  {patient.email}
                                </p>
                              )}

                            </div>

                          </div>

                        </td>


                        <td className="px-6 py-4">

                          <span className="font-semibold text-orange-500">
                            P
                            {String(
                              patient.id
                            ).padStart(6, "0")}
                          </span>

                        </td>


                        <td className="px-6 py-4 text-sm text-gray-700">
                          {patient.phone}
                        </td>


                        <td className="px-6 py-4 text-sm text-gray-700">
                          {patient.gender ||
                            "Not provided"}
                        </td>


                        <td className="px-6 py-4 text-sm text-gray-500">

                          {new Date(
                            patient.created_at
                          ).toLocaleDateString(
                            "en-IN"
                          )}

                        </td>


                        <td className="px-6 py-4 text-right">

                          <Link
                            href={`/patients/${patient.id}`}
                            className="inline-flex rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
                          >
                            View
                          </Link>

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>


            {/* MOBILE LIST */}

            <div className="divide-y md:hidden">

              {filteredPatients.map(
                (patient) => (

                  <Link
                    key={patient.id}
                    href={`/patients/${patient.id}`}
                    className="block p-5 transition hover:bg-gray-50"
                  >

                    <div className="flex items-center justify-between gap-4">

                      <div className="flex min-w-0 items-center gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-50 font-semibold text-orange-500">
                          {patient.full_name
                            ?.charAt(0)
                            ?.toUpperCase() || "P"}
                        </div>

                        <div className="min-w-0">

                          <p className="truncate font-semibold text-gray-900">
                            {patient.full_name}
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
                            P
                            {String(
                              patient.id
                            ).padStart(6, "0")}
                          </p>

                        </div>

                      </div>

                      <span className="shrink-0 text-gray-400">
                        →
                      </span>

                    </div>


                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">

                      <div>

                        <p className="text-xs text-gray-400">
                          Phone
                        </p>

                        <p className="mt-1 font-medium text-gray-700">
                          {patient.phone}
                        </p>

                      </div>


                      <div>

                        <p className="text-xs text-gray-400">
                          Gender
                        </p>

                        <p className="mt-1 font-medium text-gray-700">
                          {patient.gender ||
                            "Not provided"}
                        </p>

                      </div>

                    </div>

                  </Link>

                )
              )}

            </div>

          </div>

        )}

      </div>

    </main>
  );
}