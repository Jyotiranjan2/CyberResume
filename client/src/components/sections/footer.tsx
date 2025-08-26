export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold gradient-text">
              Jyoti Ranjan Barik
            </span>
            <p className="text-muted-foreground">Cybersecurity Professional</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/jyoti-ranjan-barik-131712284/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              data-testid="footer-linkedin"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://github.com/Jyotiranjan2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              data-testid="footer-github"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://tryhackme.com/p/Darkyhunter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              data-testid="footer-tryhackme"
            >
              <i className="fas fa-flag text-xl"></i>
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground">
            &copy; 2024 Jyoti Ranjan Barik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
