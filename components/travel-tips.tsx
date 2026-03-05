import { MapPin, CircleCheckBig, Phone } from "lucide-react";

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
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark">
          <MapPin className="h-5 w-5 text-card" />
        </div>
        <h3 className="text-base font-bold text-card-foreground md:text-lg">
          Travel Tips
        </h3>
      </div>

      {/* Tips List */}
      <ul className="mt-5 flex flex-col gap-5">
        {tips.map((tip) => (
          <li key={tip.title} className="flex items-start gap-3">
            <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-card-foreground">
                {tip.title}
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-accent">
                {tip.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Support CTA */}
      <div className="mt-6 rounded-lg bg-support-bg px-4 py-4 text-center">
        <p className="text-sm text-accent">
          Need help? Contact our 24/7 support team
        </p>
        <a
          href="tel:+18001234567"
          className="mt-1 inline-flex items-center gap-1.5 text-base font-bold text-primary"
        >
          <Phone className="h-4 w-4" />
          +1-800-QOOMLEE
        </a>
      </div>
    </div>
  );
}
