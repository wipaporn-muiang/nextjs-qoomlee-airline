import { Clock, Luggage } from "lucide-react";

export function InfoCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-base font-bold text-card-foreground">
            Flight Status
          </h3>
        </div>
        <p className="mt-3 text-sm text-muted leading-relaxed">
          Track your flight in real-time. Get updates on departure, arrival,
          gate changes, and delays.
        </p>
        <a
          href="#"
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {"Check Status →"}
        </a>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
            <Luggage className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-base font-bold text-card-foreground">
            Baggage Rules
          </h3>
        </div>
        <p className="mt-3 text-sm text-muted leading-relaxed">
          {"Economy: 1 carry-on (7kg) + checked (23kg)."}
          <br />
          {"Business: 2 carry-ons + 2 checked bags (32kg each)."}
        </p>
        <a
          href="#"
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {"Learn More →"}
        </a>
      </div>
    </div>
  );
}
