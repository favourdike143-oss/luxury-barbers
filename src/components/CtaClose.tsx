export function CtaClose() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-gold opacity-10" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
          Step into <span className="text-gradient-gold italic">confidence</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">
          The chair is waiting. The ritual is ready.
        </p>
        <a
          href="#book"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-10 py-4 text-primary-foreground font-medium hover:shadow-[0_10px_40px_-5px_oklch(0.78_0.12_80/0.6)] transition-all"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}
