export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  technologies: string[];
  category: string;
  icon: string;
  iconBg: string;
}

export const projects: Project[] = [
  {
    id: "malware-platform",
    title: "Malware Identification Sharing Platform",
    year: "2024",
    description: "Developed a dashboard for static-level vulnerability identification using Wazuh agents, enabling enhanced threat detection and compliance.",
    technologies: ["Python", "Bash", "Wazuh"],
    category: "Cybersecurity",
    icon: "fas fa-bug",
    iconBg: "bg-red-600",
  },
  {
    id: "python-vulnerabilities",
    title: "Software Vulnerabilities in Open Source Python Program",
    year: "2024", 
    description: "Designed a tool that analyzes an open-source Python program for vulnerabilities using Abstract Syntax Trees (AST) and Control Flow Graphs (CFG), providing insights into potential security flaws.",
    technologies: ["Python", "AST", "CFG"],
    category: "Security Analysis",
    icon: "fas fa-code",
    iconBg: "bg-blue-600",
  },
  {
    id: "smart-agriculture",
    title: "Smart Agriculture Monitoring Network",
    year: "2024",
    description: "Headed the design of the SAMIN Pole for Smart Agriculture Monitoring Network in the Smart India Hackathon 2024. The system monitors soil conditions, weather, and crop health to optimize farming practices.",
    technologies: ["Python", "IoT", "Embedded Systems"],
    category: "IoT & Agriculture",
    icon: "fas fa-seedling",
    iconBg: "bg-green-600",
  }
];