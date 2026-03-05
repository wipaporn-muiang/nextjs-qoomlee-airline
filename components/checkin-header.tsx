"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CheckinHeaderProps {
  subtitle: string;
  step: number;
  totalSteps: number;
}

export default function CheckinHeader({
  subtitle,
  step,
  totalSteps,
}: CheckinHeaderProps) {
  const router = useRouter();
  const progressPercent = (step / totalSteps) * 100;

  return (
    <div className="bg-white" style={{ borderBottom: "1px solid var(--color-border-default)" }}>
      <div className="mx-auto flex h-[60px] max-w-[1200px] items-center justify-between px-6">
        {/* Close button + Title */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/checkin")}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-gray-100"
            aria-label="Close check-in"
          >
            <X className="h-5 w-5" style={{ color: "var(--color-text-dark)" }} />
          </button>
          <div className="flex flex-col leading-tight">
            <span
              className="text-[15px] font-semibold"
              style={{ color: "var(--color-text-dark)" }}
            >
              Check-in
            </span>
            <span
              className="text-xs"
              style={{ color: "var(--color-text-body)" }}
            >
              {subtitle}
            </span>
          </div>
        </div>

        {/* Step indicator */}
        <span
          className="text-sm"
          style={{ color: "var(--color-text-body)" }}
        >
          Step {step} of {totalSteps}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full" style={{ backgroundColor: "var(--color-border-default)" }}>
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${progressPercent}%`,
            background: "linear-gradient(to right, var(--color-hero-from), var(--color-primary-blue))",
          }}
        />
      </div>
    </div>
  );
}
