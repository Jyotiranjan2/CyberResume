export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCertifications = () => {
    const element = document.getElementById("certifications");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-800 to-background">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-foreground">Jyoti Ranjan</span>
            <span className="block gradient-text">Barik</span>
          </h1>
          <p className="text-xl sm:text-2xl text-primary mb-6 font-medium">
            Cybersecurity Professional
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Passionate cybersecurity analyst with expertise in threat detection, vulnerability assessment,
            and security operations. Certified professional with hands-on experience in modern security frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 cyber-glow"
              data-testid="button-contact"
            >
              Get In Touch
            </button>
            <button
              onClick={scrollToCertifications}
              className="border border-accent hover:bg-accent text-accent hover:text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              data-testid="button-certifications"
            >
              View Certifications
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-slideInRight">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary cyber-glow">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                alt="Jyoti Ranjan Barik - Professional Headshot"
                className="w-full h-full object-cover"
                data-testid="img-profile"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center animate-pulse-slow">
              <i className="fas fa-shield-alt text-accent-foreground text-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
