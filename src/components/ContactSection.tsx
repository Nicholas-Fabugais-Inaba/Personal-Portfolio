import { Linkedin, Instagram, Mail, Github } from "lucide-react";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nicholas-fabugais-inaba/" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/nicholas.fi" },
  { icon: Mail, label: "Email", href: "mailto:nfabugaisinaba@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/Nicholas-Fabugais-Inaba" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Let's Connect
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
          I'd love to hear from you! Whether you want to chat about travel, share recommendations, or just say hello, feel free to reach out.
        </p>

        <div className="flex justify-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="glass w-14 h-14 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
            >
              <s.icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
