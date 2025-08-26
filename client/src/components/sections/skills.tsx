import { skills } from "@/data/skills";

export default function Skills() {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Technical Arsenal
          </h2>
          <p className="text-xl text-muted-foreground">
            Advanced cybersecurity tools and technologies
          </p>
        </div>

        {categories.map((category, categoryIndex) => {
          const categorySkills = skills.filter(skill => skill.category === category);
          
          return (
            <div key={category} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-primary text-center">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorySkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-105 hover:rotate-1"
                    style={{
                      animationDelay: `${(categoryIndex * categorySkills.length + index) * 0.1}s`
                    }}
                    data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {/* Flashy Background Card */}
                    <div className={`${skill.bgColor} p-6 h-full relative overflow-hidden`}>
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        <div className="absolute top-0 left-0 w-full h-full">
                          <div className="animate-pulse absolute top-2 right-2 w-2 h-2 bg-white/40 rounded-full"></div>
                          <div className="animate-ping absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300">
                            <i className={`${skill.icon} ${skill.iconColor} text-2xl animate-glow`}></i>
                          </div>
                        </div>
                        
                        {/* Skill Name */}
                        <h4 className="font-bold text-white text-xl text-center mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                          {skill.name}
                        </h4>
                        
                        {/* Description */}
                        <p className="text-white/90 text-center text-sm font-medium mb-4">
                          {skill.description}
                        </p>
                        
                        {/* Terminal-style command */}
                        <div className="bg-black/30 rounded-lg p-3 backdrop-blur-sm border border-white/20">
                          <div className="flex items-center mb-1">
                            <div className="flex space-x-1 mr-2">
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                          </div>
                          <div className="font-mono text-xs text-green-300">
                            <span className="text-green-400">$</span> <span className="text-white">./deploy {skill.name.toLowerCase().replace(/\s+/g, '_')}</span><br/>
                            <span className="text-gray-300 animate-pulse">✓ Ready for production</span>
                          </div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute top-2 left-2 w-1 h-1 bg-white/60 rounded-full animate-bounce"></div>
                        <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
                      </div>
                      
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        
        {/* Skills Summary */}
        <div className="text-center mt-16">
          <div className="terminal-card hanging-card p-8 rounded-xl inline-block">
            <div className="flex items-center mb-4 pb-3 border-b border-border">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-xs text-muted-foreground font-mono">
                ~/skills/summary.txt
              </span>
            </div>
            
            <div className="code-block text-sm">
              <span className="text-cyber-green">$</span> <span className="text-foreground">cat career_objective.md</span><br/>
              <span className="text-muted-foreground">
                <strong className="text-primary">Seeking:</strong> SOC Analyst • Junior Cybersecurity Analyst • Security Intern • Penetration Tester<br/>
                <strong className="text-accent">Specialization:</strong> CEH v13 Trained • Python Security Automation • Vulnerability Assessment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
