const stats = [
  { value: "13", label: "Countries Visited" },
  { value: "23", label: "EXP Level" },
  { value: "🇨🇦🇯🇵🇵🇭", label: "Heritage" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-secondary-foreground leading-relaxed">
              Hey, I'm Nick! A PM with a Software Engineering background, constantly learning about this little game I'd like to call life.
            </p>
            <p className="text-lg text-secondary-foreground leading-relaxed">
              Aside from my professional life, I have a variety of passions in my personal life, including (but not limited to) traveling, music, the Toronto Maple Leafs, and Marvel!
            </p>
            <p className="text-lg text-secondary-foreground leading-relaxed">
              Every day, I'm always learning something new about myself and this world that we live in, so here's to the many journeys that my life still has to offer...
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient font-display mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
