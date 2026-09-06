import type { TimelineEntry } from "@/types";

/** Placeholder timeline — replace periods and organisations with real history. */
export const timeline: TimelineEntry[] = [
  {
    id: "cs-degree",
    period: "Foundation",
    title: "B.Tech Computer Science & Engineering",
    organisation: "Guru Nanak Dev Engineering College",
    description:
      "Data structures, databases and statistics — the groundwork both halves of my practice still rest on.",
    icon: "graduation",
    accent: "sky",
  },
  {
    id: "mern-build",
    period: "Building phase",
    title: "Full-stack development, self-directed",
    organisation: "Personal projects",
    description:
      "Shipped three production-style MERN applications end to end: authentication, role-based dashboards, caching layers and background job queues.",
    icon: "code",
    accent: "lilac",
  },
  {
    id: "analytics-pivot",
    period: "Expansion",
    title: "Data analysis practice",
    organisation: "Self-directed study & case work",
    description:
      "Added SQL modelling, Python exploration and BI dashboard design so I could answer the questions my own dashboards kept raising.",
    icon: "chart-line",
    accent: "mint",
  },
  {
    id: "now",
    period: "Now",
    title: "Open to full-time & freelance work",
    organisation: "Remote / relocating",
    description:
      "Looking for teams where the same person can own both the application and the analysis behind it.",
    icon: "briefcase",
    accent: "blush",
  },
];
