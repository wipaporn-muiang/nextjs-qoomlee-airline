"use client";

import { Info } from "lucide-react";

export default function RetrieveBookingForm() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
      <h2 className="text-xl font-bold text-card-foreground md:text-2xl">
        Retrieve Your Booking
      </h2>

      <form
        className="mt-6 flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Last Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="lastName"
            className="text-sm font-semibold text-card-foreground"
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Your last name"
            className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-shadow focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        {/* PNR */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="pnr"
            className="text-sm font-semibold text-card-foreground"
          >
            Booking reference (PNR)
          </label>
          <input
            id="pnr"
            type="text"
            placeholder="ABC123 OR 1234567890123"
            className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-shadow focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-1 w-full cursor-pointer rounded-lg bg-button py-3.5 text-sm font-semibold text-card transition-colors hover:bg-button-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Retrieve Booking
        </button>
      </form>

      {/* Tip */}
      <div className="mt-5 flex items-start gap-2 rounded-lg bg-tip-bg px-4 py-3">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-tip-text" />
        <p className="text-sm text-tip-text">
          <span className="font-semibold">Tip:</span> Online check-in opens 24
          hours before departure and closes 2 hours before departure.
        </p>
      </div>
    </div>
  );
}
