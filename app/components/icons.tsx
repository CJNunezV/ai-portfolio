import {
  BookOpen,
  Boxes,
  Braces,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  FileText,
  Github,
  Layers3,
  Linkedin,
  Package,
  PenLine,
  Presentation,
  QrCode,
  Ruler,
  ScanLine,
} from "lucide-react";
import type { Project, SkillIcon } from "../data/portfolio";

const skillIcons = {
  python: Braces,
  csharp: Package,
  node: Code2,
  bim: Layers3,
  cloud: Cloud,
  twin: Boxes,
  write: PenLine,
  paper: FileText,
  talk: Presentation,
} satisfies Record<SkillIcon, unknown>;

const projectIcons = {
  scan2bim: ScanLine,
  revitqa: CheckCircle2,
  navis: Ruler,
  dalux: QrCode,
  iot: Cpu,
} satisfies Record<Project["icon"], unknown>;

export function SkillGlyph({ name, size = 18 }: { name: SkillIcon; size?: number }) {
  const Icon = skillIcons[name];
  return <Icon size={size} aria-hidden />;
}

export function ProjectGlyph({ name, size = 20 }: { name: Project["icon"]; size?: number }) {
  const Icon = projectIcons[name];
  return <Icon size={size} aria-hidden />;
}

export function SocialGlyph({
  kind,
  size = 18,
}: {
  kind: "linkedin" | "github" | "researchgate";
  size?: number;
}) {
  const Icon = kind === "linkedin" ? Linkedin : kind === "github" ? Github : BookOpen;
  return <Icon size={size} aria-hidden />;
}
