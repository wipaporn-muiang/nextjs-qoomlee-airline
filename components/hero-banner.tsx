export default function HeroBanner() {
  return (
    <section
      className="px-6 py-14 text-center md:py-[72px]"
      style={{
        background: "linear-gradient(to right, var(--color-hero-from), var(--color-hero-to))",
      }}
    >
      <h1 className="text-3xl font-bold text-white md:text-[42px] md:leading-tight tracking-tight">
        Online Check-in
      </h1>
      <p className="mt-3 text-base text-white/90 md:text-lg">
        Fly Smart. Fly Qoomlee.
      </p>
      <p className="mt-2 text-sm text-white/60">
        Check in online and save time at the airport
      </p>
    </section>
  );
}
