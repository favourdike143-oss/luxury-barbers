import img from "@/assets/celebrity-cut.jpg";

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 gradient-gold opacity-20 blur-3xl rounded-full" />
          <img
            src={img}
            alt="Celebrity client at Luxury Barbers"
            className="relative rounded-2xl object-cover w-full aspect-[4/5] gold-border-glow"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-6 glass rounded-xl px-6 py-4">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Trusted by</div>
            <div className="font-display text-xl text-gradient-gold">Celebrities & Executives</div>
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">About LB</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Where presence is <span className="text-gradient-gold italic">crafted</span>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Luxury Barbers isn't a barbershop — it's a grooming sanctuary in the heart of Lekki Phase 1.
            We blend old-school craftsmanship with modern precision, serving the men who lead boardrooms, stages,
            and culture itself.
          </p>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Every fade is sculpted. Every beard, considered. Every visit, an upgrade to the man you walk in as.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Master Barbers", "Sterile Tools", "Private Lounge", "By Appointment"].map((t) => (
              <span key={t} className="text-xs uppercase tracking-widest border border-gold/30 text-gold px-4 py-2 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
