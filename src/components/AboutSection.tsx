import { Globe, Zap, MapPin } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const getAge = () => {
  const birth = new Date(2002, 2, 28); // March 28, 2002
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

const stats = [
  { icon: Globe, value: "15", label: "Countries Visited" },
  { icon: Zap, value: `${getAge()}`, label: "EXP Level" },
  { icon: MapPin, value: "🇨🇦 🇯🇵 🇵🇭", label: "Heritage" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Text + Stats */}
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              About Me
            </h2>

            <div className="space-y-5">
              <p className="text-base text-muted-foreground leading-relaxed">
                Hey, I'm Nick! A PM with a Software Engineering background, constantly learning about this little game I'd like to call life.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Aside from my professional life, I have a variety of passions in my personal life, including (but not limited to) traveling, music, the Toronto Maple Leafs, and Marvel!
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every day, I'm always learning something new about myself and this world that we live in, so here's to the many journeys that my life still has to offer...
              </p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-5 text-center space-y-2"
                >
                  <stat.icon className="mx-auto h-5 w-5 text-muted-foreground" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-body">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md w-full">
              <img
                src={aboutBg}
                alt="Nick with a deer in Nara, Japan"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
