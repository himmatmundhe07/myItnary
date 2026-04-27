import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ProblemStrip } from "@/components/landing/ProblemStrip";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeatureShowcase } from "@/components/landing/FeatureShowcase";
import { SafetyManifesto } from "@/components/landing/SafetyManifesto";
import { ExperienceDiscovery } from "@/components/landing/ExperienceDiscovery";
import { TravelerStories } from "@/components/landing/TravelerStories";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <ProblemStrip />
        <HowItWorks />
        <FeatureShowcase />
        <SafetyManifesto />
        <ExperienceDiscovery />
        <TravelerStories />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
