import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Luxury Barbers logo" className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/40" />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide text-gradient-gold">Luxury Barbers</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">The best in town</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground/80 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#book"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
        >
          Book Now
        </a>
        <button
          aria-label="Menu"
          className="md:hidden text-gold"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden glass mt-3 mx-4 rounded-xl p-6 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/90 hover:text-gold">
              {l.label}
            </a>
          ))}
          <a href="#book" onClick={() => setOpen(false)} className="rounded-full bg-gold px-5 py-2.5 text-center text-primary-foreground font-medium">
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
