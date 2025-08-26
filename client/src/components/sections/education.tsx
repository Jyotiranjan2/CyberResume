import { education, coursework } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Educational Background
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic journey and specialized coursework
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary">Academic History</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="terminal-card hanging-card p-6 rounded-xl"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                  data-testid={`education-${edu.id}`}
                >
                  {/* Terminal Header */}
                  <div className="flex items-center mb-4 pb-3 border-b border-border">
                    <div className="flex space-x-2 mr-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">
                      ~/education/{edu.id}.txt
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-foreground mb-2">{edu.degree}</h4>
                    <p className="text-primary font-semibold">{edu.institution}, {edu.location}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-muted-foreground text-sm">{edu.duration}</span>
                      <span className="text-accent font-mono text-sm">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coursework */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary">Relevant Coursework</h3>
            <div className="space-y-6">
              {coursework.map((category, index) => (
                <div
                  key={category.category}
                  className="terminal-card hanging-card p-6 rounded-xl"
                  style={{
                    animationDelay: `${(index + 3) * 0.2}s`
                  }}
                  data-testid={`coursework-${index}`}
                >
                  {/* Terminal Header */}
                  <div className="flex items-center mb-4 pb-3 border-b border-border">
                    <div className="flex space-x-2 mr-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">
                      ~/coursework/{category.category.toLowerCase().replace(' ', '_')}.list
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-foreground mb-4">{category.category}</h4>
                  <div className="code-block text-sm">
                    <span className="text-cyber-green">$</span> <span className="text-foreground">ls -la courses/</span><br/>
                    {category.courses.map((course, courseIndex) => (
                      <div key={course} className="text-muted-foreground">
                        <span className="text-cyber-green">→</span> {course}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}