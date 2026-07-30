export function Location() {
  return (
    <section id="contact" className="section-padding bg-onyx">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">Visit Us</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Find us in <span className="text-gradient-gold italic">Lekki Phase 1</span>
          </h2>
          <div className="space-y-5 text-foreground/90">
            <div className="flex items-start gap-4">
              <span className="text-gold mt-1">◆</span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Address</div>
                <div className="mt-1">Luxury Barbers, Ezra Mall,<br />4 Adebayo Doherty Road,<br />Lekki Phase 1, Lagos, Nigeria</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-gold mt-1">◆</span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone / WhatsApp</div>
                <a href="tel:+2348066813392" className="mt-1 block hover:text-gold transition">0806 681 3392</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-gold mt-1">◆</span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
                <div className="mt-1">Mon – Sat · 9:00 AM – 9:00 PM<br />Sun · 12:00 PM – 7:00 PM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden gold-border-glow aspect-[4/3]">
          <iframe
            title="Luxury Barbers Location"
            src="https://www.google.com/maps?q=Ezra+Mall,+4+Adebayo+Doherty+Rd,+Lekki+Phase+1,+Lagos&output=embed"
            className="w-full h-full border-0 grayscale-[40%] contrast-110"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
