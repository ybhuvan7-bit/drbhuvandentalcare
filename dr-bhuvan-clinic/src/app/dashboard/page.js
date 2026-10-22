import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";

function getToday() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

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

function formatCurrency(amount) {
  return `₹${Number(amount || 0).toLocaleString("en-IN")}`;
}

const ROLE_LABELS = {
  doctor: "Doctor",
  assistant_doctor: "Assistant Doctor",
  receptionist: "Receptionist",
  dental_assistant: "Dental Assistant",
};

export default async function Dashboard() {
  const supabase = await createClient();

  // -----------------------------------------
  // AUTH
  // -----------------------------------------

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  // -----------------------------------------
  // USER PROFILE / ROLE
  // -----------------------------------------

  const { data: profile, error: profileError } = await supabase
    .from("user_profiles")
    .select("full_name, role")
    .eq("id", user.id)
    .single();

  if (profileError) {
    console.error("Profile error:", profileError);
  }

  const role = profile?.role || "doctor";
  const roleLabel = ROLE_LABELS[role] || "Staff";
  const displayName =
    profile?.full_name ||
    (role === "doctor" ? "Dr. Bhuvan" : roleLabel);

  const isDoctor = role === "doctor";
  const isAssistantDoctor = role === "assistant_doctor";
  const isReceptionist = role === "receptionist";
  const isDentalAssistant = role === "dental_assistant";

  const canViewTreatments = isDoctor || isAssistantDoctor;
  const canViewPayments = isDoctor || isReceptionist;
  const canViewDocuments =
    isDoctor || isAssistantDoctor || isDentalAssistant;

  // -----------------------------------------
  // TODAY
  // -----------------------------------------

  const today = getToday();

  // -----------------------------------------
  // TOTAL PATIENTS
  // -----------------------------------------

  const {
    count: totalPatients,
    error: patientsCountError,
  } = await supabase
    .from("patients")
    .select("*", {
      count: "exact",
      head: true,
    });

  if (patientsCountError) {
    console.error("Patients count error:", patientsCountError);
  }

  // -----------------------------------------
  // TODAY'S APPOINTMENTS
  // -----------------------------------------

  const {
    data: todaysAppointments,
    error: todaysAppointmentsError,
  } = await supabase
    .from("appointments")
    .select(`
      *,
      patients (
        id,
        full_name,
        phone
      )
    `)
    .eq("appointment_date", today)
    .order("appointment_time", {
      ascending: true,
    });

  if (todaysAppointmentsError) {
    console.error(
      "Today's appointments error:",
      todaysAppointmentsError
    );
  }

  // -----------------------------------------
  // UPCOMING APPOINTMENTS
  // -----------------------------------------

  const {
    data: upcomingAppointments,
    error: upcomingAppointmentsError,
  } = await supabase
    .from("appointments")
    .select(`
      *,
      patients (
        id,
        full_name,
        phone
      )
    `)
    .gte("appointment_date", today)
    .in("status", ["Scheduled", "Confirmed"])
    .order("appointment_date", {
      ascending: true,
    })
    .order("appointment_time", {
      ascending: true,
    })
    .limit(5);

  if (upcomingAppointmentsError) {
    console.error(
      "Upcoming appointments error:",
      upcomingAppointmentsError
    );
  }

  // -----------------------------------------
  // RECENT PATIENTS
  // -----------------------------------------

  const {
    data: recentPatients,
    error: recentPatientsError,
  } = await supabase
    .from("patients")
    .select("*")
    .order("created_at", {
      ascending: false,
    })
    .limit(5);

  if (recentPatientsError) {
    console.error(
      "Recent patients error:",
      recentPatientsError
    );
  }

  // -----------------------------------------
  // TREATMENT FEES
  // DOCTOR + ASSISTANT DOCTOR ONLY
  // -----------------------------------------

  let totalTreatmentFees = 0;

  if (canViewTreatments) {
    const {
      data: treatments,
      error: treatmentsError,
    } = await supabase
      .from("Treatments")
      .select("fee");

    if (treatmentsError) {
      console.error("Treatments error:", treatmentsError);
    } else {
      totalTreatmentFees =
        treatments?.reduce(
          (total, treatment) =>
            total + Number(treatment.fee || 0),
          0
        ) || 0;
    }
  }

  // -----------------------------------------
  // PAYMENTS
  // DOCTOR + RECEPTIONIST ONLY
  // -----------------------------------------

  let payments = [];
  let totalCollected = 0;
  let todaysPaymentsAmount = 0;

  if (canViewPayments) {
    const {
      data: paymentData,
      error: paymentsError,
    } = await supabase
      .from("payments")
      .select("*");

    if (paymentsError) {
      console.error("Payments error:", paymentsError);
    } else {
      payments = paymentData || [];

      totalCollected = payments.reduce(
        (total, payment) =>
          total + Number(payment.amount || 0),
        0
      );

      todaysPaymentsAmount = payments
        .filter(
          (payment) =>
            payment.payment_date === today
        )
        .reduce(
          (total, payment) =>
            total + Number(payment.amount || 0),
          0
        );
    }
  }

  // -----------------------------------------
  // BALANCE
  // DOCTOR ONLY
  // -----------------------------------------

  const remainingBalance = Math.max(
    totalTreatmentFees - totalCollected,
    0
  );

  // -----------------------------------------
  // GREETING
  // -----------------------------------------

  const currentHour = new Date().getHours();

  let greeting = "Good evening";

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 17) {
    greeting = "Good afternoon";
  }

  // -----------------------------------------
  // RENDER
  // -----------------------------------------

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Dr. Bhuvan&apos;s Dental Clinic
            </h1>

            <p className="text-sm text-gray-500">
              Clinic Management System
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm font-semibold text-gray-700">
              {roleLabel}
            </p>

            <p className="text-sm text-gray-600">
              {displayName}
            </p>

            <p className="text-xs text-gray-500">
              {user.email}
            </p>

            <LogoutButton />
          </div>

        </div>
      </header>

      {/* MAIN */}
      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* WELCOME */}
        <h2 className="text-3xl font-bold text-gray-900">
          {greeting},{" "}
          {isDoctor ? "Dr. Bhuvan" : displayName} 👋
        </h2>

        <p className="mt-2 text-gray-500">
          Here&apos;s what&apos;s happening at your clinic today.
        </p>

        {/* STATS */}
        <div
          className={`mt-8 grid gap-5 ${
            isDoctor
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : canViewPayments
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : "sm:grid-cols-2"
          }`}
        >

          {/* TOTAL PATIENTS */}
          <a
            href="/patients"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Total Patients
                </p>

                <p className="mt-2 text-3xl font-bold text-orange-500">
                  {totalPatients || 0}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-xl">
                👥
              </div>

            </div>
          </a>

          {/* TODAY APPOINTMENTS */}
          <a
            href="/appointments"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Today&apos;s Appointments
                </p>

                <p className="mt-2 text-3xl font-bold text-blue-600">
                  {todaysAppointments?.length || 0}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl">
                📅
              </div>

            </div>
          </a>

          {/* PENDING BALANCE - DOCTOR ONLY */}
          {isDoctor && (
            <a
              href="/patients"
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Pending Balance
                  </p>

                  <p className="mt-2 text-3xl font-bold text-red-500">
                    {formatCurrency(remainingBalance)}
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-xl">
                  💰
                </div>

              </div>
            </a>
          )}

          {/* TODAY PAYMENTS */}
          {canViewPayments && (
            <a
              href="/patients"
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Today&apos;s Payments
                  </p>

                  <p className="mt-2 text-3xl font-bold text-green-600">
                    {formatCurrency(todaysPaymentsAmount)}
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-xl">
                  💵
                </div>

              </div>
            </a>
          )}

        </div>

        {/* TODAY'S APPOINTMENTS */}
        <div className="mt-10">

          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Today&apos;s Appointments
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {formatDate(today)}
              </p>
            </div>

            <a
              href="/appointments"
              className="font-semibold text-orange-500 hover:text-orange-600"
            >
              View all →
            </a>

          </div>

          {todaysAppointments?.length === 0 ? (

            <div className="mt-5 rounded-2xl border bg-white p-12 text-center shadow-sm">

              <div className="text-4xl">
                📅
              </div>

              <h4 className="mt-4 font-bold text-gray-900">
                No appointments today
              </h4>

              <p className="mt-1 text-sm text-gray-500">
                Your schedule is clear for today.
              </p>

              <a
                href="/appointments"
                className="mt-5 inline-flex rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
              >
                + New Appointment
              </a>

            </div>

          ) : (

            <div className="mt-5 overflow-hidden rounded-2xl border bg-white shadow-sm">

              <div className="divide-y">

                {todaysAppointments.map(
                  (appointment) => (

                    <a
                      key={appointment.id}
                      href={`/patients/${appointment.patient_id}`}
                      className="flex flex-col gap-4 p-5 transition hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between"
                    >

                      <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl">
                          📅
                        </div>

                        <div>

                          <p className="font-bold text-gray-900">
                            {appointment.patients?.full_name ||
                              "Unknown Patient"}
                          </p>

                          <p className="mt-1 text-sm text-orange-600">
                            {formatTime(
                              appointment.appointment_time
                            )}
                          </p>

                          {appointment.treatment && (
                            <p className="mt-1 text-sm text-gray-500">
                              {appointment.treatment}
                            </p>
                          )}

                        </div>

                      </div>

                      <span className="w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                        {appointment.status}
                      </span>

                    </a>

                  )
                )}

              </div>

            </div>

          )}

        </div>

        {/* UPCOMING + RECENT PATIENTS */}
        <div className="mt-8 grid gap-5 lg:grid-cols-2">

          {/* UPCOMING */}
          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

            <div className="flex items-center justify-between border-b p-5">

              <div>
                <h3 className="font-bold text-gray-900">
                  Upcoming Appointments
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Next scheduled visits
                </p>
              </div>

              <a
                href="/appointments"
                className="text-sm font-semibold text-orange-500"
              >
                View all
              </a>

            </div>

            {upcomingAppointments?.length === 0 ? (

              <div className="p-10 text-center text-sm text-gray-500">
                No upcoming appointments.
              </div>

            ) : (

              <div className="divide-y">

                {upcomingAppointments.map(
                  (appointment) => (

                    <a
                      key={appointment.id}
                      href={`/patients/${appointment.patient_id}`}
                      className="flex items-center justify-between p-5 transition hover:bg-gray-50"
                    >

                      <div>

                        <p className="font-semibold text-gray-900">
                          {appointment.patients?.full_name ||
                            "Unknown Patient"}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          {formatDate(
                            appointment.appointment_date
                          )}{" "}
                          •{" "}
                          {formatTime(
                            appointment.appointment_time
                          )}
                        </p>

                      </div>

                      <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                        {appointment.status}
                      </span>

                    </a>

                  )
                )}

              </div>

            )}

          </div>

          {/* RECENT PATIENTS */}
          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

            <div className="flex items-center justify-between border-b p-5">

              <div>
                <h3 className="font-bold text-gray-900">
                  Recent Patients
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Recently registered patients
                </p>
              </div>

              <a
                href="/patients"
                className="text-sm font-semibold text-orange-500"
              >
                View all
              </a>

            </div>

            {recentPatients?.length === 0 ? (

              <div className="p-10 text-center text-sm text-gray-500">
                No patients yet.
              </div>

            ) : (

              <div className="divide-y">

                {recentPatients.map(
                  (patient) => (

                    <a
                      key={patient.id}
                      href={`/patients/${patient.id}`}
                      className="flex items-center justify-between p-5 transition hover:bg-gray-50"
                    >

                      <div className="flex items-center gap-4">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 font-semibold text-orange-500">
                          {patient.full_name
                            ?.charAt(0)
                            ?.toUpperCase()}
                        </div>

                        <div>

                          <p className="font-semibold text-gray-900">
                            {patient.full_name}
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
                            {patient.phone}
                          </p>

                        </div>

                      </div>

                      <span className="text-gray-400">
                        →
                      </span>

                    </a>

                  )
                )}

              </div>

            )}

          </div>

        </div>

        {/* FINANCIAL / PAYMENTS OVERVIEW */}

        {isDoctor && (
          <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-bold text-gray-900">
                  Financial Overview
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Based on recorded treatments and payments.
                </p>
              </div>

              <a
                href="/patients"
                className="font-semibold text-orange-500"
              >
                Manage Payments →
              </a>

            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">

              <div className="rounded-xl bg-gray-50 p-5">
                <p className="text-sm text-gray-500">
                  Total Treatment Fees
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-900">
                  {formatCurrency(totalTreatmentFees)}
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-5">
                <p className="text-sm text-gray-500">
                  Total Collected
                </p>

                <p className="mt-2 text-2xl font-bold text-green-600">
                  {formatCurrency(totalCollected)}
                </p>
              </div>

              <div className="rounded-xl bg-orange-50 p-5">
                <p className="text-sm text-gray-500">
                  Remaining Balance
                </p>

                <p className="mt-2 text-2xl font-bold text-orange-600">
                  {formatCurrency(remainingBalance)}
                </p>
              </div>

            </div>

          </div>
        )}

        {isReceptionist && (
          <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-bold text-gray-900">
                  Payments Overview
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Payment collection summary.
                </p>
              </div>

              <a
                href="/patients?module=payments"
                className="font-semibold text-green-600"
              >
                Manage Payments →
              </a>

            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              <div className="rounded-xl bg-green-50 p-5">
                <p className="text-sm text-gray-500">
                  Total Collected
                </p>

                <p className="mt-2 text-2xl font-bold text-green-600">
                  {formatCurrency(totalCollected)}
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-5">
                <p className="text-sm text-gray-500">
                  Today&apos;s Payments
                </p>

                <p className="mt-2 text-2xl font-bold text-blue-600">
                  {formatCurrency(todaysPaymentsAmount)}
                </p>
              </div>

            </div>

          </div>
        )}

        {/* CLINIC MANAGEMENT */}
        <h3 className="mt-10 text-xl font-bold text-gray-900">
          Clinic Management
        </h3>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* PATIENTS */}
          <a
            href="/patients"
            className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-3xl">
              👨‍⚕️
            </div>

            <h4 className="mt-4 font-semibold text-gray-900">
              Patients
            </h4>

            <p className="mt-1 text-sm text-gray-500">
              {isDentalAssistant
                ? "View patient records."
                : "Add and manage patient records."}
            </p>

            <p className="mt-4 text-sm font-semibold text-orange-500">
              Open Patients →
            </p>
          </a>

          {/* APPOINTMENTS */}
          <a
            href="/appointments"
            className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-3xl">
              📅
            </div>

            <h4 className="mt-4 font-semibold text-gray-900">
              Appointments
            </h4>

            <p className="mt-1 text-sm text-gray-500">
              Manage today&apos;s and upcoming appointments.
            </p>

            <p className="mt-4 text-sm font-semibold text-blue-600">
              Open Appointments →
            </p>
          </a>

          {/* TREATMENTS */}
          {canViewTreatments && (
            <a
              href="/patients?module=treatments"
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-3xl">
                🦷
              </div>

              <h4 className="mt-4 font-semibold text-gray-900">
                Treatments
              </h4>

              <p className="mt-1 text-sm text-gray-500">
                Record treatments and clinical procedures.
              </p>

              <p className="mt-4 text-sm font-semibold text-orange-500">
                Select Patient →
              </p>
            </a>
          )}

          {/* PERIODONTAL */}
          {canViewTreatments && (
            <a
              href="/patients?module=periodontal"
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-3xl">
                🩺
              </div>

              <h4 className="mt-4 font-semibold text-gray-900">
                Periodontal Chart
              </h4>

              <p className="mt-1 text-sm text-gray-500">
                Record periodontal findings and measurements.
              </p>

              <p className="mt-4 text-sm font-semibold text-blue-600">
                Select Patient →
              </p>
            </a>
          )}

          {/* PAYMENTS */}
          {canViewPayments && (
            <a
              href="/patients?module=payments"
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-3xl">
                💰
              </div>

              <h4 className="mt-4 font-semibold text-gray-900">
                Payments
              </h4>

              <p className="mt-1 text-sm text-gray-500">
                Track treatment fees and payments.
              </p>

              <p className="mt-4 text-sm font-semibold text-green-600">
                Select Patient →
              </p>
            </a>
          )}

          {/* PHOTOS & X-RAYS */}
          {canViewDocuments && (
            <a
              href="/patients?module=documents"
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-3xl">
                📷
              </div>

              <h4 className="mt-4 font-semibold text-gray-900">
                Photos &amp; X-rays
              </h4>

              <p className="mt-1 text-sm text-gray-500">
                {isDentalAssistant
                  ? "View clinical photos and X-rays."
                  : "Manage clinical photos and X-rays."}
              </p>

              <p className="mt-4 text-sm font-semibold text-purple-600">
                Select Patient →
              </p>
            </a>
          )}

        </div>

      </div>
    </main>
  );
}