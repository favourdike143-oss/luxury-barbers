import { useState } from "react";
import { whatsappLink } from "./WhatsAppFab";

const services = [
  "Fade Cut", "Hair Colouring", "Beard Conditioning", "Beard Dyeing", "Beard Maintenance",
  "Beard Trim", "Children's Cut", "Eyebrow Trimming", "Hair Shape-Up", "Head Shave",
  "Hot Towel Shave", "Men's Manicure", "Shampoo & Conditioning", "Straight Razor Shave",
];

export function BookForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim().slice(0, 80);
    const cleanPhone = phone.trim().slice(0, 30);
    if (!cleanName || !cleanPhone) return;
    const msg = `Hello Luxury Barbers, I'd like to book a grooming session. My name is ${cleanName} (${cleanPhone}) and I'm interested in ${service}.`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="book" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.12_80/0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">Reserve Your Chair</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Book your <span className="text-gradient-gold italic">experience</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fill in the details — we'll continue the conversation on WhatsApp.
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="glass rounded-2xl p-8 md:p-10 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
              <input
                required
                maxLength={80}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full bg-input/40 border border-border focus:border-gold rounded-lg px-4 py-3 outline-none transition"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
              <input
                required
                maxLength={30}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                className="mt-2 w-full bg-input/40 border border-border focus:border-gold rounded-lg px-4 py-3 outline-none transition"
                placeholder="0806 000 0000"
              />
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Service</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="mt-2 w-full bg-input/40 border border-border focus:border-gold rounded-lg px-4 py-3 outline-none transition"
            >
              {services.map((s) => <option key={s} className="bg-card">{s}</option>)}
            </select>
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-primary-foreground font-medium hover:shadow-[0_10px_40px_-5px_oklch(0.78_0.12_80/0.6)] transition-all"
          >
            Continue on WhatsApp
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163A11.867 11.867 0 0 1 .002 11.86C0 5.32 5.335 0 11.892 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.54-5.337 11.86-11.893 11.86a11.9 11.9 0 0 1-5.683-1.448L.057 24z"/></svg>
          </button>
        </form>
      </div>
    </section>
  );
}
