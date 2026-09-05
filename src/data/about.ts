import type { IconName, Track } from "@/types";

export interface AboutFact {
  icon: IconName;
  label: string;
  detail: string;
  accent: Track["accent"];
}

/** The left column of the About section, and the source of its FAQ-free prose. */
export const aboutFacts: AboutFact[] = [
  {
    icon: "code",
    label: "MERN stack developer",
    detail:
      "React, Next.js, Node and MongoDB — from the interface down to the schema.",
    accent: "lilac",
  },
  {
    icon: "chart-column",
    label: "Data analyst",
    detail:
      "SQL modelling, Python exploration and dashboards that answer the question, not just show it.",
    accent: "mint",
  },
  {
    icon: "graduation",
    label: "1-on-1 coding coach",
    detail:
      "Hourly mentorship for students and developers learning the MERN stack.",
    accent: "sky",
  },
  {
    icon: "music",
    label: "Singing",
    detail: "Off the keyboard, usually mid-song.",
    accent: "blush",
  },
  {
    icon: "dance",
    label: "Dancing",
    detail: "The other half of how I clear my head.",
    accent: "sand",
  },
  {
    icon: "globe",
    label: "Open to full-time roles",
    detail:
      "National or international, remote or on-site — happy to relocate for the right team.",
    accent: "lilac",
  },
  {
    icon: "handshake",
    label: "Freelance projects",
    detail:
      "Web apps, REST APIs, admin dashboards and analytics engagements.",
    accent: "mint",
  },
];
