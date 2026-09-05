import type { Track } from "@/types";

export const tracks: Track[] = [
  {
    id: "engineering",
    eyebrow: "Track 01",
    title: "MERN Stack Development",
    summary:
      "End-to-end product work: React and Next.js interfaces on top of Node services, MongoDB schemas and authenticated REST APIs.",
    icon: "code",
    accent: "lilac",
    capabilities: [
      "Responsive React & Next.js application interfaces",
      "Node.js + Express REST APIs with JWT and role-based access",
      "MongoDB schema design, indexing and query optimisation",
      "Redis caching and BullMQ background job queues",
      "Admin dashboards with filtering, permissions and live status",
    ],
    tools: ["React", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript"],
  },
  {
    id: "analytics",
    eyebrow: "Track 02",
    title: "Data Analysis",
    summary:
      "Turning operational tables into answers: SQL modelling, Python exploration, and dashboards built so the insight is obvious at a glance.",
    icon: "chart-column",
    accent: "mint",
    capabilities: [
      "SQL modelling — joins, window functions, aggregation pipelines",
      "Exploratory analysis and cleaning with pandas and NumPy",
      "Dashboard design in Power BI, Tableau and custom React charts",
      "KPI definition, cohort and funnel analysis",
      "Clear written reporting for non-technical stakeholders",
    ],
    tools: ["SQL", "Python", "pandas", "Power BI", "Tableau", "Excel"],
  },
];
