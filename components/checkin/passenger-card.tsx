"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Passenger } from "@/lib/types";

interface PassengerCardProps {
  passenger: Passenger;
  selected: boolean;
  onToggle: (id: string) => void;
}

export function PassengerCard({
  passenger,
  selected,
  onToggle,
}: PassengerCardProps) {
  const displayName = selected
    ? `${passenger.firstName} ${passenger.lastName}`.toUpperCase()
    : `${passenger.firstName} ${passenger.lastName}`;

  return (
    <button
      type="button"
      onClick={() => onToggle(passenger.id)}
      className={cn(
        "relative flex w-full items-center justify-between rounded-xl border-2 p-4 text-left transition-all",
        selected
          ? "border-primary bg-card shadow-sm"
          : "border-border bg-card hover:border-primary/40"
      )}
    >
      <div className="flex flex-col gap-1.5">
        <span
          className={cn(
            "text-sm font-semibold",
            selected ? "text-card-foreground" : "text-card-foreground"
          )}
        >
          {displayName}
        </span>
        <div className="flex items-center gap-2">
          <span className="rounded bg-primary-light px-2 py-0.5 text-xs font-medium text-primary">
            {passenger.type}
          </span>
          <span className="text-xs text-muted">
            Seat {passenger.seatNumber}
          </span>
        </div>
      </div>

      {selected && (
        <div className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-bl-xl rounded-tr-[10px] bg-primary text-card">
          <Check className="h-4 w-4" />
        </div>
      )}
    </button>
  );
}
