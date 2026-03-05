import { Clock, Luggage } from "lucide-react";
import Link from "next/link";

export default function InfoCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {/* Flight Status */}
      <div
        className="rounded-xl bg-white p-6 shadow-sm"
        style={{ border: "1px solid var(--color-border-default)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: "var(--color-icon-light)" }}
          >
            <Clock
              className="h-[18px] w-[18px]"
              strokeWidth={2}
              style={{ color: "var(--color-primary-blue)" }}
            />
          </div>
          <h3
            className="text-[15px] font-bold"
            style={{ color: "var(--color-text-dark)" }}
          >
            Flight Status
          </h3>
        </div>
        <p
          className="mt-4 text-[13px] leading-relaxed"
          style={{ color: "var(--color-text-body)" }}
        >
          Track your flight in real-time. Get updates on departure, arrival,
          gate changes, and delays.
        </p>
        <Link
          href="/flight-status"
          className="mt-5 inline-flex items-center gap-1 text-[13px] font-medium transition-opacity hover:opacity-80"
          style={{ color: "var(--color-primary-blue)" }}
        >
          Check Status
          <span aria-hidden="true" className="ml-0.5">
            {"\u2192"}
          </span>
        </Link>
      </div>

      {/* Baggage Rules */}
      <div
        className="rounded-xl bg-white p-6 shadow-sm"
        style={{ border: "1px solid var(--color-border-default)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: "var(--color-icon-light)" }}
          >
            <Luggage
              className="h-[18px] w-[18px]"
              strokeWidth={2}
              style={{ color: "var(--color-primary-blue)" }}
            />
          </div>
          <h3
            className="text-[15px] font-bold"
            style={{ color: "var(--color-text-dark)" }}
          >
            Baggage Rules
          </h3>
        </div>
        <p
          className="mt-4 text-[13px] leading-relaxed"
          style={{ color: "var(--color-text-body)" }}
        >
          Economy: 1 carry-on (7kg) + checked (23kg).
          <br />
          Business: 2 carry-ons + 2 checked bags (32kg each).
        </p>
        <Link
          href="/baggage"
          className="mt-5 inline-flex items-center gap-1 text-[13px] font-medium transition-opacity hover:opacity-80"
          style={{ color: "var(--color-primary-blue)" }}
        >
          Learn More
          <span aria-hidden="true" className="ml-0.5">
            {"\u2192"}
          </span>
        </Link>
      </div>
    </div>
  );
}
