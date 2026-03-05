"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface StepHeaderProps {
  title: string;
  subtitle: string;
  currentStep: number;
  totalSteps: number;
}

export function StepHeader({
  title,
  subtitle,
  currentStep,
  totalSteps,
}: StepHeaderProps) {
  const router = useRouter();
  const progress = (currentStep / totalSteps) * 100;

  return (
    <header className="bg-card">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/")}
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-muted-light hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-foreground">{title}</span>
            <span className="text-xs text-muted">{subtitle}</span>
          </div>
        </div>
        <span className="text-xs text-muted">
          Step {currentStep} of {totalSteps}
        </span>
      </div>

      <div className="h-1 w-full bg-border">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
