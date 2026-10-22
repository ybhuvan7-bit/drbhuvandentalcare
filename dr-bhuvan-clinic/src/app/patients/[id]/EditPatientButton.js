"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function EditPatientButton({ patient }) {
  const supabase = createClient();

  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [fullName, setFullName] = useState(patient.full_name || "");
  const [phone, setPhone] = useState(patient.phone || "");
  const [dateOfBirth, setDateOfBirth] = useState(
    patient.date_of_birth || ""
  );
  const [gender, setGender] = useState(patient.gender || "");
  const [email, setEmail] = useState(patient.email || "");
  const [address, setAddress] = useState(patient.address || "");
  const [medicalHistory, setMedicalHistory] = useState(
    patient.medical_history || ""
  );
  const [allergies, setAllergies] = useState(
    patient.allergies || ""
  );
  const [emergencyContactName, setEmergencyContactName] = useState(
    patient.emergency_contact_name || ""
  );
  const [emergencyContactPhone, setEmergencyContactPhone] = useState(
    patient.emergency_contact_phone || ""
  );
  const [notes, setNotes] = useState(patient.notes || "");

  async function handleUpdate(e) {
    e.preventDefault();

    setSaving(true);
    setError("");
    setSuccess("");

    const { error } = await supabase
      .from("patients")
      .update({
        full_name: fullName.trim(),
        phone: phone.trim(),
        date_of_birth: dateOfBirth || null,
        gender: gender || null,
        email: email.trim() || null,
        address: address.trim() || null,
        medical_history: medicalHistory.trim() || null,
        allergies: allergies.trim() || null,
        emergency_contact_name:
          emergencyContactName.trim() || null,
        emergency_contact_phone:
          emergencyContactPhone.trim() || null,
        notes: notes.trim() || null,
      })
      .eq("id", patient.id);

    if (error) {
      setError(error.message);
      setSaving(false);
      return;
    }

    setSuccess("Patient updated successfully.");

    setSaving(false);

    setTimeout(() => {
      window.location.reload();
    }, 700);
  }

  // Show Edit Patient button
  if (!showForm) {
    return (
      <button
        type="button"
        onClick={() => {
          setShowForm(true);
          setError("");
          setSuccess("");
        }}
        className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
      >
        Edit Patient
      </button>
    );
  }

  // Show Edit Patient modal
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 px-4 py-8">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Edit Patient
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Update patient information
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="rounded-xl border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleUpdate}
          className="p-6"
        >
          {/* Error */}
          {error && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              {success}
            </div>
          )}

          <div className="grid gap-5 md:grid-cols-2">

            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name *
              </label>

              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Phone *
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Gender
              </label>

              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="patient@email.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* Address */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Address
              </label>

              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Patient address"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* Medical History */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Medical History
              </label>

              <textarea
                value={medicalHistory}
                onChange={(e) => setMedicalHistory(e.target.value)}
                rows={3}
                placeholder="Diabetes, hypertension, medications, previous medical conditions..."
                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* Allergies */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Allergies
              </label>

              <textarea
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                rows={2}
                placeholder="Drug allergies, food allergies, latex allergy..."
                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* Emergency Contact Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Emergency Contact Name
              </label>

              <input
                type="text"
                value={emergencyContactName}
                onChange={(e) =>
                  setEmergencyContactName(e.target.value)
                }
                placeholder="Contact name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* Emergency Contact Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Emergency Contact Phone
              </label>

              <input
                type="tel"
                value={emergencyContactPhone}
                onChange={(e) =>
                  setEmergencyContactPhone(e.target.value)
                }
                placeholder="Contact phone"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            {/* Notes */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Notes
              </label>

              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Additional patient notes..."
                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-3 border-t pt-5">

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving Changes..." : "Save Changes"}
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}