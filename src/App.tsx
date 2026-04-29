import Navbar from "./components/sections/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ProblemSection from "./components/sections/ProblemSection";
import SolutionSection from "./components/sections/SolutionSection";
import ServicesSection from "./components/sections/ServicesSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import TestimoniSection from "./components/sections/TestimoniSection";
import PricingSection from "./components/sections/PricingSection";
import UrgencySection from "./components/sections/UrgencySection";
import FAQSection from "./components/sections/FAQSection";
import FooterSection from "./components/sections/FooterSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  return (
    <div className="font-body bg-bg text-text">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <HowItWorksSection />
        <TestimoniSection />
        <PricingSection />
        <UrgencySection />
        <FAQSection />
      </main>
      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;