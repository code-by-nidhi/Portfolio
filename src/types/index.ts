/** Icon keys resolved by `components/ui/icon.tsx`. */
export type IconName =
  | "code"
  | "database"
  | "chart-column"
  | "chart-line"
  | "brain"
  | "sparkles"
  | "server"
  | "dashboard"
  | "table"
  | "spreadsheet"
  | "gauge"
  | "git"
  | "workflow"
  | "layers"
  | "boxes"
  | "cpu"
  | "terminal"
  | "briefcase"
  | "graduation"
  | "music"
  | "dance"
  | "globe"
  | "handshake"
  | "zap"
  | "palette"
  | "cart"
  | "wrench";

export type Discipline = "engineering" | "analytics";

export interface NavItem {
  label: string;
  href: string;
}

export interface Track {
  id: Discipline;
  eyebrow: string;
  title: string;
  summary: string;
  icon: IconName;
  /** Tailwind token stem, e.g. "lilac" -> bg-lilac-mist / text-lilac-deep. */
  accent: "lilac" | "mint" | "blush" | "sky" | "sand";
  capabilities: string[];
  tools: string[];
}

export interface SkillGroup {
  category: string;
  discipline: Discipline;
  icon: IconName;
  accent: Track["accent"];
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  discipline: Discipline;
  category: string;
  summary: string;
  detail: string;
  tech: string[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
  repoUrl?: string;
  liveUrl?: string;
  accent: Track["accent"];
  status: string;
}

export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  organisation: string;
  description: string;
  icon: IconName;
  accent: Track["accent"];
}
