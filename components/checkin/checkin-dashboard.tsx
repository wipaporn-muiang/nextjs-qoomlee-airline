"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "./navbar";
import { HeroBanner } from "./hero-banner";
import { BookingForm } from "./booking-form";
import { TravelTips } from "./travel-tips";
import { InfoCards } from "./info-cards";

export function CheckinDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleRetrieveBooking(lastName: string, pnr: string) {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lastName, pnr }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      const booking = await res.json();
      // Store booking data in sessionStorage temporarily for the next page
      sessionStorage.setItem("booking", JSON.stringify(booking));
      router.push("/checkin/select-passengers");
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner />

      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="flex flex-col gap-6 lg:flex-1">
            <BookingForm
              onSubmit={handleRetrieveBooking}
              isLoading={isLoading}
              error={error}
            />
            <InfoCards />
          </div>
          <aside className="lg:w-80 xl:w-96">
            <TravelTips />
          </aside>
        </div>
      </main>
    </div>
  );
}
