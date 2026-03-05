"use client";

export default function RetrieveBookingForm() {
  return (
    <div className="rounded-xl border border-border bg-card px-8 pb-8 pt-9 shadow-sm md:px-10 md:pb-10 md:pt-10">
      <h2 className="text-[22px] font-bold text-card-foreground leading-tight">
        Retrieve Your Booking
      </h2>

      <form
        className="mt-8"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Last Name */}
        <div className="flex flex-col">
          <label
            htmlFor="lastName"
            className="text-[13px] font-semibold text-card-foreground"
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Your last name"
            className="mt-2.5 rounded-lg border border-border bg-white px-4 py-3 text-[14px] text-foreground placeholder:text-muted outline-none transition-shadow focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        {/* PNR */}
        <div className="mt-7 flex flex-col">
          <label
            htmlFor="pnr"
            className="text-[13px] font-semibold text-card-foreground"
          >
            Booking reference (PNR)
          </label>
          <input
            id="pnr"
            type="text"
            placeholder="ABC123 OR 1234567890123"
            className="mt-2.5 rounded-lg border border-border bg-white px-4 py-3 text-[14px] text-foreground placeholder:text-muted outline-none transition-shadow focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-8 w-full cursor-pointer rounded-xl bg-gradient-to-r from-button-start to-button-end py-[14px] text-[15px] font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Retrieve Booking
        </button>
      </form>

      {/* Tip */}
      <div className="mt-6 rounded-lg border border-border-light bg-tip-bg px-5 py-3.5">
        <p className="text-[13px] text-foreground/75 leading-relaxed">
          <span className="font-semibold text-tip-text">Tip:</span>{" "}
          Online check-in opens 24 hours before departure and closes 2 hours
          before departure.
        </p>
      </div>
    </div>
  );
}
