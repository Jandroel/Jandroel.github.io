import {
  Bot,
  Columns3,
  FileSearch,
  RefreshCw,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import { FaAws, FaJava, FaMicrosoft } from "react-icons/fa";
import {
  SiAngular,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types";

const iconMap: Record<string, IconType | LucideIcon> = {
  FaAws,
  FaJava,
  FaMicrosoft,
  LuColumns3: Columns3,
  LuBot: Bot,
  LuFileSearch: FileSearch,
  LuRefreshCw: RefreshCw,
  LuSparkles: Sparkles,
  SiAngular,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  VscVscode,
};

interface SkillBadgeProps {
  skill: Skill;
  compact?: boolean;
}

export function SkillBadge({ skill, compact = false }: SkillBadgeProps) {
  const Icon = iconMap[skill.icon] ?? SiGithub;
  const { t } = useLanguage();
  const skillName =
    t.stack.skills[skill.name as keyof typeof t.stack.skills] ?? skill.name;
  const level = skill.level ? t.common.skillLevels[skill.level] : null;

  return (
    <div
      className={cn(
        "group flex min-h-12 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-3 transition duration-200 hover:border-[rgba(232,74,42,0.24)] hover:bg-white/[0.062]",
        skill.featured && "border-[rgba(216,168,79,0.22)]",
        compact && "min-h-10 py-2",
      )}
    >
      <span
        className="flex size-9 shrink-0 items-center justify-center rounded-md bg-white/[0.055] transition group-hover:bg-white/[0.09]"
        aria-hidden="true"
      >
        <Icon className="size-5" style={{ color: skill.color }} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block break-words text-[0.92rem] font-semibold text-white">
          {skillName}
        </span>
        {level ? (
          <span className="mt-1 block font-mono text-xs text-[var(--text-faint)]">
            {level}
          </span>
        ) : null}
      </span>
      {skill.featured ? (
        <Badge variant="tech" className="shrink-0">
          {t.common.core}
        </Badge>
      ) : null}
    </div>
  );
}
