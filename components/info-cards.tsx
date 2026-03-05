import { Clock, Luggage } from "lucide-react";
import Link from "next/link";

export default function InfoCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {/* Flight Status */}
      <div className="rounded-xl border border-border bg-card px-6 pb-6 pt-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-icon-bg">
            <Clock className="h-[18px] w-[18px] text-primary" strokeWidth={2} />
          </div>
          <h3 className="text-[15px] font-bold text-card-foreground">
            Flight Status
          </h3>
        </div>
        <p className="mt-4 text-[13px] leading-[1.6] text-accent">
          Track your flight in real-time. Get updates on departure, arrival,
          gate changes, and delays.
        </p>
        <Link
          href="/flight-status"
          className="mt-5 inline-flex items-center gap-1 text-[13px] font-medium text-primary hover:text-primary-dark transition-colors"
        >
          Check Status
          <span aria-hidden="true" className="ml-0.5">&#8594;</span>
        </Link>
      </div>

      {/* Baggage Rules */}
      <div className="rounded-xl border border-border bg-card px-6 pb-6 pt-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-icon-bg">
            <Luggage className="h-[18px] w-[18px] text-primary" strokeWidth={2} />
          </div>
          <h3 className="text-[15px] font-bold text-card-foreground">
            Baggage Rules
          </h3>
        </div>
        <p className="mt-4 text-[13px] leading-[1.6] text-accent">
          Economy: 1 carry-on (7kg) + checked (23kg).
          <br />
          Business: 2 carry-ons + 2 checked bags (32kg each).
        </p>
        <Link
          href="/baggage"
          className="mt-5 inline-flex items-center gap-1 text-[13px] font-medium text-primary hover:text-primary-dark transition-colors"
        >
          Learn More
          <span aria-hidden="true" className="ml-0.5">&#8594;</span>
        </Link>
      </div>
    </div>
  );
}
