"use client";

export default function RetrieveBookingForm() {
  return (
    <div className="rounded-xl border border-border bg-card px-8 py-8 shadow-sm md:px-10 md:py-10">
      <h2 className="text-[22px] font-bold text-card-foreground">
        Retrieve Your Booking
      </h2>

      <form
        className="mt-8 flex flex-col gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Last Name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="lastName"
            className="text-sm font-bold text-card-foreground"
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Your last name"
            className="rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-shadow focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        {/* PNR */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="pnr"
            className="text-sm font-bold text-card-foreground"
          >
            Booking reference (PNR)
          </label>
          <input
            id="pnr"
            type="text"
            placeholder="ABC123 OR 1234567890123"
            className="rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-shadow focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-2 w-full cursor-pointer rounded-lg bg-button py-4 text-base font-semibold text-white transition-colors hover:bg-button-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Retrieve Booking
        </button>
      </form>

      {/* Tip */}
      <div className="mt-6 rounded-lg border border-border-light bg-tip-bg px-5 py-4">
        <p className="text-sm text-foreground/80 leading-relaxed">
          <span className="font-semibold text-tip-text">Tip:</span>{" "}
          Online check-in opens 24 hours before departure and closes 2 hours before departure.
        </p>
      </div>
    </div>
  );
}
