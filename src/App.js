import "./App.css";

import HeaderSection from "./components/HeaderSection";
import ProblemSection from "./components/ProblemSection";
import ServicesSection from "./components/ServicesSection";
import VisionSection from "./components/VisionSection";
import HelpSection from "./components/HelpSection";
import ExpectSection from "./components/ExpectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <HeaderSection />

      <main>
        <ProblemSection />
        <ServicesSection />
        <VisionSection />
        <HelpSection />
        <ExpectSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
