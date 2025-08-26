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
  }
];
