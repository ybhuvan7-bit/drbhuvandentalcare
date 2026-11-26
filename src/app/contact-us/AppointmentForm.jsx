"use client";

import { useState } from "react";

export default function AppointmentForm() {
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

    window.open(
      `https://wa.me/918074528763?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const field =
    "mt-2.5 w-full rounded-xl border border-[#e5d9cc] bg-[#fffaf4] px-4 py-3.5 text-[15px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100/80";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[#eadfd2] bg-[#fffdf9] p-6 text-[#29221d] shadow-[0_34px_90px_rgba(0,0,0,.20)] sm:p-9"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[.32em] text-[#a85a2a]">
        Appointment request
      </p>
      <h3 className="mt-3 font-serif text-[1.85rem] font-medium tracking-[-.025em]">
        How can we reach you?
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">
        Fill in your details. Your request will open in WhatsApp for you to
        review and send to our clinic.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Your name *
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            placeholder="Enter your name"
            className={field}
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Phone number *
          <input
            required
            type="tel"
            inputMode="tel"
            pattern="[0-9+() -]{8,18}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            placeholder="Your contact number"
            className={field}
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Treatment / concern
          <select
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            className={`${field} bg-white`}
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

        <label className="text-sm font-medium text-slate-700">
          Preferred time
          <select
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className={`${field} bg-white`}
          >
            <option value="">Flexible</option>
            <option>Morning (10 AM–2 PM)</option>
            <option>Evening (4 PM–9 PM)</option>
            <option>Sunday morning</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block text-sm font-medium text-slate-700">
        Anything else? (Optional)
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Briefly describe your concern"
          className={`${field} resize-y`}
        />
      </label>

      <button
        type="submit"
        className="mt-7 flex w-full items-center justify-center rounded-full bg-[#b85a2b] px-6 py-4 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(152,69,31,.24)] transition hover:-translate-y-0.5 hover:bg-[#98451f] focus:outline-none focus:ring-4 focus:ring-orange-200"
      >
        Send appointment request via WhatsApp →
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-slate-500">
        Your details are used to prepare the WhatsApp message. Nothing is sent
        until you review and send it in WhatsApp. This is an appointment request,
        not a confirmed booking.
      </p>
    </form>
  );
}
