"use client";

import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { WhatsappButton } from "./components/WhatsappButton";
import { SEO } from "./components/SEO";
import { homeStructuredData } from "./data/structured-data";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "products", "about", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col bg-background overflow-x-hidden">
      <SEO
        title="Hydraulic Brick Making Machine Manufacturer"
        description="Leading manufacturer of hydraulic brick making machines, fly ash brick machines, automatic production lines & vibration tables. High-quality construction equipment for efficient brick production in India."
        keywords="brick making machine, hydraulic brick machine, fly ash brick machine, automatic brick production machine, vibration table, brick making equipment, concrete block machine, construction machinery"
        structuredData={homeStructuredData}
      />
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

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

        {/* <section id="stats" className="scroll-mt-16">
          <StatsAndVideos />
        </section> */}

        <section id="contact" className="scroll-mt-16">
          <ContactSection />
        </section>
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  );
}
