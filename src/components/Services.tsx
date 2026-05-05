import fade from "@/assets/service-fade.jpg";
import shave from "@/assets/service-shave.jpg";
import beard from "@/assets/service-beard.jpg";

const services = [
  { name: "Fade Cut", desc: "Razor-sharp fades, sculpted to your face shape.", img: fade },
  { name: "Hot Towel Shave", desc: "Steamed towels, premium oils, glass-smooth finish.", img: shave },
  { name: "Beard Conditioning", desc: "Deep conditioning rituals for a softer, fuller beard.", img: beard },
  { name: "Beard Dyeing", desc: "Natural-looking colour that lasts.", img: beard },
  { name: "Beard Trim & Maintenance", desc: "Lined, shaped and detailed to perfection.", img: beard },
  { name: "Hair Colouring", desc: "Premium dyes, tailored tones, expert application.", img: fade },
  { name: "Hair Shape-Up", desc: "Crisp lines and edges that frame the face.", img: fade },
  { name: "Head Shave", desc: "Smooth, clean, polished — the executive finish.", img: shave },
  { name: "Straight Razor Shave", desc: "The traditional ritual, refined.", img: shave },
  { name: "Eyebrow Trimming", desc: "Subtle definition that completes the look.", img: beard },
  { name: "Children's Cuts", desc: "Premium grooming, gentle for the little gents.", img: fade },
  { name: "Men's Manicures", desc: "Polished hands speak before you do.", img: shave },
  { name: "Shampoo & Conditioning", desc: "Salon-grade cleansing and treatment.", img: fade },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-onyx relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.78_0.12_80/0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">Our Craft</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Signature <span className="text-gradient-gold italic">services</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every service is a ritual — designed to elevate your presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <a
              key={s.name}
              href="#book"
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80">0{(i % 9) + 1}</div>
                <h3 className="font-display text-2xl mt-1 group-hover:text-gradient-gold transition-all">
                  {s.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500">
                  {s.desc}
                </p>
              </div>
              <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-gold/0 group-hover:bg-gold grid place-items-center transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground opacity-0 group-hover:opacity-100">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
