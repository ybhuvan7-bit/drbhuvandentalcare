
"use client";

import { useState } from "react";

export default function AppointmentForm({ compact = false }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const text = [
      "Hello Dr. Bhuvan's Dental Laser & Implant Centre,",
      "I would like to request an appointment.",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Treatment / concern: ${treatment || "Not specified"}`,
      `Preferred time: ${preferredTime || "Flexible"}`,
      message.trim() ? `Additional details: ${message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/918074528763?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  const field =
    "mt-2.5 w-full rounded-xl border border-[#E9DED3] bg-[#FFFAF5] px-4 py-3.5 text-[15px] text-[#29221D] outline-none transition placeholder:text-slate-400 focus:border-[#FF6B00] focus:bg-white focus:ring-4 focus:ring-orange-100/70";

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full rounded-[2rem] border border-[#F0E5DA] bg-white text-[#29221D] shadow-[0_24px_65px_rgba(70,45,25,.10)] ${
        compact ? "p-5 sm:p-7 lg:p-8" : "p-6 sm:p-9"
      }`}
    >
      <p className="text-[10px] font-bold uppercase tracking-[.32em] text-[#E9682D]">
        Appointment request
      </p>

      <h3 className="mt-3 font-serif text-[1.85rem] font-medium tracking-[-.025em] text-[#29221D]">
        How can we reach you?
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        Fill in your details. Your request will open in WhatsApp for you to
        review and send to our clinic.
      </p>

      <div className={`grid gap-4 sm:grid-cols-2 ${compact ? "mt-5" : "mt-7"}`}>
        <label className="block text-sm font-medium text-[#39312B]">
          Your name *
          <input
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className={field}
          />
        </label>

        <label className="block text-sm font-medium text-[#39312B]">
          Phone number *
          <input
            required
            type="tel"
            inputMode="tel"
            pattern="[0-9+() -]{8,18}"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your contact number"
            className={field}
          />
        </label>

        <label className="block text-sm font-medium text-[#39312B]">
          Treatment / concern
          <select
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            className={field}
          >
            <option value="">Select if known</option>
            <option>Dental implants</option>
            <option>Bleeding gums / gum treatment</option>
            <option>Teeth cleaning</option>
            <option>Root canal treatment</option>
            <option>Laser dentistry</option>
            <option>Cosmetic dentistry / smile care</option>
            <option>Tooth pain</option>
            <option>Other / not sure</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-[#39312B]">
          Preferred time
          <select
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className={field}
          >
            <option value="">Flexible</option>
            <option>Morning (10 AM–2 PM)</option>
            <option>Evening (4 PM–9 PM)</option>
            <option>Sunday morning</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block text-sm font-medium text-[#39312B]">
        Anything else? (Optional)
        <textarea
          rows={compact ? 2 : 3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us briefly about your dental concern"
          className={`${field} resize-y`}
        />
      </label>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center rounded-full bg-[#FF6B00] px-6 py-4 text-sm font-bold text-white shadow-[0_10px_25px_rgba(255,107,0,.22)] transition hover:-translate-y-0.5 hover:bg-[#E85D04] focus:outline-none focus:ring-4 focus:ring-orange-200"
      >
        Send appointment request via WhatsApp →
      </button>

      <p className="mt-3 text-center text-xs leading-5 text-slate-500">
        Your details are not sent until you review and send the message in
        WhatsApp. This is an appointment request, not a confirmed booking.
      </p>
    </form>
  );
}
