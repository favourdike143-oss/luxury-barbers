import { useState } from "react";
import g10 from "@/assets/gallery-10.jpg";
import g17 from "@/assets/gallery-17.jpg";
import gStorefront from "@/assets/about-storefront.webp";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.webp";
import g9 from "@/assets/gallery-9.webp";
import g11 from "@/assets/gallery-11.jpg";
import g12 from "@/assets/gallery-12.jpg";
import g13 from "@/assets/gallery-13.jpg";
import g14 from "@/assets/gallery-14.webp";
import g15 from "@/assets/gallery-15.jpg";
import g16 from "@/assets/gallery-16.jpg";
import n1 from "@/assets/IMG-20260730-WA0001.jpg.asset.json";
import n2 from "@/assets/IMG-20260730-WA0002.jpg.asset.json";
import n3 from "@/assets/IMG-20260730-WA0003.jpg.asset.json";
import n6 from "@/assets/IMG-20260730-WA0006.jpg.asset.json";
import n8 from "@/assets/IMG-20260730-WA0008.jpg.asset.json";
import n12 from "@/assets/IMG-20260730-WA0012.jpg.asset.json";
import n13 from "@/assets/IMG-20260730-WA0013.jpg.asset.json";

const primary = [n1.url, n2.url, n13.url, g10, g17, gStorefront, g1, g2, g3, g4, g5, g6];
const more = [n8.url, n3.url, n12.url, n6.url, g7, g8, g9, g11, g12, g13, g14, g15, g16];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  const renderGrid = (imgs: string[]) => (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {imgs.map((src, i) => (
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
  );

  return (
    <section id="gallery" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            LB <span className="text-gradient-gold italic">Live Showcase</span>
          </h2>
        </div>
        {renderGrid(primary)}

        <div className="text-center max-w-2xl mx-auto mt-20 mb-14">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">More</p>
          <h3 className="text-3xl md:text-4xl font-bold">
            More <span className="text-gradient-gold italic">Live Showcase</span>
          </h3>
        </div>
        {renderGrid(more)}
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
