"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, X } from "lucide-react";
import { StepHeader } from "./step-header";
import { PassengerCard } from "./passenger-card";
import type { BookingResponse } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SelectPassengers() {
  const router = useRouter();
  const [booking, setBooking] = useState<BookingResponse | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const data = sessionStorage.getItem("booking");
    if (!data) {
      router.push("/");
      return;
    }
    try {
      const parsed: BookingResponse = JSON.parse(data);
      setBooking(parsed);
    } catch {
      router.push("/");
    }
  }, [router]);

  if (!booking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  const allSelected = selectedIds.size === booking.passengers.length;
  const hasSelection = selectedIds.size > 0;

  function togglePassenger(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function toggleAll() {
    if (allSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(booking!.passengers.map((p) => p.id)));
    }
  }

  function handleContinue() {
    const selected = booking!.passengers.filter((p) =>
      selectedIds.has(p.id)
    );
    sessionStorage.setItem("selectedPassengers", JSON.stringify(selected));
    // Navigate to next step (placeholder for now)
    alert(
      `Checked in ${selected.length} passenger(s): ${selected.map((p) => `${p.firstName} ${p.lastName}`).join(", ")}`
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <StepHeader
        title="Check-in"
        subtitle="Select Passengers"
        currentStep={2}
        totalSteps={5}
      />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-8 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold text-card-foreground">
            Select Passengers
          </h2>
          <p className="mt-1 text-sm text-muted">
            Choose passengers for check-in
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {booking.passengers.map((passenger) => (
              <PassengerCard
                key={passenger.id}
                passenger={passenger}
                selected={selectedIds.has(passenger.id)}
                onToggle={togglePassenger}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={toggleAll}
            className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition-colors hover:bg-muted-light"
          >
            {allSelected ? (
              <>
                <X className="h-4 w-4" />
                Clear All
              </>
            ) : (
              <>
                <Check className="h-4 w-4" />
                Select All
              </>
            )}
          </button>
        </div>
      </main>

      <footer className="sticky bottom-0 border-t border-border bg-card px-4 py-4">
        <div className="mx-auto flex max-w-3xl gap-4">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="flex-1 rounded-lg border border-border bg-card py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-muted-light"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleContinue}
            disabled={!hasSelection}
            className={cn(
              "flex-1 rounded-lg py-3 text-sm font-bold text-card transition-all",
              hasSelection
                ? "bg-primary shadow-md hover:bg-primary-dark"
                : "cursor-not-allowed bg-disabled-bg text-disabled"
            )}
          >
            Continue
          </button>
        </div>
      </footer>
    </div>
  );
}
