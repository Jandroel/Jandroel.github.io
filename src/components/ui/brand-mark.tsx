import { useId } from "react";

import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className }: BrandMarkProps) {
  const patternId = useId().replaceAll(":", "");

  return (
    <span
      className={cn(
        "relative inline-flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-[0.25rem] border border-[#d35a3d]/75 bg-[#1b1114] shadow-[inset_0_0_0_1px_rgba(255,248,239,0.045)] transition-colors duration-200 group-hover:border-[#d8a84f]/80",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 40" className="size-full" fill="none">
        <defs>
          <pattern id={patternId} width="20" height="18" patternUnits="userSpaceOnUse">
            <path
              d="M10 0v18M0 9h20M0 9 10 0l10 9-10 9L0 9ZM0 0l10 9L0 18M20 0 10 9l10 9"
              stroke="#d8a84f"
              strokeWidth="0.7"
              strokeOpacity="0.24"
            />
          </pattern>
        </defs>
        <rect width="40" height="40" fill={`url(#${patternId})`} />
        <g
          fill="none"
          stroke="#d8c6b2"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeOpacity="0.48"
        >
          <path d="M18.5 19.2c3.7-2.5 8.6-2.3 11.6.2 1.9 1.6 3.3 2.7 5 3" />
          <path d="M21 22.7c3.4-1.6 6.8-1 9.2 1.1" />
        </g>
        <g transform="translate(30.2 28.5) rotate(42) scale(0.62)">
          <path
            d="M0-9c4.5 2.7 6.5 7.8 3.6 13.8C2.4 6.8.8 7.8 0 8.2-1.2 6.9-4.8 5.3-5.3.7-5.7-3.8-2.5-7.1 0-9Z"
            fill="#e98b46"
          />
          <path
            d="M0-7c-.2 5 .1 10 0 15M0-2l3.4-2M0 .4l-3.5-1.8M0 3l2.8-1.6M.1 7.2c.4 1.5 1.3 2.6 2.4 3.4"
            fill="none"
            stroke="#98412c"
            strokeWidth="0.72"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M13 12.5h13M23.5 12.5v11.2c0 5-2.8 7.4-7.2 7.4-3 0-5.2-1.3-6.6-3.6"
          stroke="#fff8ef"
          strokeWidth="2.8"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
