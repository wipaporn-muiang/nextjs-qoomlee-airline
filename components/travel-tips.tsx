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
    <div className="rounded-xl border border-border bg-card px-7 pb-7 pt-7 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-icon-bg-dark">
          <MapPin className="h-[18px] w-[18px] text-white" strokeWidth={2.2} />
        </div>
        <h3 className="text-[17px] font-bold text-card-foreground">
          Travel Tips
        </h3>
      </div>

      {/* Tips List */}
      <ul className="mt-7 flex flex-col gap-[22px]">
        {tips.map((tip) => (
          <li key={tip.title} className="flex items-start gap-2.5">
            <CircleCheckBig
              className="mt-[1px] h-[20px] w-[20px] shrink-0 text-check"
              strokeWidth={2}
            />
            <div>
              <p className="text-[13.5px] font-bold text-card-foreground leading-snug">
                {tip.title}
              </p>
              <p className="mt-[3px] text-[13px] leading-[1.55] text-accent">
                {tip.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Support CTA */}
      <div className="mt-7 rounded-lg border border-support-border bg-support-bg px-4 py-3.5 text-center">
        <p className="text-[12.5px] text-accent leading-snug">
          Need help? Contact our 24/7 support team
        </p>
        <p className="mt-1.5 text-[15px] font-bold text-primary">
          +1-800-QOOMLEE
        </p>
      </div>
    </div>
  );
}
