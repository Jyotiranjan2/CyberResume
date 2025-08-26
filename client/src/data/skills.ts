export interface Skill {
  name: string;
  level: number;
  color: string;
}

export const skills: Skill[] = [
  {
    name: "Network Security",
    level: 90,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Ethical Hacking",
    level: 85,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Vulnerability Assessment",
    level: 88,
    color: "from-violet-500 to-violet-600",
  },
  {
    name: "Information Security",
    level: 92,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Incident Response",
    level: 82,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Risk Assessment",
    level: 86,
    color: "from-violet-500 to-violet-600",
  },
  {
    name: "Security Operations",
    level: 87,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Compliance & Frameworks",
    level: 89,
    color: "from-emerald-500 to-emerald-600",
  },
];
