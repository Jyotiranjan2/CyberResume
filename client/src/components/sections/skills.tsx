import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/skills";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const leftSkills = skills.slice(0, 4);
  const rightSkills = skills.slice(4);

  return (
    <section id="skills" className="py-20 bg-background" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-xl text-muted-foreground">
            Expertise across cybersecurity domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {leftSkills.map((skill, index) => (
              <div key={skill.name} className="skill-item">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-primary" data-testid={`skill-percentage-${index}`}>
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className={`skill-bar bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-2000`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                    data-testid={`skill-bar-${index}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {rightSkills.map((skill, index) => (
              <div key={skill.name} className="skill-item">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-primary" data-testid={`skill-percentage-${index + 4}`}>
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className={`skill-bar bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-2000`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${(index + 4) * 200}ms`
                    }}
                    data-testid={`skill-bar-${index + 4}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
