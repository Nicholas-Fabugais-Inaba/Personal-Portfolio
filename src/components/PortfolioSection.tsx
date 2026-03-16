import { ExternalLink } from "lucide-react";
import aiAcademyPreview from "@/assets/portfolio/ai-academy-preview.jpg";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A showcase of things I've built, created, and been a part of.
          </p>
        </div>

        {/* AI Academy — featured layout */}
        <a
          href="https://ai-academy-learning.lovable.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer"
        >
          {/* Preview image */}
          <div className="relative h-64 md:h-full min-h-[320px] overflow-hidden">
            <img
              src={aiAcademyPreview}
              alt="AI Academy platform interface"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 card-overlay md:bg-gradient-to-r md:from-transparent md:to-card/40" />
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center space-y-5">
            <div className="flex items-center gap-3">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                AI Academy
              </h3>
              <ExternalLink
                size={18}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </div>

            <p className="text-sm font-body font-medium text-primary">
              Interactive AI Learning Platform
            </p>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Developed an interactive AI learning platform used by 80+ users across 5 countries, delivering structured learning modules on machine learning, large language models, and neural networks.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The platform includes real-time AI tutoring and interactive learning modules, enabling technical and non-technical users to understand complex AI concepts through guided explanations and practical examples.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI Academy is designed to make artificial intelligence accessible to a broader audience, allowing users to explore core concepts at their own pace through intuitive explanations and hands-on learning.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {["AI / ML", "Education", "Web App"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-body bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default PortfolioSection;
