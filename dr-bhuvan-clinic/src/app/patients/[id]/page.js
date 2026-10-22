import { createClient } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import EditPatientButton from "./EditPatientButton";
import PatientAppointments from "./PatientAppointments";

function formatAmount(amount) {
  return `₹${Number(amount || 0).toLocaleString("en-IN")}`;
}

export default async function PatientProfilePage({ params }) {
  const supabase = await createClient();

  // ---------------------------------------
  // AUTH
  // ---------------------------------------

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  // ---------------------------------------
  // PATIENT ID
  // ---------------------------------------

  const { id } = await params;

  // ---------------------------------------
  // USER ROLE
  // ---------------------------------------

  const { data: profile, error: profileError } = await supabase
    .from("user_profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profileError || !profile?.role) {
    redirect("/dashboard");
  }

  const role = profile.role;

  const isDoctor = role === "doctor";
  const isAssistantDoctor = role === "assistant_doctor";
  const isReceptionist = role === "receptionist";
  const isDentalAssistant = role === "dental_assistant";

  // ---------------------------------------
  // ROLE ACCESS
  // ---------------------------------------

  const canEditPatient = isDoctor;

  const canViewSensitiveInfo =
    isDoctor || isAssistantDoctor;

  const canViewTreatments =
    isDoctor ||
    isAssistantDoctor ||
    isReceptionist;

  const canViewPeriodontal =
    isDoctor ||
    isAssistantDoctor;

  const canViewDocuments =
    isDoctor ||
    isAssistantDoctor ||
    isDentalAssistant;

  const canViewPayments =
    isDoctor ||
    isReceptionist;

  // ---------------------------------------
  // LOAD PATIENT
  // ---------------------------------------

  const patientColumns = canViewSensitiveInfo
    ? `
        id,
        created_at,
        full_name,
        phone,
        date_of_birth,
        gender,
        email,
        address,
        medical_history,
        allergies,
        emergency_contact_name,
        emergency_contact_phone,
        notes
      `
    : `
        id,
        created_at,
        full_name,
        phone,
        date_of_birth,
        gender
      `;

  const {
    data: patient,
    error: patientError,
  } = await supabase
    .from("patients")
    .select(patientColumns)
    .eq("id", id)
    .single();

  if (patientError || !patient) {
    notFound();
  }

  // ---------------------------------------
  // LOAD TREATMENTS
  // ---------------------------------------

  let patientTreatments = [];

  if (canViewTreatments) {
    const {
      data: treatments,
      error: treatmentsError,
    } = await supabase
      .from("Treatments")
      .select("id, fee")
      .eq("patient_id", patient.id);

    if (treatmentsError) {
      console.error(
        "PATIENT TREATMENTS ERROR:",
        treatmentsError
      );
    }

    patientTreatments = treatments || [];
  }

  const treatmentFees = patientTreatments.reduce(
    (total, treatment) =>
      total + Number(treatment.fee || 0),
    0
  );

  // ---------------------------------------
  // LOAD APPOINTMENTS
  // ---------------------------------------

  const {
    data: appointments,
    error: appointmentsError,
  } = await supabase
    .from("appointments")
    .select("id, status")
    .eq("patient_id", patient.id);

  if (appointmentsError) {
    console.error(
      "PATIENT APPOINTMENTS ERROR:",
      appointmentsError
    );
  }

  const patientAppointments = appointments || [];

  // ---------------------------------------
  // LOAD PAYMENTS
  // ---------------------------------------

  let patientPayments = [];

  if (canViewPayments) {
    const {
      data: payments,
      error: paymentsError,
    } = await supabase
      .from("payments")
      .select("id, amount")
      .eq("patient_id", patient.id);

    if (paymentsError) {
      console.error(
        "PATIENT PAYMENTS ERROR:",
        paymentsError
      );
    }

    patientPayments = payments || [];
  }

  const totalPaid = patientPayments.reduce(
    (total, payment) =>
      total + Number(payment.amount || 0),
    0
  );

  const balance = Math.max(
    treatmentFees - totalPaid,
    0
  );

  return (
    <main className="min-h-screen bg-gray-50">

      {/* ===================================== */}
      {/* HEADER */}
      {/* ===================================== */}

      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">

          <div>
            <p className="text-sm font-semibold text-orange-500">
              Patient Profile
            </p>

            <h1 className="mt-1 text-2xl font-bold text-gray-900">
              {patient.full_name}
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Patient ID: P
              {String(patient.id).padStart(6, "0")}
            </p>
          </div>

          <div className="flex items-center gap-3">

            {isReceptionist && (
              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                View / Manage
              </span>
            )}

            {isDentalAssistant && (
              <span className="rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-600">
                Limited Access
              </span>
            )}

            <Link
              href="/patients"
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              ← Back to Patients
            </Link>

          </div>

        </div>
      </header>

      {/* ===================================== */}
      {/* MAIN CONTENT */}
      {/* ===================================== */}

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* ================================= */}
        {/* PATIENT OVERVIEW */}
        {/* ================================= */}

        <div className="grid gap-6 lg:grid-cols-3">

          {/* BASIC INFORMATION */}

          <div className="rounded-2xl border bg-white p-6 shadow-sm lg:col-span-2">

            <div className="flex items-center justify-between gap-4">

              <h2 className="text-xl font-bold text-gray-900">
                Patient Information
              </h2>

              {canEditPatient && (
                <EditPatientButton patient={patient} />
              )}

            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">

              <div>
                <p className="text-sm text-gray-500">
                  Full Name
                </p>
                <p className="mt-1 font-semibold text-gray-900">
                  {patient.full_name}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Phone
                </p>
                <p className="mt-1 font-semibold text-gray-900">
                  {patient.phone}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Date of Birth
                </p>
                <p className="mt-1 font-semibold text-gray-900">
                  {patient.date_of_birth || "Not provided"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Gender
                </p>
                <p className="mt-1 font-semibold text-gray-900">
                  {patient.gender || "Not provided"}
                </p>
              </div>

              {canViewSensitiveInfo && (
                <>
                  <div>
                    <p className="text-sm text-gray-500">
                      Email
                    </p>
                    <p className="mt-1 break-all font-semibold text-gray-900">
                      {patient.email || "Not provided"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Address
                    </p>
                    <p className="mt-1 font-semibold text-gray-900">
                      {patient.address || "Not provided"}
                    </p>
                  </div>
                </>
              )}

            </div>
          </div>

          {/* PATIENT ID */}

          <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <p className="text-sm text-gray-500">
              Patient ID
            </p>

            <p className="mt-2 text-3xl font-bold text-orange-500">
              P{String(patient.id).padStart(6, "0")}
            </p>

            <div className="mt-6 border-t pt-5">
              <p className="text-sm text-gray-500">
                Registered
              </p>

              <p className="mt-1 text-sm font-medium text-gray-800">
                {new Date(
                  patient.created_at
                ).toLocaleDateString("en-IN")}
              </p>
            </div>

          </div>

        </div>

        {/* ================================= */}
        {/* PATIENT SNAPSHOT */}
        {/* ================================= */}

        <section className="mt-6">

          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              Patient Snapshot
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Quick overview of this patient&apos;s records.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* TREATMENTS */}

            {canViewTreatments && (
              <Link
                href={`/patients/${patient.id}/treatments`}
                className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-xl">
                    🦷
                  </div>

                  <span className="text-2xl font-bold text-orange-500">
                    {patientTreatments.length}
                  </span>
                </div>

                <p className="mt-4 font-semibold text-gray-900">
                  Treatments
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Recorded procedures
                </p>
              </Link>
            )}

            {/* APPOINTMENTS */}

            <div className="rounded-2xl border bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-xl">
                  📅
                </div>

                <span className="text-2xl font-bold text-blue-600">
                  {patientAppointments.length}
                </span>
              </div>

              <p className="mt-4 font-semibold text-gray-900">
                Appointments
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Total visits recorded
              </p>

            </div>

            {/* FEES */}

            {canViewTreatments && (
              <div className="rounded-2xl border bg-white p-5 shadow-sm">

                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 text-xl">
                    🧾
                  </div>

                  <span className="text-xl font-bold text-gray-900">
                    {formatAmount(treatmentFees)}
                  </span>
                </div>

                <p className="mt-4 font-semibold text-gray-900">
                  Treatment Fees
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Total recorded fees
                </p>

              </div>
            )}

            {/* BALANCE */}

            {canViewPayments && (
              <Link
                href={`/patients/${patient.id}/payments`}
                className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >

                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-50 text-xl">
                    💰
                  </div>

                  <span
                    className={`text-xl font-bold ${
                      balance > 0
                        ? "text-red-500"
                        : "text-green-600"
                    }`}
                  >
                    {formatAmount(balance)}
                  </span>
                </div>

                <p className="mt-4 font-semibold text-gray-900">
                  Balance
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Remaining treatment balance
                </p>

              </Link>
            )}

          </div>
        </section>

        {/* ================================= */}
        {/* SENSITIVE MEDICAL INFORMATION */}
        {/* ================================= */}

        {canViewSensitiveInfo && (
          <>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">

              {/* MEDICAL HISTORY */}

              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">
                  Medical History
                </h2>

                <p className="mt-4 whitespace-pre-wrap text-gray-600">
                  {patient.medical_history ||
                    "No medical history recorded."}
                </p>
              </div>

              {/* ALLERGIES */}

              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">
                  Allergies
                </h2>

                <p className="mt-4 whitespace-pre-wrap text-gray-600">
                  {patient.allergies ||
                    "No allergies recorded."}
                </p>
              </div>

            </div>

            {/* EMERGENCY CONTACT */}

            <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold text-gray-900">
                Emergency Contact
              </h2>

              <div className="mt-5 grid gap-6 sm:grid-cols-2">

                <div>
                  <p className="text-sm text-gray-500">
                    Contact Name
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {patient.emergency_contact_name ||
                      "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Contact Phone
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {patient.emergency_contact_phone ||
                      "Not provided"}
                  </p>
                </div>

              </div>
            </div>

            {/* NOTES */}

            <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold text-gray-900">
                Notes
              </h2>

              <p className="mt-4 whitespace-pre-wrap text-gray-600">
                {patient.notes || "No notes recorded."}
              </p>

            </div>
          </>
        )}

        {/* ================================= */}
        {/* DENTAL RECORDS */}
        {/* ================================= */}

        <section className="mt-8">

          <div className="mb-5">
            <h2 className="text-xl font-bold text-gray-900">
              Clinical Records
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Access records available for your role.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* TREATMENTS */}

            {canViewTreatments && (
              <Link
                href={`/patients/${patient.id}/treatments`}
                className="block rounded-2xl border bg-orange-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-2xl">
                  🦷
                </div>

                <p className="mt-3 font-semibold text-gray-900">
                  Treatments
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Treatment history and procedures
                </p>

                <p className="mt-4 text-sm font-semibold text-orange-600">
                  {isReceptionist
                    ? "View Treatments →"
                    : "Open Treatments →"}
                </p>
              </Link>
            )}

            {/* PERIODONTAL */}

            {canViewPeriodontal && (
              <Link
                href={`/patients/${patient.id}/periodontal`}
                className="block rounded-2xl border bg-blue-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-2xl">
                  🩺
                </div>

                <p className="mt-3 font-semibold text-gray-900">
                  Periodontal Chart
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Gum measurements and findings
                </p>

                <p className="mt-4 text-sm font-semibold text-blue-600">
                  Open Chart →
                </p>
              </Link>
            )}

            {/* PHOTOS / X-RAYS */}

            {canViewDocuments && (
              <Link
                href={`/patients/${patient.id}/documents`}
                className="block rounded-2xl border bg-purple-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-2xl">
                  📷
                </div>

                <p className="mt-3 font-semibold text-gray-900">
                  Photos & X-rays
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Clinical photos, X-rays and reports
                </p>

                <p className="mt-4 text-sm font-semibold text-purple-600">
                  {isDentalAssistant
                    ? "View Records →"
                    : "Open Records →"}
                </p>
              </Link>
            )}

            {/* PAYMENTS */}

            {canViewPayments && (
              <Link
                href={`/patients/${patient.id}/payments`}
                className="block rounded-2xl border bg-green-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-2xl">
                  💰
                </div>

                <p className="mt-3 font-semibold text-gray-900">
                  Payments
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Treatment payments and balance
                </p>

                <p className="mt-4 text-sm font-semibold text-green-600">
                  Open Payments →
                </p>
              </Link>
            )}

          </div>
        </section>

        {/* ================================= */}
        {/* APPOINTMENTS */}
        {/* ================================= */}

        <PatientAppointments
          patientId={patient.id}
        />

      </div>
    </main>
  );
}