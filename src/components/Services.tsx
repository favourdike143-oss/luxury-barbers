const services = [
  { name: "Fade Cut", desc: "Razor-sharp fades, sculpted to your face shape." },
  { name: "Hot Towel Shave", desc: "Steamed towels, premium oils, glass-smooth finish." },
  { name: "Beard Conditioning", desc: "Deep conditioning rituals for a softer, fuller beard." },
  { name: "Beard Dyeing", desc: "Natural-looking colour that lasts." },
  { name: "Beard Trim & Maintenance", desc: "Lined, shaped and detailed to perfection." },
  { name: "Hair Colouring", desc: "Premium dyes, tailored tones, expert application." },
  { name: "Hair Shape-Up", desc: "Crisp lines and edges that frame the face." },
  { name: "Head Shave", desc: "Smooth, clean, polished — the executive finish." },
  { name: "Straight Razor Shave", desc: "The traditional ritual, refined." },
  { name: "Eyebrow Trimming", desc: "Subtle definition that completes the look." },
  { name: "Children's Cuts", desc: "Premium grooming, gentle for the little gents." },
  { name: "Men's Manicure and Pedicure", desc: "Polished hands and feet speak before you do." },
  { name: "Shampoo & Conditioning", desc: "Salon-grade cleansing and treatment." },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-onyx relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.78_0.12_80/0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">Our Craft</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Signature <span className="text-gradient-gold italic">services</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every service is a ritual — designed to elevate your presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="group glass rounded-2xl p-6 flex flex-col justify-between hover:border-gold/60 transition-all duration-500"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80">0{(i % 9) + 1}</div>
                <h3 className="font-display text-2xl mt-2 group-hover:text-gradient-gold transition-all">
                  {s.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
              </div>
              <a
                href="#book"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-xs uppercase tracking-widest text-gold hover:bg-gold hover:text-primary-foreground transition-all"
              >
                Book this service
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
