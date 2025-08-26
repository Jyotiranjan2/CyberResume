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

        <div className="max-w-4xl mx-auto">
          <div className="animate-fadeInUp text-center">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Cybersecurity Analyst & Security Researcher
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Final year Computer Science Engineering student at GIET University with a passion for cybersecurity.
              Research intern at NIT Rourkela, specializing in Python application security and automated vulnerability
              detection. Through hands-on projects and industry certifications, I'm developing expertise in malware
              analysis, ethical hacking, and security tool development as an aspiring cybersecurity enthusiast.
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
                  3+
                </div>
                <div className="text-muted-foreground font-mono text-sm">$ echo "Projects Completed"</div>
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
