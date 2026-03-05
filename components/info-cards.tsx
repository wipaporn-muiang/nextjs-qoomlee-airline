import { Clock, Luggage } from "lucide-react";
import Link from "next/link";

export default function InfoCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {/* Flight Status */}
      <div className="rounded-xl border border-border bg-card px-6 py-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-icon-bg">
            <Clock className="h-5 w-5 text-primary" strokeWidth={2} />
          </div>
          <h3 className="text-base font-bold text-card-foreground">
            Flight Status
          </h3>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-accent">
          Track your flight in real-time. Get updates on departure, arrival,
          gate changes, and delays.
        </p>
        <Link
          href="/flight-status"
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
        >
          Check Status
          <span aria-hidden="true" className="ml-0.5">&rarr;</span>
        </Link>
      </div>

      {/* Baggage Rules */}
      <div className="rounded-xl border border-border bg-card px-6 py-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-icon-bg">
            <Luggage className="h-5 w-5 text-primary" strokeWidth={2} />
          </div>
          <h3 className="text-base font-bold text-card-foreground">
            Baggage Rules
          </h3>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-accent">
          Economy: 1 carry-on (7kg) + checked (23kg).
          <br />
          Business: 2 carry-ons + 2 checked bags (32kg each).
        </p>
        <Link
          href="/baggage"
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
        >
          Learn More
          <span aria-hidden="true" className="ml-0.5">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
