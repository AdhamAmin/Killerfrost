import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 inline-block">
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-primary to-accent animate-pulse" />
              <img 
                src={profileImg}
                alt="Profile"
                className="relative rounded-full w-full h-full object-cover border-4 border-background shadow-glow"
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            &lt;Full Stack Developer /&gt;
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Crafting Digital Experiences Through Code & Design
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Computer Engineering Student at AASTMT | Software Engineer | Video Editor | Graphic Designer | Competitive Swimmer
          </p>

          {/* Profession Tags */}
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            {['React & TypeScript', 'Node.js & Python', 'UI/UX Design', 'Video Production', 'Swimming Champion'].map((profession) => (
              <span 
                key={profession}
                className="px-6 py-3 rounded-full glass text-foreground hover:shadow-glow transition-all duration-300"
              >
                {profession}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('portfolio')}
              className="neumorphic hover:shadow-glow text-foreground hover:text-accent-foreground hover:bg-accent"
            >
              &lt; View Projects /&gt;
            </Button>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="neumorphic hover:shadow-glow text-foreground hover:text-accent-foreground hover:bg-accent"
            >
              &lt; Contact Me /&gt;
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-muted-foreground hover:text-accent transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
