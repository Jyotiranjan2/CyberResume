export interface Certificate {
  id: string;
  title: string;
  shortTitle: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  icon: string;
  iconBg: string;
}

export const certificates: Certificate[] = [
  {
    id: "nse1",
    title: "Fortinet NSE 1 Network Security Associate",
    shortTitle: "Fortinet NSE 1",
    issuer: "Fortinet",
    date: "August 17, 2023",
    description: "Foundation level network security certification covering basic cybersecurity concepts and Fortinet security fabric fundamentals.",
    skills: ["Network Security Basics", "Fortinet Security Fabric", "Threat Landscape", "Security Fundamentals"],
    icon: "fas fa-shield-alt",
    iconBg: "bg-red-600",
  },
  {
    id: "nse2",
    title: "Fortinet NSE 2 Network Security Associate",
    shortTitle: "Fortinet NSE 2",
    issuer: "Fortinet",
    date: "August 19, 2023",
    description: "Advanced network security concepts and FortiGate firewall configuration fundamentals. Demonstrated expertise in network security associate level competencies.",
    skills: ["FortiGate Firewalls", "Network Security", "Security Policies", "Network Administration"],
    icon: "fas fa-shield-alt",
    iconBg: "bg-red-600",
  },
  {
    id: "slashmark",
    title: "Cyber Security Internship Completion Certificate", 
    shortTitle: "SlashMark Internship",
    issuer: "SlashMark × AICTE",
    date: "January 15 - April 15, 2024",
    description: "Successfully completed cybersecurity internship program conducted in collaboration with All India Council for Technical Education (AICTE).",
    skills: ["Cybersecurity Practices", "Practical Experience", "Industry Collaboration", "Technical Skills"],
    icon: "fas fa-graduation-cap",
    iconBg: "bg-blue-600",
  },
  {
    id: "google",
    title: "Google Foundations of Cybersecurity",
    shortTitle: "Google Cybersecurity",
    issuer: "Google × Coursera",
    date: "February 26, 2024",
    description: "Comprehensive foundation course in cybersecurity covering security frameworks, network security, and incident response fundamentals.",
    skills: ["Security Frameworks", "Network Security", "Incident Response", "Risk Management"],
    icon: "fab fa-google",
    iconBg: "bg-blue-500",
  },
  {
    id: "mastercard",
    title: "Mastercard Cybersecurity Job Simulation",
    shortTitle: "Mastercard Simulation",
    issuer: "Mastercard × Forage",
    date: "February 20, 2024",
    description: "Designed phishing email simulations and interpreted simulation results to enhance organizational security awareness and threat detection.",
    skills: ["Phishing Simulation", "Security Awareness", "Threat Analysis", "Email Security"],
    icon: "fas fa-credit-card",
    iconBg: "bg-red-500",
  },
  {
    id: "tata",
    title: "TATA Cybersecurity Analyst Job Simulation",
    shortTitle: "TATA Simulation",
    issuer: "TATA × Forage",
    date: "February 20, 2024", 
    description: "Completed practical cybersecurity tasks including IAM fundamentals, strategy assessment, crafting custom IAM solutions, and platform integration.",
    skills: ["IAM Fundamentals", "Strategy Assessment", "Custom Solutions", "Platform Integration"],
    icon: "fas fa-building",
    iconBg: "bg-blue-600",
  },
  {
    id: "udacity",
    title: "Foundation of Ethical Hacking",
    shortTitle: "Udacity Ethical Hacking",
    issuer: "Udacity",
    date: "January 15, 2025",
    description: "Comprehensive foundation course in ethical hacking methodologies, penetration testing fundamentals, and security assessment techniques.",
    skills: ["Ethical Hacking", "Penetration Testing", "Security Assessment", "Vulnerability Analysis"],
    icon: "fas fa-user-secret",
    iconBg: "bg-purple-600",
  },
  {
    id: "tryhackme",
    title: "TryHackMe Advent of Cyber 2024",
    shortTitle: "Advent of Cyber",
    issuer: "TryHackMe",
    date: "December 25, 2024",
    description: "Completed 24 cybersecurity challenges demonstrating proven understanding of cyber security fundamentals with consistency and continuous learning.",
    skills: ["Cyber Challenges", "Security Fundamentals", "Practical Skills", "Continuous Learning"],
    icon: "fas fa-flag",
    iconBg: "bg-green-600",
  }
];
