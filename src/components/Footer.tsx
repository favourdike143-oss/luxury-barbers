import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border bg-onyx">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="LB" className="h-10 w-10 rounded-full" />
            <div>
              <div className="font-display text-lg text-gradient-gold">Luxury Barbers</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">The best in town</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            A grooming sanctuary for the modern elite man. Lekki Phase 1, Lagos.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-gold mb-4">Visit</div>
          <p className="text-sm text-muted-foreground">No 4 Adebayo Doherty Road<br />Lekki Phase 1, Lagos</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-gold mb-4">Contact</div>
          <a href="tel:+2348066813392" className="block text-sm hover:text-gold">0806 681 3392</a>
          <a href="https://wa.me/2348066813392" className="block text-sm hover:text-gold mt-1">WhatsApp</a>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Luxury Barbers · Crafted Confidence
      </div>
    </footer>
  );
}
