import type { IconName, Track } from "@/types";

export interface ResumeEntry {
  /** TODO: swap the placeholder periods for real dates. */
  period: string;
  role: string;
  org: string;
  points: string[];
}

/** Left column of the résumé panel. */
export const experiences: ResumeEntry[] = [
  {
    period: "2024 — Present",
    role: "Freelance developer & analyst",
    org: "Independent",
    points: [
      "Web apps & admin dashboards",
      "REST API design & integration",
      "Analytics engagements",
    ],
  },
  {
    period: "2023 — Present",
    role: "1-on-1 coding coach",
    org: "Independent",
    points: [
      "Hourly mentorship for students",
      "MERN stack from fundamentals up",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Full-stack development",
    org: "Self-directed",
    points: [
      "Three production-style MERN apps",
      "Auth, RBAC & role dashboards",
      "Caching layers & job queues",
    ],
  },
];

/** Middle column. */
export const formations: ResumeEntry[] = [
  {
    period: "Foundation",
    role: "B.Tech Computer Science & Engineering",
    org: "Guru Nanak Dev Engineering College",
    points: ["Data structures & algorithms", "Databases & statistics"],
  },
  {
    period: "Ongoing",
    role: "Data analysis practice",
    org: "Self-directed study",
    points: ["SQL modelling & Python exploration", "BI dashboard design"],
  },
];

/** Right column, top. */
export const hobbies: {
  icon: IconName;
  label: string;
  accent: Track["accent"];
}[] = [
  { icon: "music", label: "Singing", accent: "blush" },
  { icon: "dance", label: "Dancing", accent: "sand" },
  { icon: "graduation", label: "Teaching", accent: "sky" },
];

/** Left column, bottom — the tool wall. */
export const aptitudes: string[] = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "SQL",
  "Python",
  "pandas",
  "Power BI",
  "Tableau",
  "Git",
  "Figma",
];
