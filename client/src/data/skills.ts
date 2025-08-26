export interface Skill {
  name: string;
  category: string;
  icon: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export const skills: Skill[] = [
  // Security Tools
  { 
    name: "Wazuh", 
    category: "Security Tools", 
    icon: "fas fa-shield-alt", 
    description: "SIEM & Threat Detection",
    bgColor: "bg-gradient-to-br from-red-500 to-red-700",
    iconColor: "text-white"
  },
  { 
    name: "Nessus", 
    category: "Security Tools", 
    icon: "fas fa-search", 
    description: "Vulnerability Scanner",
    bgColor: "bg-gradient-to-br from-orange-500 to-orange-700",
    iconColor: "text-white"
  },
  { 
    name: "Burp Suite", 
    category: "Security Tools", 
    icon: "fas fa-tools", 
    description: "Web Security Testing",
    bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
    iconColor: "text-white"
  },
  { 
    name: "Metasploit", 
    category: "Security Tools", 
    icon: "fas fa-hammer", 
    description: "Penetration Testing",
    bgColor: "bg-gradient-to-br from-gray-700 to-gray-900",
    iconColor: "text-white"
  },
  { 
    name: "Wireshark", 
    category: "Security Tools", 
    icon: "fas fa-network-wired", 
    description: "Network Analysis",
    bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
    iconColor: "text-white"
  },
  { 
    name: "Elastic Stack", 
    category: "Security Tools", 
    icon: "fas fa-layer-group", 
    description: "Log Analysis & SIEM",
    bgColor: "bg-gradient-to-br from-yellow-500 to-yellow-700",
    iconColor: "text-white"
  },
  
  // Programming Languages
  { 
    name: "Python", 
    category: "Programming", 
    icon: "fab fa-python", 
    description: "Security Automation",
    bgColor: "bg-gradient-to-br from-green-500 to-green-700",
    iconColor: "text-white"
  },
  { 
    name: "Bash Scripting", 
    category: "Programming", 
    icon: "fas fa-terminal", 
    description: "System Automation",
    bgColor: "bg-gradient-to-br from-gray-600 to-gray-800",
    iconColor: "text-white"
  },
  { 
    name: "PowerShell", 
    category: "Programming", 
    icon: "fas fa-code", 
    description: "Windows Security",
    bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
    iconColor: "text-white"
  },
  { 
    name: "SQL", 
    category: "Programming", 
    icon: "fas fa-database", 
    description: "Database Security",
    bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-700",
    iconColor: "text-white"
  },
  
  // Operating Systems
  { 
    name: "Kali Linux", 
    category: "Operating Systems", 
    icon: "fab fa-linux", 
    description: "Penetration Testing OS",
    bgColor: "bg-gradient-to-br from-green-600 to-green-800",
    iconColor: "text-white"
  },
  { 
    name: "Ubuntu", 
    category: "Operating Systems", 
    icon: "fab fa-ubuntu", 
    description: "Server Administration",
    bgColor: "bg-gradient-to-br from-orange-600 to-orange-800",
    iconColor: "text-white"
  },
  { 
    name: "Windows Server", 
    category: "Operating Systems", 
    icon: "fab fa-windows", 
    description: "Enterprise Security",
    bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
    iconColor: "text-white"
  },
  
  // Cybersecurity Domains
  { 
    name: "Penetration Testing", 
    category: "Cybersecurity", 
    icon: "fas fa-bug", 
    description: "Ethical Hacking",
    bgColor: "bg-gradient-to-br from-red-600 to-red-800",
    iconColor: "text-white"
  },
  { 
    name: "Digital Forensics", 
    category: "Cybersecurity", 
    icon: "fas fa-fingerprint", 
    description: "Evidence Analysis",
    bgColor: "bg-gradient-to-br from-purple-600 to-purple-800",
    iconColor: "text-white"
  },
  { 
    name: "Malware Analysis", 
    category: "Cybersecurity", 
    icon: "fas fa-virus", 
    description: "Threat Intelligence",
    bgColor: "bg-gradient-to-br from-red-500 to-red-700",
    iconColor: "text-white"
  },
  { 
    name: "Incident Response", 
    category: "Cybersecurity", 
    icon: "fas fa-exclamation-triangle", 
    description: "Security Operations",
    bgColor: "bg-gradient-to-br from-yellow-600 to-yellow-800",
    iconColor: "text-white"
  },
  { 
    name: "Network Security", 
    category: "Cybersecurity", 
    icon: "fas fa-network-wired", 
    description: "Infrastructure Protection",
    bgColor: "bg-gradient-to-br from-teal-500 to-teal-700",
    iconColor: "text-white"
  }
];
