"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const PAYMENT_METHODS = [
  "Cash",
  "UPI",
  "Card",
  "Bank Transfer",
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
  if (!dateString) return "—";

  return new Date(
    `${dateString}T00:00:00`
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatAmount(amount) {
  return `₹${Number(amount || 0).toLocaleString("en-IN")}`;
}

export default function PatientPaymentsPage({ params }) {
  const supabase = useMemo(() => createClient(), []);

  const [patientId, setPatientId] = useState(null);
  const [patient, setPatient] = useState(null);

  const [payments, setPayments] = useState([]);
  const [treatments, setTreatments] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [editingPayment, setEditingPayment] = useState(null);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    treatment_id: "",
    payment_date: "",
    amount: "",
    payment_method: "Cash",
    notes: "",
  });

  // Get patient ID
  useEffect(() => {
    async function getPatientId() {
      try {
        const resolvedParams = await params;

        if (resolvedParams?.id) {
          setPatientId(String(resolvedParams.id));
        }
      } catch (err) {
        console.error("PARAM ERROR:", err);

        setError("Unable to load patient information.");
      }
    }

    getPatientId();
  }, [params]);

  // Load today's date only on client
  useEffect(() => {
    setForm((previous) => ({
      ...previous,
      payment_date:
        previous.payment_date || getToday(),
    }));
  }, []);

  // Load patient data
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

      // -----------------------------------
      // 1. LOAD PATIENT
      // -----------------------------------

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

      // -----------------------------------
      // 2. LOAD PAYMENTS
      // -----------------------------------

      const {
        data: paymentsData,
        error: paymentsError,
      } = await supabase
        .from("payments")
        .select("*")
        .eq("patient_id", numericPatientId)
        .order("payment_date", {
          ascending: false,
        })
        .order("created_at", {
          ascending: false,
        });

      if (paymentsError) {
        throw paymentsError;
      }

      // -----------------------------------
      // 3. LOAD TREATMENTS
      // -----------------------------------

      const {
        data: treatmentsData,
        error: treatmentsError,
      } = await supabase
        .from("Treatments")
        .select(`
          id,
          treatment_name,
          tooth_number,
          fee,
          treatment_date,
          status
        `)
        .eq("patient_id", numericPatientId)
        .order("treatment_date", {
          ascending: false,
        });

      if (treatmentsError) {
        throw treatmentsError;
      }

      // -----------------------------------
      // 4. CONNECT TREATMENTS TO PAYMENTS
      // -----------------------------------

      const paymentsWithTreatments = (
        paymentsData || []
      ).map((payment) => ({
        ...payment,
        Treatments:
          (treatmentsData || []).find(
            (treatment) =>
              treatment.id === payment.treatment_id
          ) || null,
      }));

      setPayments(paymentsWithTreatments);
      setTreatments(treatmentsData || []);
    } catch (err) {
      console.error("PAYMENTS LOAD ERROR:", err);

      setError(
        err?.message ||
          err?.details ||
          err?.hint ||
          "Unable to load payment information."
      );
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    setForm({
      treatment_id: "",
      payment_date: getToday(),
      amount: "",
      payment_method: "Cash",
      notes: "",
    });

    setEditingPayment(null);
  }

  function openNewPayment() {
    resetForm();

    setShowForm(true);
    setMessage("");
    setError("");
  }

  function openEditPayment(payment) {
    setEditingPayment(payment);

    setForm({
      treatment_id: payment.treatment_id
        ? String(payment.treatment_id)
        : "",

      payment_date:
        payment.payment_date || getToday(),

      amount: payment.amount || "",

      payment_method:
        payment.payment_method || "Cash",

      notes: payment.notes || "",
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

  function updateForm(field, value) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  async function savePayment(event) {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!form.payment_date) {
      setError("Please select a payment date.");
      return;
    }

    if (!form.amount || Number(form.amount) <= 0) {
      setError("Please enter a valid payment amount.");
      return;
    }

    if (!form.payment_method) {
      setError("Please select a payment method.");
      return;
    }

    setSaving(true);

    try {
      const payload = {
        patient_id: Number(patientId),

        treatment_id: form.treatment_id
          ? Number(form.treatment_id)
          : null,

        payment_date: form.payment_date,

        amount: Number(form.amount),

        payment_method: form.payment_method,

        notes: form.notes || null,
      };

      console.log("PAYMENT PAYLOAD:", payload);

      let result;

      if (editingPayment) {
        result = await supabase
          .from("payments")
          .update(payload)
          .eq("id", editingPayment.id);
      } else {
        result = await supabase
          .from("payments")
          .insert(payload);
      }

      console.log(
        "PAYMENT SUPABASE RESULT:",
        result
      );

      if (result.error) {
        throw result.error;
      }

      setShowForm(false);
      resetForm();

      setMessage(
        editingPayment
          ? "Payment updated successfully."
          : "Payment recorded successfully."
      );

      loadData();

      setTimeout(() => {
        setMessage("");
      }, 2500);
    } catch (err) {
      console.error("PAYMENT SAVE ERROR:", err);

      setError(
        err?.message ||
          err?.details ||
          err?.hint ||
          "Unable to save payment."
      );

      setTimeout(() => {
        setError("");
      }, 5000);
    } finally {
      setSaving(false);
    }
  }

  async function deletePayment(paymentId) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this payment?"
    );

    if (!confirmed) return;

    setError("");
    setMessage("");

    try {
      const {
        error: deleteError,
      } = await supabase
        .from("payments")
        .delete()
        .eq("id", paymentId);

      if (deleteError) {
        throw deleteError;
      }

      setPayments((previous) =>
        previous.filter(
          (payment) => payment.id !== paymentId
        )
      );

      setMessage(
        "Payment deleted successfully."
      );

      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (err) {
      console.error(
        "PAYMENT DELETE ERROR:",
        err
      );

      setError(
        err?.message ||
          "Unable to delete payment."
      );
    }
  }

  const totalTreatmentFees =
    treatments.reduce(
      (total, treatment) =>
        total + Number(treatment.fee || 0),
      0
    );

  const totalPaid = payments.reduce(
    (total, payment) =>
      total + Number(payment.amount || 0),
    0
  );

  const balance = Math.max(
    totalTreatmentFees - totalPaid,
    0
  );

  // -----------------------------------
  // LOADING
  // -----------------------------------

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500">
          Loading payment information...
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
            <p className="mt-3 max-w-md text-sm text-red-500">
              {error}
            </p>
          )}

          <Link
            href="/patients"
            className="mt-4 inline-block text-orange-500 hover:text-orange-600"
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

          <Link
            href={`/patients/${patient.id}`}
            className="text-sm font-semibold text-orange-500 hover:text-orange-600"
          >
            ← Back to Patient Profile
          </Link>

          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-sm font-semibold text-orange-500">
                Patient Payments
              </p>

              <h1 className="mt-1 text-3xl font-bold text-gray-900">
                {patient.full_name}
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Patient ID: P
                {String(patient.id).padStart(6, "0")}
              </p>

            </div>

            <button
              type="button"
              onClick={openNewPayment}
              className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600"
            >
              + Add Payment
            </button>

          </div>

        </div>

      </header>

      {/* MAIN */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* SUMMARY */}
        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <p className="text-sm font-medium text-gray-500">
              Total Treatment Fees
            </p>

            <p className="mt-2 text-3xl font-bold text-gray-900">
              {formatAmount(
                totalTreatmentFees
              )}
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Based on recorded treatment fees
            </p>

          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <p className="text-sm font-medium text-gray-500">
              Total Paid
            </p>

            <p className="mt-2 text-3xl font-bold text-green-600">
              {formatAmount(totalPaid)}
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Payments received
            </p>

          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <p className="text-sm font-medium text-gray-500">
              Balance
            </p>

            <p className="mt-2 text-3xl font-bold text-orange-500">
              {formatAmount(balance)}
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Remaining treatment balance
            </p>

          </div>

        </div>

        {/* PAYMENT HISTORY */}
        <div className="mt-8 overflow-hidden rounded-2xl border bg-white shadow-sm">

          <div className="border-b px-5 py-5 sm:px-6">

            <h2 className="text-xl font-bold text-gray-900">
              Payment History
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              All payments recorded for this patient.
            </p>

          </div>

          {payments.length === 0 ? (

            <div className="px-6 py-16 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-3xl">
                💰
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                No payments yet
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                No payment has been recorded for this patient.
              </p>

              <button
                type="button"
                onClick={openNewPayment}
                className="mt-6 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
              >
                + Add First Payment
              </button>

            </div>

          ) : (

            <div className="divide-y">

              {payments.map((payment) => (

                <div
                  key={payment.id}
                  className="p-5 transition hover:bg-orange-50/30 sm:p-6"
                >

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-xl">
                        💰
                      </div>

                      <div>

                        <p className="text-lg font-bold text-gray-900">
                          {formatAmount(
                            payment.amount
                          )}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          {formatDate(
                            payment.payment_date
                          )}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">

                          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                            {payment.payment_method}
                          </span>

                          {payment.Treatments?.treatment_name && (
                            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                              {
                                payment.Treatments
                                  .treatment_name
                              }
                            </span>
                          )}

                          {payment.Treatments?.tooth_number && (
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                              Tooth{" "}
                              {
                                payment.Treatments
                                  .tooth_number
                              }
                            </span>
                          )}

                        </div>

                        {payment.notes && (
                          <p className="mt-3 text-sm text-gray-500">
                            {payment.notes}
                          </p>
                        )}

                      </div>

                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">

                      <button
                        type="button"
                        onClick={() =>
                          openEditPayment(
                            payment
                          )
                        }
                        className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          deletePayment(
                            payment.id
                          )
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

        </div>

      </div>

      {/* PAYMENT MODAL */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6">

          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

            <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-6 py-5">

              <div>

                <h2 className="text-xl font-bold text-gray-900">
                  {editingPayment
                    ? "Edit Payment"
                    : "Add Payment"}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Record payment details for this patient.
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

            <form
              onSubmit={savePayment}
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
                  {patient.phone}
                </p>

              </div>

              {/* TREATMENT */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Treatment
                </label>

                <select
                  value={form.treatment_id}
                  onChange={(event) =>
                    updateForm(
                      "treatment_id",
                      event.target.value
                    )
                  }
                  className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                >

                  <option value="">
                    General Payment / No Specific Treatment
                  </option>

                  {treatments.map(
                    (treatment) => (
                      <option
                        key={treatment.id}
                        value={treatment.id}
                      >
                        {treatment.treatment_name}

                        {treatment.tooth_number
                          ? ` — Tooth ${treatment.tooth_number}`
                          : ""}

                        {treatment.fee
                          ? ` — ${formatAmount(
                              treatment.fee
                            )}`
                          : ""}
                      </option>
                    )
                  )}

                </select>

              </div>

              {/* DATE + AMOUNT */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Payment Date *
                  </label>

                  <input
                    type="date"
                    value={form.payment_date}
                    onChange={(event) =>
                      updateForm(
                        "payment_date",
                        event.target.value
                      )
                    }
                    required
                    className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Amount *
                  </label>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.amount}
                    onChange={(event) =>
                      updateForm(
                        "amount",
                        event.target.value
                      )
                    }
                    placeholder="Enter amount"
                    required
                    className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />

                </div>

              </div>

              {/* PAYMENT METHOD */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Payment Method *
                </label>

                <select
                  value={form.payment_method}
                  onChange={(event) =>
                    updateForm(
                      "payment_method",
                      event.target.value
                    )
                  }
                  required
                  className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                >

                  {PAYMENT_METHODS.map(
                    (method) => (
                      <option
                        key={method}
                        value={method}
                      >
                        {method}
                      </option>
                    )
                  )}

                </select>

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
                  placeholder="Payment notes..."
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
                    : editingPayment
                    ? "Update Payment"
                    : "Record Payment"}
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </main>
  );
}