"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, X } from "lucide-react";
import CheckinHeader from "@/components/checkin-header";
import PassengerCard from "@/components/passenger-card";

const MOCK_PASSENGERS = [
  { id: "1", name: "ALEX HUUM", type: "ADT", seat: "Seat 12A" },
  { id: "2", name: "Somsee Kuum", type: "ADT", seat: "Seat 12B" },
];

export default function SelectPassengersPage() {
  const router = useRouter();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set([MOCK_PASSENGERS[0].id])
  );

  const allSelected = selectedIds.size === MOCK_PASSENGERS.length;

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

  function handleSelectAll() {
    if (allSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(MOCK_PASSENGERS.map((p) => p.id)));
    }
  }

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <CheckinHeader
        subtitle="Select Passengers"
        step={2}
        totalSteps={5}
      />

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center px-5 pt-8 pb-32">
        <div className="w-full max-w-[560px]">
          {/* Card */}
          <div
            className="rounded-xl bg-white p-8 shadow-sm"
            style={{ border: "1px solid var(--color-border-default)" }}
          >
            <h2
              className="text-xl font-bold"
              style={{ color: "var(--color-text-dark)" }}
            >
              Select Passengers
            </h2>
            <p
              className="mt-1 text-sm"
              style={{ color: "var(--color-text-body)" }}
            >
              Choose passengers for check-in
            </p>

            {/* Passenger List */}
            <div className="mt-6 flex flex-col gap-3">
              {MOCK_PASSENGERS.map((pax) => (
                <PassengerCard
                  key={pax.id}
                  name={pax.name}
                  type={pax.type}
                  seat={pax.seat}
                  selected={selectedIds.has(pax.id)}
                  onToggle={() => togglePassenger(pax.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Bar */}
      <div
        className="fixed right-0 bottom-0 left-0 bg-white"
        style={{ borderTop: "1px solid var(--color-border-default)" }}
      >
        <div className="mx-auto flex max-w-[560px] flex-col items-end gap-3 px-5 pt-4 pb-6">
          {/* Select All / Clear All */}
          <button
            type="button"
            onClick={handleSelectAll}
            className="flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
            style={{
              color: "var(--color-text-dark)",
              border: "1px solid var(--color-border-default)",
              backgroundColor: "#fff",
            }}
          >
            {allSelected ? (
              <>
                <X className="h-4 w-4" style={{ color: "var(--color-text-dark)" }} />
                Clear All
              </>
            ) : (
              <>
                <Check className="h-4 w-4" style={{ color: "var(--color-text-dark)" }} />
                Select All
              </>
            )}
          </button>

          {/* Action Buttons */}
          <div className="flex w-full gap-3">
            <button
              type="button"
              onClick={() => router.push("/checkin")}
              className="flex-1 cursor-pointer rounded-xl py-3.5 text-[15px] font-semibold transition-colors hover:bg-gray-50"
              style={{
                color: "var(--color-text-dark)",
                border: "1px solid var(--color-border-default)",
                backgroundColor: "#fff",
              }}
            >
              Back
            </button>
            <button
              type="button"
              disabled={selectedIds.size === 0}
              className={`flex-1 rounded-xl py-3.5 text-[15px] font-semibold text-white transition-all ${
                selectedIds.size > 0
                  ? "cursor-pointer hover:opacity-90"
                  : "cursor-not-allowed opacity-50"
              }`}
              style={{
                background:
                  selectedIds.size > 0
                    ? "linear-gradient(to right, #4a9ec9, #3a8db8)"
                    : "linear-gradient(to right, var(--color-btn-from), var(--color-btn-to))",
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
