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
    <div
      className="rounded-xl bg-white p-7 shadow-sm"
      style={{ border: "1px solid var(--color-border-default)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: "var(--color-primary-blue)" }}
        >
          <MapPin className="h-[18px] w-[18px] text-white" strokeWidth={2.2} />
        </div>
        <h3
          className="text-[17px] font-bold"
          style={{ color: "var(--color-text-dark)" }}
        >
          Travel Tips
        </h3>
      </div>

      {/* Tips List */}
      <ul className="mt-6 flex flex-col gap-5">
        {tips.map((tip) => (
          <li key={tip.title} className="flex items-start gap-2.5">
            <CircleCheckBig
              className="mt-0.5 h-5 w-5 shrink-0"
              strokeWidth={2}
              style={{ color: "var(--color-primary-blue)" }}
            />
            <div>
              <p
                className="text-[13.5px] font-bold leading-snug"
                style={{ color: "var(--color-text-dark)" }}
              >
                {tip.title}
              </p>
              <p
                className="mt-0.5 text-[13px] leading-relaxed"
                style={{ color: "var(--color-text-body)" }}
              >
                {tip.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Support CTA */}
      <div
        className="mt-6 rounded-lg px-4 py-3.5 text-center"
        style={{
          border: "1px solid var(--color-support-border)",
          backgroundColor: "var(--color-support-bg)",
        }}
      >
        <p className="text-xs leading-snug" style={{ color: "var(--color-text-body)" }}>
          Need help? Contact our 24/7 support team
        </p>
        <p
          className="mt-1 text-[15px] font-bold"
          style={{ color: "var(--color-primary-blue)" }}
        >
          +1-800-QOOMLEE
        </p>
      </div>
    </div>
  );
}
