import FloatingDock from "@/components/FloatingDock";
import HeroTerminal from "@/components/HeroTerminal";
import ImpactBento from "@/components/ImpactBento";
import ProjectsSection from "@/components/ProjectsSection";
import PhilosophySection from "@/components/PhilosophySection";
import TechStackCloud from "@/components/TechStackCloud";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloatingDock />
      <HeroTerminal />
      <ImpactBento />
      <ProjectsSection />
      <PhilosophySection />
      <TechStackCloud />
      <ContactFooter />

    </div>
  );
};

export default Index;
