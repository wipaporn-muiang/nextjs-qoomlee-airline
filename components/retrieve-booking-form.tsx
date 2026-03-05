"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RetrieveBookingForm() {
  const [lastName, setLastName] = useState("");
  const [pnr, setPnr] = useState("");
  const router = useRouter();

  const isFormValid = lastName.trim().length > 0 && pnr.trim().length > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isFormValid) return;
    router.push(
      `/checkin/select-passengers?lastName=${encodeURIComponent(lastName.trim())}&pnr=${encodeURIComponent(pnr.trim())}`
    );
  }

  return (
    <div
      className="rounded-xl bg-white p-8 shadow-sm md:p-10"
      style={{ border: "1px solid var(--color-border-default)" }}
    >
      <h2
        className="text-[22px] font-bold leading-tight"
        style={{ color: "var(--color-text-dark)" }}
      >
        Retrieve Your Booking
      </h2>

      <form className="mt-8" onSubmit={handleSubmit}>
        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold"
            style={{ color: "var(--color-text-dark)" }}
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Your last name"
            className="mt-2.5 block w-full rounded-lg px-4 py-3 text-sm outline-none transition-shadow focus:ring-2"
            style={{
              border: "1px solid var(--color-border-default)",
              color: "var(--color-text-dark)",
              backgroundColor: "#fff",
            }}
          />
        </div>

        {/* PNR */}
        <div className="mt-7">
          <label
            htmlFor="pnr"
            className="block text-sm font-semibold"
            style={{ color: "var(--color-text-dark)" }}
          >
            Booking reference (PNR)
          </label>
          <input
            id="pnr"
            type="text"
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
            placeholder="ABC123 OR 1234567890123"
            className="mt-2.5 block w-full rounded-lg px-4 py-3 text-sm outline-none transition-shadow focus:ring-2"
            style={{
              border: "1px solid var(--color-border-default)",
              color: "var(--color-text-dark)",
              backgroundColor: "#fff",
            }}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`mt-8 w-full rounded-xl py-3.5 text-[15px] font-semibold text-white transition-all ${
            isFormValid
              ? "cursor-pointer hover:opacity-90"
              : "cursor-not-allowed opacity-50"
          }`}
          style={{
            background: isFormValid
              ? "linear-gradient(to right, #4a9ec9, #3a8db8)"
              : "linear-gradient(to right, var(--color-btn-from), var(--color-btn-to))",
          }}
        >
          Retrieve Booking
        </button>
      </form>

      {/* Tip */}
      <div
        className="mt-6 rounded-lg px-5 py-3.5"
        style={{
          border: "1px solid var(--color-border-warm)",
          backgroundColor: "var(--color-tip-bg)",
        }}
      >
        <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-text-body)" }}>
          <span className="font-semibold" style={{ color: "var(--color-primary-blue)" }}>
            Tip:
          </span>{" "}
          Online check-in opens 24 hours before departure and closes 2 hours
          before departure.
        </p>
      </div>
    </div>
  );
}
