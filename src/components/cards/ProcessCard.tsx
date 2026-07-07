import {
  CheckCircle2,
  ClipboardList,
  Code2,
  PenTool,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { Card } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  checkCircle: CheckCircle2,
  clipboard: ClipboardList,
  code: Code2,
  penTool: PenTool,
  sparkles: Sparkles,
};

interface ProcessCardProps {
  step: {
    readonly title: string;
    readonly description: string;
    readonly icon: string;
  };
  index: number;
}

export function ProcessCard({ step, index }: ProcessCardProps) {
  const Icon = iconMap[step.icon] ?? Sparkles;
  const number = String(index + 1).padStart(2, "0");

  return (
    <Card variant="interactive" className="h-full min-w-0 p-5 lg:p-6">
      <div className="mb-6 flex min-w-0 items-center justify-between gap-4">
        <span className="jp-kicker text-sm text-[#f0b19f]">{number}</span>
        <span className="flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.045] text-[#ead09a]">
          <Icon className="size-5" aria-hidden="true" />
        </span>
      </div>
      <h3 className="text-xl font-bold text-white">{step.title}</h3>
      <p className="mt-3 text-pretty text-[0.95rem] leading-6 text-[var(--text-soft)]">
        {step.description}
      </p>
    </Card>
  );
}
