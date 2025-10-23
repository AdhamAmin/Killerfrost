import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Availability from "@/components/Availability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingElements />
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Portfolio />
      <Testimonials />
      <Availability />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
