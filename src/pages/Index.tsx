import { useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { PainPointsSection } from "@/components/landing/PainPointsSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { OutcomeSection } from "@/components/landing/OutcomeSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ServiceGrid } from "@/components/ServiceGrid";

const Index = () => {
  useEffect(() => {
    // Update meta tags
    document.title = "CTRL Tech | IT & AI Automation Services for Small Business";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "CTRL Tech combines IT expertise with AI automation to eliminate inefficiencies and drive growth for your businesse.");
    }

    // Add schema markup
    const schema = {
      "@context": "https://schema.org",
      "@type": "ITService",
      "name": "CTRL Tech",
      "description": "IT and AI Automation Services for Small Business",
      "areaServed": "United States",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Automation",
              "description": "Custom AI automation solutions for small businesses"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IT Support",
              "description": "24/7 IT support and monitoring"
            }
          }
        ]
      }
    };

    const scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.text = JSON.stringify(schema);
    document.head.appendChild(scriptTag);

    return () => {
      document.head.removeChild(scriptTag);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <OutcomeSection />
        <SolutionSection />
        <ServiceGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;