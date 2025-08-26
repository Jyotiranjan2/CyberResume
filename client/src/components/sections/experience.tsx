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
                <div 
                  className="terminal-card hanging-card p-6 rounded-xl" 
                  data-testid={`experience-${experience.id}`}
                  style={{
                    animationDelay: `${index * 0.3}s`
                  }}
                >
                  {/* Terminal Header */}
                  <div className="flex items-center mb-4 pb-3 border-b border-border">
                    <div className="flex space-x-2 mr-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">
                      ~/experience/{experience.id}.log
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {experience.company}
                  </p>
                  
                  <div className="code-block text-sm mb-3">
                    <span className="text-cyber-green">$</span> <span className="text-foreground">cat project_summary.md</span><br/>
                    <span className="text-muted-foreground">{experience.description}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-background text-cyber-green px-3 py-1 rounded-full text-sm border border-border font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-accent font-mono">
                    Duration: {experience.duration}
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
