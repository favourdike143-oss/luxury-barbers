import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { BookForm } from "@/components/BookForm";
import { CtaClose } from "@/components/CtaClose";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxury Barbers — Premium Grooming in Lekki Phase 1, Lagos" },
      { name: "description", content: "Luxury Barbers (LB): premium haircuts, hot towel shaves and beard grooming for the modern elite man. Lekki Phase 1, Lagos. Book your chair." },
      { property: "og:title", content: "Luxury Barbers — The Best In Town" },
      { property: "og:description", content: "Premium grooming experience for kings. Lekki Phase 1, Lagos." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyUs />
      <Testimonials />
      <Location />
      <BookForm />
      <CtaClose />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
