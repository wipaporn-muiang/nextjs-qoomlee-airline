"use client";

export default function RetrieveBookingForm() {
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

      <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
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
          className="mt-8 w-full cursor-pointer rounded-xl py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          style={{
            background: "linear-gradient(to right, var(--color-btn-from), var(--color-btn-to))",
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
