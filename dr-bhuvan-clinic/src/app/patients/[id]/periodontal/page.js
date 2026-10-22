"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const TEETH = [
  "18", "17", "16", "15", "14", "13", "12", "11",
  "21", "22", "23", "24", "25", "26", "27", "28",
  "48", "47", "46", "45", "44", "43", "42", "41",
  "31", "32", "33", "34", "35", "36", "37", "38",
];

const SITES = [
  { key: "mb_probing_depth", label: "MB" },
  { key: "b_probing_depth", label: "B" },
  { key: "db_probing_depth", label: "DB" },
  { key: "ml_probing_depth", label: "ML" },
  { key: "l_probing_depth", label: "L" },
  { key: "dl_probing_depth", label: "DL" },
];

function emptyToothData() {
  return {
    tooth_number: "",
    mb_probing_depth: "",
    b_probing_depth: "",
    db_probing_depth: "",
    ml_probing_depth: "",
    l_probing_depth: "",
    dl_probing_depth: "",
    id: null,
  };
}

function createInitialChart() {
  const chart = {};

  TEETH.forEach((tooth) => {
    chart[tooth] = {
      ...emptyToothData(),
      tooth_number: tooth,
    };
  });

  return chart;
}

export default function PeriodontalPage() {
  const params = useParams();
  const patientId = params?.id;

  const supabase = useMemo(() => createClient(), []);

  const [patient, setPatient] = useState(null);
  const [chart, setChart] = useState(createInitialChart());

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!patientId) return;

    loadPatientAndChart();
  }, [patientId]);

  async function loadPatientAndChart() {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const numericPatientId = Number(patientId);

      if (!Number.isInteger(numericPatientId)) {
        throw new Error("Invalid patient ID.");
      }

      // Get patient
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

      setPatient(patientData);

      // Get periodontal records
      const {
        data: records,
        error: recordsError,
      } = await supabase
        .from("periodontal_records")
        .select("*")
        .eq("patient_id", numericPatientId)
        .order("tooth_number", { ascending: true });

      if (recordsError) {
        throw recordsError;
      }

      const newChart = createInitialChart();

      records?.forEach((record) => {
        const tooth = String(record.tooth_number);

        if (!newChart[tooth]) {
          return;
        }

        newChart[tooth] = {
          id: record.id,
          tooth_number: tooth,

          mb_probing_depth:
            record.mb_probing_depth === null
              ? ""
              : String(record.mb_probing_depth),

          b_probing_depth:
            record.b_probing_depth === null
              ? ""
              : String(record.b_probing_depth),

          db_probing_depth:
            record.db_probing_depth === null
              ? ""
              : String(record.db_probing_depth),

          ml_probing_depth:
            record.ml_probing_depth === null
              ? ""
              : String(record.ml_probing_depth),

          l_probing_depth:
            record.l_probing_depth === null
              ? ""
              : String(record.l_probing_depth),

          dl_probing_depth:
            record.dl_probing_depth === null
              ? ""
              : String(record.dl_probing_depth),
        };
      });

      setChart(newChart);
    } catch (err) {
      console.error(err);

      setError(
        err?.message || "Unable to load periodontal records."
      );
    } finally {
      setLoading(false);
    }
  }

  function updateDepth(tooth, field, value) {
    if (value === "") {
      setChart((previous) => ({
        ...previous,
        [tooth]: {
          ...previous[tooth],
          [field]: "",
        },
      }));

      return;
    }

    const numberValue = Number(value);

    // Allow only 0–20 mm
    if (!Number.isInteger(numberValue)) {
      return;
    }

    if (numberValue < 0 || numberValue > 20) {
      return;
    }

    setChart((previous) => ({
      ...previous,
      [tooth]: {
        ...previous[tooth],
        [field]: value,
      },
    }));
  }

  function hasAnyValue(row) {
    return SITES.some(
      (site) =>
        row[site.key] !== "" &&
        row[site.key] !== null &&
        row[site.key] !== undefined
    );
  }

  async function saveChart() {
    if (!patientId) return;

    setSaving(true);
    setError("");
    setMessage("");

    try {
      const numericPatientId = Number(patientId);

      for (const tooth of TEETH) {
        const row = chart[tooth];

        if (!row) continue;

        const hasValues = hasAnyValue(row);

        // Don't create empty records
        if (!row.id && !hasValues) {
          continue;
        }

        const payload = {
          patient_id: numericPatientId,
          tooth_number: tooth,

          mb_probing_depth:
            row.mb_probing_depth === ""
              ? null
              : Number(row.mb_probing_depth),

          b_probing_depth:
            row.b_probing_depth === ""
              ? null
              : Number(row.b_probing_depth),

          db_probing_depth:
            row.db_probing_depth === ""
              ? null
              : Number(row.db_probing_depth),

          ml_probing_depth:
            row.ml_probing_depth === ""
              ? null
              : Number(row.ml_probing_depth),

          l_probing_depth:
            row.l_probing_depth === ""
              ? null
              : Number(row.l_probing_depth),

          dl_probing_depth:
            row.dl_probing_depth === ""
              ? null
              : Number(row.dl_probing_depth),
        };

        if (row.id) {
          const { error: updateError } = await supabase
            .from("periodontal_records")
            .update(payload)
            .eq("id", row.id);

          if (updateError) {
            throw updateError;
          }
        } else {
          const {
            data: insertedRecord,
            error: insertError,
          } = await supabase
            .from("periodontal_records")
            .insert(payload)
            .select()
            .single();

          if (insertError) {
            throw insertError;
          }

          setChart((previous) => ({
            ...previous,
            [tooth]: {
              ...previous[tooth],
              id: insertedRecord.id,
            },
          }));
        }
      }

      // Success message
      setMessage("Periodontal chart saved successfully.");

      // Automatically hide success message after 2.5 seconds
      setTimeout(() => {
        setMessage("");
      }, 2500);
    } catch (err) {
      console.error(err);

      setError(
        err?.message || "Unable to save periodontal chart."
      );

      // Automatically hide error after 4 seconds
      setTimeout(() => {
        setError("");
      }, 4000);
    } finally {
      setSaving(false);
    }
  }

  function clearChart() {
    if (
      !window.confirm(
        "Clear all values entered on this screen?"
      )
    ) {
      return;
    }

    const newChart = createInitialChart();

    // Preserve existing record IDs so clearing can update
    // existing database rows to NULL.
    Object.keys(chart).forEach((tooth) => {
      if (chart[tooth]?.id) {
        newChart[tooth].id = chart[tooth].id;
      }
    });

    setChart(newChart);
    setMessage("");
    setError("");
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="rounded-2xl border bg-white px-8 py-6 shadow-sm">
          <p className="text-gray-600">
            Loading periodontal chart...
          </p>
        </div>
      </main>
    );
  }

  if (error && !patient) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h2 className="font-semibold text-red-700">
              Unable to load patient
            </h2>

            <p className="mt-2 text-sm text-red-600">
              {error}
            </p>

            <Link
              href={`/patients/${patientId}`}
              className="mt-5 inline-block rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white"
            >
              ← Back to Patient
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Center success / error notification */}
      {(message || error) && (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center px-4">
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

      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-7">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-semibold text-orange-500">
                Periodontal Chart
              </p>

              <h1 className="mt-1 text-3xl font-bold text-gray-900">
                {patient?.full_name}
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Patient ID: P
                {String(patient?.id).padStart(6, "0")}
              </p>
            </div>

            <Link
              href={`/patients/${patientId}`}
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              ← Back to Patient
            </Link>

          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">

        {/* Title */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Periodontal Probing
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Enter probing depths in millimeters for each tooth.
            </p>
          </div>

          <div className="flex gap-3">

            <button
              type="button"
              onClick={clearChart}
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Clear
            </button>

            <button
              type="button"
              onClick={saveChart}
              disabled={saving}
              className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Chart"}
            </button>

          </div>
        </div>

        {/* Legend */}
        <div className="mb-5 rounded-2xl border bg-white p-5 shadow-sm">

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">

            <div>
              <span className="font-semibold text-gray-900">
                MB
              </span>{" "}
              Mesiobuccal
            </div>

            <div>
              <span className="font-semibold text-gray-900">
                B
              </span>{" "}
              Buccal
            </div>

            <div>
              <span className="font-semibold text-gray-900">
                DB
              </span>{" "}
              Distobuccal
            </div>

            <div>
              <span className="font-semibold text-gray-900">
                ML
              </span>{" "}
              Mesiolingual
            </div>

            <div>
              <span className="font-semibold text-gray-900">
                L
              </span>{" "}
              Lingual
            </div>

            <div>
              <span className="font-semibold text-gray-900">
                DL
              </span>{" "}
              Distolingual
            </div>

          </div>

          <p className="mt-4 text-xs text-gray-400">
            Enter values from 0–20 mm.
          </p>

        </div>

        {/* Chart */}
        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">

            <table className="w-full min-w-[900px] border-collapse">

              <thead>
                <tr className="bg-gray-50">

                  <th className="border-b px-4 py-4 text-left text-sm font-bold text-gray-700">
                    Tooth
                  </th>

                  {SITES.map((site) => (
                    <th
                      key={site.key}
                      className="border-b px-3 py-4 text-center text-sm font-bold text-gray-700"
                    >
                      {site.label}
                    </th>
                  ))}

                </tr>
              </thead>

              <tbody>

                {TEETH.map((tooth, index) => {

                  const row = chart[tooth];

                  const isUpper = index < 16;

                  return (
                    <tr
                      key={tooth}
                      className={
                        isUpper
                          ? "hover:bg-orange-50/30"
                          : "border-t-4 border-gray-100 hover:bg-orange-50/30"
                      }
                    >

                      <td className="border-b px-4 py-3">

                        <div className="flex items-center gap-3">

                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 font-bold text-orange-600">
                            {tooth}
                          </div>

                          <span className="text-xs text-gray-400">
                            {isUpper ? "Upper" : "Lower"}
                          </span>

                        </div>

                      </td>

                      {SITES.map((site) => (
                        <td
                          key={site.key}
                          className="border-b px-3 py-3 text-center"
                        >

                          <input
                            type="number"
                            min="0"
                            max="20"
                            step="1"
                            value={row?.[site.key] ?? ""}
                            onChange={(e) =>
                              updateDepth(
                                tooth,
                                site.key,
                                e.target.value
                              )
                            }
                            className="mx-auto block h-11 w-20 rounded-xl border border-gray-300 bg-white text-center text-lg font-semibold text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                            placeholder="—"
                          />

                        </td>
                      ))}

                    </tr>
                  );

                })}

              </tbody>

            </table>

          </div>

          {/* Mobile cards */}
          <div className="md:hidden">

            {TEETH.map((tooth, index) => {

              const row = chart[tooth];

              const isUpper = index < 16;

              return (
                <div
                  key={tooth}
                  className={`border-b p-4 ${
                    !isUpper
                      ? "border-t-4 border-gray-100"
                      : ""
                  }`}
                >

                  <div className="mb-4 flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 font-bold text-orange-600">
                      {tooth}
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        Tooth {tooth}
                      </p>

                      <p className="text-xs text-gray-400">
                        {isUpper
                          ? "Upper arch"
                          : "Lower arch"}
                      </p>
                    </div>

                  </div>

                  <div className="grid grid-cols-3 gap-3">

                    {SITES.map((site) => (
                      <div key={site.key}>

                        <label className="mb-1.5 block text-center text-xs font-semibold text-gray-500">
                          {site.label}
                        </label>

                        <input
                          type="number"
                          min="0"
                          max="20"
                          step="1"
                          value={row?.[site.key] ?? ""}
                          onChange={(e) =>
                            updateDepth(
                              tooth,
                              site.key,
                              e.target.value
                            )
                          }
                          className="h-11 w-full rounded-xl border border-gray-300 text-center text-base font-semibold outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                          placeholder="—"
                        />

                      </div>
                    ))}

                  </div>

                </div>
              );

            })}

          </div>

        </div>

        {/* Bottom save */}
        <div className="mt-6 flex justify-end">

          <button
            type="button"
            onClick={saveChart}
            disabled={saving}
            className="w-full rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white shadow-sm transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {saving
              ? "Saving Periodontal Chart..."
              : "Save Periodontal Chart"}
          </button>

        </div>

      </div>

    </main>
  );
}