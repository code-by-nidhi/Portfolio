import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    discipline: "engineering",
    icon: "layers",
    accent: "lilac",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML & CSS",
    ],
  },
  {
    category: "Backend & APIs",
    discipline: "engineering",
    icon: "server",
    accent: "sky",
    skills: [
      "Node.js",
      "Express.js",
      "REST API design",
      "JWT auth & RBAC",
      "Socket.io",
      "BullMQ",
    ],
  },
  {
    category: "Databases",
    discipline: "engineering",
    icon: "database",
    accent: "blush",
    skills: ["MongoDB", "MySQL", "Redis", "Mongoose", "Aggregation pipelines"],
  },
  {
    category: "Analysis & Modelling",
    discipline: "analytics",
    icon: "chart-line",
    accent: "mint",
    skills: [
      "SQL",
      "Python",
      "pandas",
      "NumPy",
      "Descriptive statistics",
      "Cohort & funnel analysis",
    ],
  },
  {
    category: "Visualisation & BI",
    discipline: "analytics",
    icon: "dashboard",
    accent: "sand",
    skills: ["Power BI", "Tableau", "Excel / Sheets", "Recharts", "Matplotlib"],
  },
  {
    category: "Workflow & Tooling",
    discipline: "engineering",
    icon: "git",
    accent: "lilac",
    skills: ["Git & GitHub", "Postman", "Jupyter", "VS Code", "Vercel"],
  },
];
