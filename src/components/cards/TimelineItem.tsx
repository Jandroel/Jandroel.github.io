"use client";

import {
  Cloud,
  Database,
  GraduationCap,
  Layers3,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { TimelineItem as TimelineItemData } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  cloud: Cloud,
  database: Database,
  graduation: GraduationCap,
  layers: Layers3,
  sparkles: Sparkles,
};

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  const Icon = iconMap[item.icon] ?? Sparkles;

  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className="relative min-w-0 pl-10 sm:pl-12"
    >
      <span className="absolute left-1 top-6 z-10 flex size-9 items-center justify-center rounded-lg border border-[rgba(232,74,42,0.28)] bg-[#0d0f14] text-[#f0b19f] shadow-[0_0_22px_rgba(232,74,42,0.1)] sm:left-[7px] sm:size-10">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <Card variant="interactive" className="min-w-0 p-4 sm:p-5">
        <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-1 font-mono text-xs text-cyan-100">{item.period}</p>
          </div>
        </div>
        <p className="mt-3 text-pretty text-sm leading-6 text-[var(--text-soft)]">
          {item.description}
        </p>
        <div className="mt-4 flex min-w-0 flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="tech">
              {tag}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.li>
  );
}
