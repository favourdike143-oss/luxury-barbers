import { useEffect, useState } from "react";

const items = [
  { n: "Tunde A.", r: "Lagos Executive", q: "The only place I trust with my image. Walk in tired, walk out boardroom-ready." },
  { n: "Kunle O.", r: "Recording Artist", q: "Sharp fades every single time. The ambience alone is worth the trip to Lekki." },
  { n: "Ibrahim S.", r: "Entrepreneur", q: "Hot towel shave is unreal. Feels like a private members' club, not a barbershop." },
  { n: "David M.", r: "Pro Footballer", q: "Master barbers. They understand precision the way athletes understand discipline." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Words from our <span className="text-gradient-gold italic">clients</span>
        </h2>
        <div className="relative min-h-[220px]">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ${
                idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div className="text-5xl text-gold/40 font-display mb-4">"</div>
              <p className="text-xl md:text-2xl font-display italic text-foreground/90 leading-relaxed">
                {item.q}
              </p>
              <div className="mt-8">
                <div className="font-medium text-gold">{item.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{item.r}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-2 bg-gold/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
