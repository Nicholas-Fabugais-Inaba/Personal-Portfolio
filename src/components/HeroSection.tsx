import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Cityscape at dusk"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 text-center px-6 animate-fade-up">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
          Nicholas Fabugais-
          <br />
          Inaba
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-body tracking-wide">
          Product Manager | World Explorer | Lifelong Learner
        </p>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 z-10 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
