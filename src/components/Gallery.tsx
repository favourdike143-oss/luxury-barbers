import { useState } from "react";
import g1 from "@/assets/hero-shave.jpg";
import g2 from "@/assets/client-fade.jpg";
import g3 from "@/assets/before-after.jpg";
import g4 from "@/assets/twists-top.jpg";
import g5 from "@/assets/celebrity-cut.jpg";
import g6 from "@/assets/service-fade.jpg";
import g7 from "@/assets/service-shave.jpg";
import g8 from "@/assets/service-beard.jpg";

const images = [g1, g2, g3, g4, g5, g6, g7, g8];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="gallery" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Precision in <span className="text-gradient-gold italic">every cut</span>
          </h2>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(src)}
              className="group block w-full overflow-hidden rounded-xl border border-border hover:border-gold/60 transition"
            >
              <img
                src={src}
                alt={`Luxury Barbers work ${i + 1}`}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-md grid place-items-center p-6 cursor-zoom-out"
          onClick={() => setActive(null)}
        >
          <img src={active} alt="Preview" className="max-h-[90vh] max-w-full rounded-2xl gold-border-glow" />
        </div>
      )}
    </section>
  );
}
