import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            Practical learning through simulations and projects
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary"></div>

          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative flex items-center mb-12 ${
                experience.side === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${experience.color} rounded-full border-4 border-background`}></div>
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                experience.side === "left" ? "md:pr-8" : "md:pl-8"
              }`}>
                <div className="bg-secondary p-6 rounded-xl border border-border" data-testid={`experience-${experience.id}`}>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {experience.company}
                  </p>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-background text-foreground px-3 py-1 rounded-full text-sm border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-accent font-medium">
                    {experience.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
