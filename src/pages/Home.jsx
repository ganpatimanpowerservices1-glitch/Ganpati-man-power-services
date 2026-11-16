import Hero from "../components/sections/Hero";
import StatsBar from "../components/sections/StatsBar";
import TrustStrip from "../components/sections/TrustStrip";
import ServiceTabs from "../components/sections/ServiceTabs";
import StaffingCalculator from "../components/ui/StaffingCalculator";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Timeline from "../components/sections/Timeline";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import AreasServed from "../components/sections/AreasServed";
import FAQ from "../components/sections/FAQ";
import CTABanner from "../components/sections/CTABanner";
import { useSeo } from "../utils/seo";
import { siteConfig } from "../data/siteConfig";

export default function Home() {
  useSeo({
    title: `${siteConfig.name} | Verified Staffing & Manpower in ${siteConfig.city}`,
    description: `${siteConfig.name} supplies trained housekeeping, police-verified security guards, licensed chauffeurs, hospital ward staff and office support across ${siteConfig.city}. 24-48h deployment.`,
  });

  return (
    <main>
      <Hero />
      <StatsBar />
      <TrustStrip />
      <ServiceTabs />
      <StaffingCalculator />
      <WhyChooseUs />
      <Timeline />
      <TestimonialsSection />
      <AreasServed />
      <FAQ />
      <CTABanner />
    </main>
  );
}