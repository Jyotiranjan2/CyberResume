export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground">
            Dedicated to securing digital infrastructure and protecting organizations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <img
              src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Cybersecurity professional workspace with multiple monitors"
              className="rounded-xl shadow-2xl w-full"
              data-testid="img-workspace"
            />
          </div>

          <div className="animate-slideInRight">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Cybersecurity Analyst & Security Researcher
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate cybersecurity professional with a strong foundation in network security,
              ethical hacking, and information security management. Through practical experience and
              industry certifications, I've developed expertise in threat analysis, vulnerability assessment,
              and security operations.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="terminal-card hanging-card text-center p-4 rounded-lg" style={{animationDelay: "0.2s"}}>
                <div className="flex items-center justify-center mb-2">
                  <div className="flex space-x-1 mr-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">stats.sh</span>
                </div>
                <div className="text-3xl font-bold text-accent mb-2 animate-glow" data-testid="text-certifications-count">
                  8+
                </div>
                <div className="text-muted-foreground font-mono text-sm">$ echo "Certifications"</div>
              </div>
              <div className="terminal-card hanging-card text-center p-4 rounded-lg" style={{animationDelay: "0.4s"}}>
                <div className="flex items-center justify-center mb-2">
                  <div className="flex space-x-1 mr-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">exp.sh</span>
                </div>
                <div className="text-3xl font-bold text-primary mb-2 animate-glow" data-testid="text-experience-years">
                  2+
                </div>
                <div className="text-muted-foreground font-mono text-sm">$ echo "Years Learning"</div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/jyoti-ranjan-barik-131712284/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 text-2xl transition-colors duration-300"
                data-testid="link-linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Jyotiranjan2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground text-2xl transition-colors duration-300"
                data-testid="link-github"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://tryhackme.com/p/Darkyhunter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 text-2xl transition-colors duration-300"
                data-testid="link-tryhackme"
              >
                <i className="fas fa-flag"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
