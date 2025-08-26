export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  location: string;
}

export interface Coursework {
  category: string;
  courses: string[];
}

export const education: Education[] = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "GIET University",
    duration: "2021-2025",
    grade: "CGPA: 6.85",
    location: "Gunupur",
  },
  {
    id: "intermediate",
    degree: "Intermediate (Science)",
    institution: "Government Higher Secondary School",
    duration: "2019-2021",
    grade: "Marks: 536/600",
    location: "Rourkela",
  },
  {
    id: "matriculation",
    degree: "Matriculation",
    institution: "S.S.V.M., SEC-6",
    duration: "2018-2019",
    grade: "Marks: 529/600",
    location: "Rourkela",
  }
];

export const coursework: Coursework[] = [
  {
    category: "Core Security",
    courses: [
      "Cybersecurity Fundamentals",
      "Ethical Hacking",
      "Network Security",
      "Software Vulnerabilities"
    ]
  },
  {
    category: "Technical Skills",
    courses: [
      "Operating Systems",
      "Data Structures & Algorithms",
      "Computer Networks",
      "Database Management"
    ]
  }
];