import type { IconName, Track } from "@/types";

export interface Service {
  icon: IconName;
  title: string;
  detail: string;
  /** Rendered as a `·`-separated line at the foot of the card. */
  tech: string[];
  accent: Track["accent"];
}

/** The cards that burst out of the box in the Services section. */
export const services: Service[] = [
  {
    icon: "globe",
    title: "Website Development",
    detail: "Modern, responsive websites built for your business.",
    tech: ["HTML", "CSS", "JS"],
    accent: "sky",
  },
  {
    icon: "zap",
    title: "Full-Stack Development",
    detail:
      "Complete web apps with frontend, backend and database functionality.",
    tech: ["React", "Node", "MongoDB"],
    accent: "lilac",
  },
  {
    icon: "palette",
    title: "Frontend & UI Development",
    detail: "Clean and interactive interfaces that work across every screen.",
    tech: ["React", "CSS", "JS"],
    accent: "blush",
  },
  {
    icon: "cart",
    title: "E-Commerce Development",
    detail:
      "Custom online stores designed to provide a smooth shopping experience.",
    tech: ["React", "Node", "MongoDB"],
    accent: "sand",
  },
  {
    icon: "wrench",
    title: "Website Fixes & Improvements",
    detail: "Fix bugs, improve UI, integrate APIs and add new functionality.",
    tech: ["React", "JS", "APIs"],
    accent: "mint",
  },
];
