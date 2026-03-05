import Navbar from "@/components/navbar";
import HeroBanner from "@/components/hero-banner";
import RetrieveBookingForm from "@/components/retrieve-booking-form";
import InfoCards from "@/components/info-cards";
import TravelTips from "@/components/travel-tips";

export default function CheckinPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner />

      <main className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Left Column */}
          <div className="flex flex-1 flex-col gap-6">
            <RetrieveBookingForm />
            <InfoCards />
          </div>

          {/* Right Column */}
          <aside className="w-full lg:w-[380px] shrink-0">
            <TravelTips />
          </aside>
        </div>
      </main>
    </div>
  );
}
