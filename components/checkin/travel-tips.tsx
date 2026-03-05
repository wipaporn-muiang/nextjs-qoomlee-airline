import { MapPin, CheckCircle2 } from "lucide-react";

const TIPS = [
  {
    title: "Arrive Early",
    description:
      "Arrive 2-3 hours before international flights, 1-2 hours for domestic.",
  },
  {
    title: "Valid Documents",
    description:
      "Ensure your passport is valid for 6 months beyond your travel dates.",
  },
  {
    title: "Mobile Boarding",
    description:
      "Download your boarding pass to your phone for quick access.",
  },
  {
    title: "Pack Smart",
    description:
      "Keep liquids in containers ≤100ml and place in a clear bag.",
  },
  {
    title: "Stay Informed",
    description:
      "Check visa requirements and travel advisories for your destination.",
  },
];

export function TravelTips() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light">
          <MapPin className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-bold text-card-foreground">Travel Tips</h3>
      </div>

      <ul className="mt-5 flex flex-col gap-4">
        {TIPS.map((tip) => (
          <li key={tip.title} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-semibold text-card-foreground">
                {tip.title}
              </p>
              <p className="mt-0.5 text-xs text-muted leading-relaxed">
                {tip.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-lg border border-border bg-muted-light px-4 py-3 text-center">
        <p className="text-xs text-muted">
          {"Need help? Contact our 24/7 support team"}
        </p>
        <p className="mt-1 text-sm font-bold text-primary">
          +1-800-QOOMLEE
        </p>
      </div>
    </div>
  );
}
