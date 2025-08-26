export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
  color: string;
  side: "left" | "right";
}

export const experiences: Experience[] = [
  {
    id: "nit-rourkela",
    title: "Research Intern in Cybersecurity",
    company: "NIT Rourkela",
    duration: "May 2024 - July 2024",
    description: "Developed tools for safeguarding Python applications from vulnerabilities and automated real-time vulnerability detection.",
    skills: ["Python", "Bash", "Wazuh", "Vulnerability Detection"],
    color: "bg-red-500",
    side: "left",
  },
  {
    id: "mastercard",
    title: "Cybersecurity Job Simulation",
    company: "Mastercard × Forage",
    duration: "February 2024",
    description: "Designed phishing email simulations and interpreted simulation results to enhance organizational security awareness.",
    skills: ["Phishing Simulation", "Security Awareness", "Threat Analysis"],
    color: "bg-blue-500",
    side: "right",
  },
  {
    id: "tata",
    title: "Cybersecurity Analyst Simulation", 
    company: "TATA × Forage",
    duration: "January - February 2024",
    description: "Implemented IAM fundamentals, conducted strategy assessments, and developed custom IAM solutions for enterprise security.",
    skills: ["IAM Implementation", "Strategy Assessment", "Enterprise Security"],
    color: "bg-emerald-500",
    side: "left",
  },
  {
    id: "slashmark",
    title: "Cybersecurity Internship",
    company: "SlashMark × AICTE",
    duration: "January - April 2024",
    description: "Completed comprehensive cybersecurity internship program focusing on practical security implementations and industry best practices.",
    skills: ["Cybersecurity Implementation", "Industry Best Practices", "Practical Security"],
    color: "bg-violet-500",
    side: "right",
  },
  {
    id: "udacity",
    title: "Ethical Hacking Foundation",
    company: "Udacity",
    duration: "January 2025",
    description: "Completed comprehensive ethical hacking training covering penetration testing methodologies and security assessment techniques.",
    skills: ["Ethical Hacking", "Penetration Testing", "Security Assessment"],
    color: "bg-yellow-500",
    side: "left",
  },
];
