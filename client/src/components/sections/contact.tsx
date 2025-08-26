export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Let's Connect</h2>
          <p className="text-xl text-muted-foreground">
            Ready to secure your organization's digital future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm actively seeking opportunities in cybersecurity roles where I can apply my knowledge
              and continue growing in the field. Let's discuss how I can contribute to your security team.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <i className="fab fa-linkedin text-primary-foreground text-xl"></i>
                </div>
                <div>
                  <p className="text-muted-foreground">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/jyoti-ranjan-barik-131712284/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors duration-300"
                    data-testid="contact-linkedin"
                  >
                    Connect with me professionally
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mr-4">
                  <i className="fab fa-github text-foreground text-xl"></i>
                </div>
                <div>
                  <p className="text-muted-foreground">GitHub</p>
                  <a
                    href="https://github.com/Jyotiranjan2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    data-testid="contact-github"
                  >
                    View my projects and contributions
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-flag text-accent-foreground text-xl"></i>
                </div>
                <div>
                  <p className="text-muted-foreground">TryHackMe</p>
                  <a
                    href="https://tryhackme.com/p/Darkyhunter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors duration-300"
                    data-testid="contact-tryhackme"
                  >
                    Check my cybersecurity challenges
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="terminal-card hanging-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Academic Testimonials</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <blockquote className="text-muted-foreground italic mb-2">
                  "Jyoti demonstrates exceptional aptitude in cybersecurity research and has shown remarkable dedication to understanding complex security frameworks during his internship at NIT Rourkela."
                </blockquote>
                <cite className="text-primary font-semibold">- Dr. D.P. Mohapatra</cite>
                <p className="text-sm text-muted-foreground">Professor, NIT Rourkela</p>
              </div>
              
              <div className="border-l-4 border-accent pl-4">
                <blockquote className="text-muted-foreground italic mb-2">
                  "As President of the Robotics Science Club, Jyoti has shown outstanding leadership skills and technical expertise in robotics and automation systems."
                </blockquote>
                <cite className="text-accent font-semibold">- Ashish Tiwary</cite>
                <p className="text-sm text-muted-foreground">Assistant Professor & Head of SARS Club, GIET University Gunupur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
