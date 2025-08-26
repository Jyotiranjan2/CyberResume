export interface Achievement {
  id: string;
  title: string;
  year: string;
  description: string;
  position: string;
  event: string;
  icon: string;
  iconBg: string;
  category: "Competition" | "Recognition" | "Hackathon";
}

export const achievements: Achievement[] = [
  {
    id: "robo-war",
    title: "Robo War Winner",
    year: "2025",
    description: "Winner at GIET University Techfest",
    position: "1st Place",
    event: "GIET University Techfest",
    icon: "fas fa-trophy",
    iconBg: "bg-yellow-600",
    category: "Competition",
  },
  {
    id: "line-follower",
    title: "Line Follower Competition",
    year: "2025",
    description: "Secured 2nd Place in Line Follower Robotics Event at Tech Fest 2024",
    position: "2nd Place",
    event: "Tech Fest 2024",
    icon: "fas fa-medal",
    iconBg: "bg-gray-500",
    category: "Competition",
  },
  {
    id: "droid-blitz",
    title: "Droid Blitz Amphibious Robo Competition",
    year: "2025",
    description: "Finalist at Kshitij 2025, IIT Kharagpur",
    position: "Finalist",
    event: "Kshitij 2025, IIT Kharagpur",
    icon: "fas fa-robot",
    iconBg: "bg-purple-600",
    category: "Competition",
  },
  {
    id: "tcs-hackquest",
    title: "TCS HackQuest Season 9",
    year: "2025",
    description: "Participated and Solved 7 Flags",
    position: "Participant",
    event: "TCS HackQuest Season 9",
    icon: "fas fa-flag",
    iconBg: "bg-blue-600",
    category: "Hackathon",
  },
  {
    id: "sih-2025",
    title: "Smart India Hackathon 2025",
    year: "2025",
    description: "Internal Finalist",
    position: "Internal Finalist",
    event: "Smart India Hackathon 2025",
    icon: "fas fa-lightbulb",
    iconBg: "bg-orange-600",
    category: "Hackathon",
  },
  {
    id: "nciipc-pentathon",
    title: "NCIIPC Pentathon 2024",
    year: "2024",
    description: "Secured Top 350 (AICTE CTF)",
    position: "Top 350",
    event: "AICTE CTF",
    icon: "fas fa-shield-alt",
    iconBg: "bg-red-600",
    category: "Competition",
  },
  {
    id: "sih-2023",
    title: "Smart India Hackathon 2023",
    year: "2023",
    description: "Internal Winner",
    position: "Winner",
    event: "Smart India Hackathon 2023",
    icon: "fas fa-award",
    iconBg: "bg-green-600",
    category: "Hackathon",
  }
];