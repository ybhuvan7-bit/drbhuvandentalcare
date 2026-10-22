"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const ROLE_LABELS = {
  doctor: "Doctor",
  assistant_doctor: "Assistant Doctor",
  receptionist: "Receptionist",
  dental_assistant: "Dental Assistant",
};

const ROLE_STYLES = {
  doctor: "bg-orange-100 text-orange-700",
  assistant_doctor: "bg-blue-100 text-blue-700",
  receptionist: "bg-green-100 text-green-700",
  dental_assistant: "bg-purple-100 text-purple-700",
};

const STAFF_ROLES = [
  {
    value: "assistant_doctor",
    label: "Assistant Doctor",
  },
  {
    value: "receptionist",
    label: "Receptionist",
  },
  {
    value: "dental_assistant",
    label: "Dental Assistant",
  },
];

export default function StaffPage() {
  const supabase = createClient();

  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [creating, setCreating] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    role: "receptionist",
    password: "",
  });

  useEffect(() => {
    loadStaff();
  }, []);

  async function loadStaff() {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("user_profiles")
      .select("id, full_name, email, role, is_active, created_at")
      .order("created_at", { ascending: true });

    if (error) {
      console.error(error);
      setError(error.message);
      setStaff([]);
    } else {
      setStaff(data || []);
    }

    setLoading(false);
  }

  function openModal() {
    setMessage("");
    setError("");

    setForm({
      fullName: "",
      email: "",
      role: "receptionist",
      password: "",
    });

    setShowModal(true);
  }

  function closeModal() {
    if (creating) return;

    setShowModal(false);
    setMessage("");
    setError("");
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function createStaff(event) {
    event.preventDefault();

    setCreating(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/staff/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          role: form.role,
          password: form.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to create staff account.");
      }

      setMessage("Staff account created successfully.");

      setForm({
        fullName: "",
        email: "",
        role: "receptionist",
        password: "",
      });

      await loadStaff();

      setTimeout(() => {
        setShowModal(false);
        setMessage("");
      }, 1200);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong.");
    } finally {
      setCreating(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/dashboard"
              className="mb-2 inline-block text-sm font-medium text-slate-500 transition hover:text-orange-600"
            >
              ← Back to Dashboard
            </Link>

            <h1 className="text-3xl font-bold text-slate-900">
              Staff Management
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage clinic staff and their access roles.
            </p>
          </div>

          <button
            type="button"
            onClick={openModal}
            className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600"
          >
            + Add Staff
          </button>
        </div>

        {/* Security Notice */}
        <div className="mb-6 rounded-2xl border border-orange-200 bg-orange-50 p-4">
          <p className="text-sm font-medium text-orange-800">
            🔐 Staff access is controlled by their assigned role.
          </p>

          <p className="mt-1 text-xs text-orange-700">
            Only authorized clinic administrators can create staff accounts.
          </p>
        </div>

        {/* Success Message */}
        {message && !showModal && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
            {message}
          </div>
        )}

        {/* Page Error */}
        {error && !showModal && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Staff List */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="font-semibold text-slate-900">
              Clinic Staff
            </h2>

            <p className="text-sm text-slate-500">
              {staff.length} staff member{staff.length !== 1 ? "s" : ""}
            </p>
          </div>

          {loading ? (
            <div className="p-8 text-center text-sm text-slate-500">
              Loading staff...
            </div>
          ) : staff.length === 0 ? (
            <div className="p-10 text-center">
              <div className="text-4xl">👥</div>

              <h3 className="mt-3 font-semibold text-slate-900">
                No staff found
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Add your clinic staff members to get started.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {staff.map((person) => (
                <div
                  key={person.id}
                  className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-lg font-bold text-slate-600">
                      {person.full_name?.charAt(0)?.toUpperCase() || "S"}
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {person.full_name}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {person.email || "Email not added"}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        ROLE_STYLES[person.role] ||
                        "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {ROLE_LABELS[person.role] || person.role}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        person.is_active
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {person.is_active ? "Active" : "Inactive"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add Staff Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">

              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Add Staff Member
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Create a secure clinic login account.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  disabled={creating}
                  className="rounded-lg px-3 py-2 text-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  ×
                </button>
              </div>

              {/* Form */}
              <form onSubmit={createStaff}>

                <div className="space-y-5 px-6 py-6">

                  {/* Full Name */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Enter staff name"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Login Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="staff@example.com"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />

                    <p className="mt-1 text-xs text-slate-500">
                      This email will be used to sign in to the clinic system.
                    </p>
                  </div>

                  {/* Role */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Staff Role
                    </label>

                    <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    >
                      {STAFF_ROLES.map((role) => (
                        <option key={role.value} value={role.value}>
                          {role.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Initial Password
                    </label>

                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Minimum 8 characters"
                      minLength={8}
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />

                    <p className="mt-1 text-xs text-slate-500">
                      Give the staff member this initial password securely.
                      They should change it later.
                    </p>
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  {/* Success */}
                  {message && (
                    <div className="rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-700">
                      {message}
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-4">

                  <button
                    type="button"
                    onClick={closeModal}
                    disabled={creating}
                    className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={creating}
                    className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {creating ? "Creating..." : "Create Staff"}
                  </button>

                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}