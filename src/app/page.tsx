import { Metadata } from "next";
import dynamic from "next/dynamic";
import SchemaMarkup from "@/components/SchemaMarkup";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

// Dynamically import below-the-fold components
const ProductsSection = dynamic(() => import("./components/ProductsSection"), { ssr: true });
const AboutSection = dynamic(() => import("./components/AboutSection"), { ssr: true });
const ContactSection = dynamic(() => import("./components/ContactSection"), { ssr: true });
const Footer = dynamic(() => import("./components/Footer"), { ssr: true });
const WhatsappButton = dynamic(() => import("./components/WhatsappButton").then(mod => mod.WhatsappButton), { ssr: false });

export const metadata: Metadata = {
  title: "Hydraulic Brick Making Machine Manufacturer | Vagheshwari Engineering Works",
  description: "Leading manufacturer of hydraulic brick making machines, fly ash brick machines, automatic brick making machines & vibration tables. High-quality construction equipment for efficient brick production in India.",
  keywords: [
    "bricks making machine",
    "paver block making machine",
    "fly ash brick machine",
    "hydraulic brick machine",
    "brick making machine india",
    "paver block machine india",
    "construction equipment india",
  ],
  openGraph: {
    title: "Hydraulic Brick Making Machine Manufacturer | Vagheshwari Engineering Works",
    description: "Leading manufacturer of hydraulic brick making machines, fly ash brick machines, automatic brick making machines & vibration tables. High-quality construction equipment for efficient brick production in India.",
    type: "website",
    images: [{ url: "/uploads/dcf8cef5-6848-48d2-ad46-0f38a0064c97.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydraulic Brick Making Machine Manufacturer | Vagheshwari Engineering Works",
    description: "Leading manufacturer of hydraulic brick making machines, fly ash brick machines, automatic brick making machines & vibration tables. High-quality construction equipment for efficient brick production in India.",
    images: ["/lovable-uploads/dcf8cef5-6848-48d2-ad46-0f38a0064c97.png"],
  }
};

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background overflow-x-hidden">
      <SchemaMarkup pageType="home" />
      <Navbar />

      <main className="flex-grow pt-8">
        <section id="home" className="scroll-mt-16">
          <HeroSection />
        </section>

        <section id="products" className="scroll-mt-16">
          <ProductsSection />
        </section>

        <section id="about" className="scroll-mt-16">
          <AboutSection />
        </section>

        <section id="contact" className="scroll-mt-16">
          <ContactSection />
        </section>
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  );
}
