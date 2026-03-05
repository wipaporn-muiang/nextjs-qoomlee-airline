import { MapPin, CircleCheckBig } from "lucide-react";

const tips = [
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
      "Keep liquids in containers \u2264100ml and place in a clear bag.",
  },
  {
    title: "Stay Informed",
    description:
      "Check visa requirements and travel advisories for your destination.",
  },
];

export default function TravelTips() {
  return (
    <div className="rounded-xl border border-border bg-card px-7 py-7 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-icon-bg-dark">
          <MapPin className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-bold text-card-foreground">
          Travel Tips
        </h3>
      </div>

      {/* Tips List */}
      <ul className="mt-6 flex flex-col gap-5">
        {tips.map((tip) => (
          <li key={tip.title} className="flex items-start gap-3">
            <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-check" strokeWidth={2} />
            <div>
              <p className="text-sm font-bold text-card-foreground">
                {tip.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-accent">
                {tip.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Support CTA */}
      <div className="mt-7 rounded-lg border border-support-border bg-support-bg px-4 py-4 text-center">
        <p className="text-sm text-accent">
          Need help? Contact our 24/7 support team
        </p>
        <p className="mt-1.5 text-base font-bold text-primary">
          +1-800-QOOMLEE
        </p>
      </div>
    </div>
  );
}
