import Navbar from "@/components/navbar";
import HeroBanner from "@/components/hero-banner";
import RetrieveBookingForm from "@/components/retrieve-booking-form";
import InfoCards from "@/components/info-cards";
import TravelTips from "@/components/travel-tips";

export default function CheckinPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-bg)" }}>
      <Navbar />
      <HeroBanner />

      <main className="mx-auto max-w-[1140px] px-5 py-10 md:px-8 md:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          {/* Left Column */}
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <RetrieveBookingForm />
            <InfoCards />
          </div>

          {/* Right Column - Travel Tips sidebar */}
          <aside className="w-full shrink-0 lg:w-[300px]">
            <TravelTips />
          </aside>
        </div>
      </main>
    </div>
  );
}
