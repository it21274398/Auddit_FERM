import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import TeamSection from "./components/TeamSection";
import ClientsSection from "./components/ClientsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import BusinessHours from "./components//BusinessHours";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
       <TeamSection />
      <ServicesSection />
      <WhyChooseUs />
      <ClientsSection />
      <AboutSection />
      <ContactSection />
      <BusinessHours />
      <Footer />
    </>
  );
}

export default App;
