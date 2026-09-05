import {
  Boxes,
  BrainCircuit,
  Briefcase,
  ChartColumn,
  ChartLine,
  CodeXml,
  Cpu,
  Database,
  Drama,
  FileSpreadsheet,
  Gauge,
  GitBranch,
  Globe,
  Handshake,
  GraduationCap,
  Layers,
  LayoutDashboard,
  MicVocal,
  Server,
  Sparkles,
  Table2,
  Terminal,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/types";

const registry: Record<IconName, LucideIcon> = {
  code: CodeXml,
  database: Database,
  "chart-column": ChartColumn,
  "chart-line": ChartLine,
  brain: BrainCircuit,
  sparkles: Sparkles,
  server: Server,
  dashboard: LayoutDashboard,
  table: Table2,
  spreadsheet: FileSpreadsheet,
  gauge: Gauge,
  git: GitBranch,
  workflow: Workflow,
  layers: Layers,
  boxes: Boxes,
  cpu: Cpu,
  terminal: Terminal,
  briefcase: Briefcase,
  graduation: GraduationCap,
  music: MicVocal,
  dance: Drama,
  globe: Globe,
  handshake: Handshake,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Glyph = registry[name];
  return <Glyph className={className} strokeWidth={strokeWidth} aria-hidden />;
}
