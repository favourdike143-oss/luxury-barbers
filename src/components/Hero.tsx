import heroBg from "@/assets/hero-bg.jpg";
import { whatsappLink } from "./WhatsAppFab";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Luxury barbershop interior"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.08_0.005_60)_75%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20 text-center">
        <p className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold/80 mb-8">
          <span className="h-px w-10 bg-gold/60" /> Lekki Phase 1, Lagos <span className="h-px w-10 bg-gold/60" />
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]">
          Luxury Grooming.<br />
          <span className="text-gradient-gold italic font-medium">Crafted for Kings</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Premium haircuts, beard care and grooming rituals for the modern elite man.
          More than a haircut — an experience.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#book"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-primary-foreground font-medium hover:shadow-[0_10px_40px_-5px_oklch(0.78_0.12_80/0.5)] transition-all"
          >
            Book Appointment
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-8 py-4 text-foreground hover:bg-gold/10 transition"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
          {[
            { n: "10+", l: "Years Crafting" },
            { n: "5K+", l: "Elite Clients" },
            { n: "14", l: "Signature Services" },
          ].map((s) => (
            <div key={s.l} className="border-l first:border-l-0 border-gold/20 px-4">
              <div className="font-display text-3xl text-gradient-gold">{s.n}</div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
