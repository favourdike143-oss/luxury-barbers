const pillars = [
  { t: "Precision Craftsmanship", d: "Every line, fade and trim executed with millimetre accuracy.", i: "✂" },
  { t: "Premium Experience", d: "From the moment you arrive, you're in a private members' lounge.", i: "♛" },
  { t: "Skilled Master Barbers", d: "Years of expertise on the most discerning heads in Lagos.", i: "★" },
  { t: "Hygienic & Professional", d: "Sterilized tools, single-use blades, spotless ambience.", i: "✦" },
  { t: "Elite Ambience", d: "Black, gold, leather. Designed to upgrade how you feel.", i: "◆" },
];

export function WhyUs() {
  return (
    <section id="why" className="section-padding bg-onyx">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">Why Luxury Barbers</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for the <span className="text-gradient-gold italic">few</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((p) => (
            <div
              key={p.t}
              className="group relative rounded-2xl border border-border bg-card p-7 hover:border-gold/50 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="text-3xl text-gold mb-4">{p.i}</div>
              <h3 className="font-display text-xl mb-2">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              <div className="absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
