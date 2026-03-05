"use client";

import { Check } from "lucide-react";

interface PassengerCardProps {
  name: string;
  type: string;
  seat: string;
  selected: boolean;
  onToggle: () => void;
}

export default function PassengerCard({
  name,
  type,
  seat,
  selected,
  onToggle,
}: PassengerCardProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative w-full cursor-pointer overflow-hidden rounded-xl px-6 py-5 text-left transition-all ${
        selected ? "ring-2" : "ring-1"
      }`}
      style={{
        backgroundColor: "#fff",
        ringColor: selected ? "var(--color-primary-blue)" : "var(--color-border-default)",
        borderColor: selected ? "var(--color-primary-blue)" : "var(--color-border-default)",
        border: selected ? "1px solid var(--color-primary-blue)" : "1px solid var(--color-border-default)",
      }}
      aria-pressed={selected}
    >
      {/* Triangle checkmark in top-right corner */}
      {selected && (
        <div
          className="absolute top-0 right-0 flex h-10 w-10 items-start justify-end"
          aria-hidden="true"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="absolute top-0 right-0"
          >
            <path d="M0 0 L40 0 L40 40 Z" fill="#4a9ec9" />
          </svg>
          <Check
            className="absolute top-1 right-1 h-4 w-4 text-white"
            strokeWidth={3}
          />
        </div>
      )}

      <p
        className="text-[15px] font-semibold"
        style={{ color: "var(--color-text-dark)" }}
      >
        {name}
      </p>
      <div className="mt-2 flex items-center gap-2">
        <span
          className="rounded px-2 py-0.5 text-xs font-medium"
          style={{
            backgroundColor: "rgba(42, 124, 199, 0.1)",
            color: "var(--color-primary-blue)",
          }}
        >
          {type}
        </span>
        <span
          className="text-xs"
          style={{ color: "var(--color-text-body)" }}
        >
          {seat}
        </span>
      </div>
    </button>
  );
}
