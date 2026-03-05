"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  onSubmit: (lastName: string, pnr: string) => void;
  isLoading: boolean;
  error: string | null;
}

export function BookingForm({ onSubmit, isLoading, error }: BookingFormProps) {
  const [lastName, setLastName] = useState("");
  const [pnr, setPnr] = useState("");

  const isValid = lastName.trim().length > 0 && pnr.trim().length > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isValid && !isLoading) {
      onSubmit(lastName.trim(), pnr.trim());
    }
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm lg:p-8">
      <h2 className="text-xl font-bold text-card-foreground lg:text-2xl">
        Retrieve Your Booking
      </h2>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="pnr"
            className="text-sm font-semibold text-card-foreground"
          >
            {"Booking reference (PNR)"}
          </label>
          <input
            id="pnr"
            type="text"
            placeholder="ABC123 OR 1234567890123"
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
            className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {error && (
          <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={!isValid || isLoading}
          className={cn(
            "rounded-lg px-6 py-3.5 text-sm font-bold text-card transition-all",
            isValid && !isLoading
              ? "bg-gradient-to-r from-primary to-primary-dark/90 shadow-md hover:shadow-lg"
              : "cursor-not-allowed bg-disabled-bg text-disabled"
          )}
        >
          {isLoading ? "Retrieving..." : "Retrieve Booking"}
        </button>

        <div className="rounded-lg bg-primary-light px-4 py-3">
          <p className="text-xs text-muted lg:text-sm">
            <span className="font-semibold text-primary">Tip:</span> Online
            check-in opens 24 hours before departure and closes 2 hours before
            departure.
          </p>
        </div>
      </form>
    </div>
  );
}
