import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Innovative solutions in cybersecurity and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="terminal-card hanging-card rounded-xl p-6"
              style={{
                animationDelay: `${index * 0.3}s`
              }}
              data-testid={`project-${project.id}`}
            >
              {/* Terminal Header */}
              <div className="flex items-center mb-4 pb-3 border-b border-border">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  ~/projects/{project.id}.md
                </span>
              </div>
              
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${project.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                  <i className={`${project.icon} text-white text-xl`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.category} • {project.year}</p>
                </div>
              </div>
              
              <div className="code-block text-sm mb-4">
                <span className="text-cyber-green">$</span> <span className="text-foreground">cat README.md</span><br/>
                <span className="text-muted-foreground">{project.description}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-background text-cyber-green px-3 py-1 rounded-full text-xs border border-border font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}