import { useState } from "react";
import { ExternalLink } from "lucide-react";
import aiAcademyPreview from "@/assets/portfolio/ai-academy-preview.jpg";

type Category = "All" | "Projects" | "UGC" | "Brand Deals";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: Category;
  image: string;
  link?: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "ai-academy",
    title: "AI Academy",
    description:
      "An interactive learning platform to master machine learning, understand LLMs, and build secure AI systems — from complete beginner to confident builder.",
    category: "Projects",
    image: aiAcademyPreview,
    link: "https://ai-academy-learning.lovable.app/",
    tags: ["AI / ML", "Education", "Web App"],
  },
];

const categories: Category[] = ["All", "Projects", "UGC", "Brand Deals"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((i) => i.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Projects, collaborations, and creative work I've been a part of.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-body font-medium px-4 py-2 rounded-full transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer block"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 card-overlay" />
                <span className="absolute top-4 right-4 text-xs font-body font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  {item.link && (
                    <ExternalLink
                      size={16}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
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
          ))}

          {/* Empty state for categories with no items */}
          {filtered.length === 0 && (
            <div className="sm:col-span-2 lg:col-span-3 py-16 text-center">
              <p className="text-muted-foreground text-lg">
                Nothing here yet — stay tuned!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
