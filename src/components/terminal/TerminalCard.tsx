const terminalLines = [
  { command: "whoami", output: "Jandroel - Software Engineering Student" },
  { command: "focus --current", output: "Interfaces, APIs, and data models" },
  {
    command: "learning --mode",
    output: "Building real projects from class concepts",
  },
  { command: "status", output: "Learning, building, improving" },
] as const;

export function TerminalCard() {
  return (
    <div className="terminal-card hud-corners min-w-0 overflow-hidden rounded-lg border border-[rgba(255,77,46,0.24)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-4 py-3">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#F43F5E]" />
          <span className="size-2.5 rounded-full bg-[#F59E0B]" />
          <span className="size-2.5 rounded-full bg-[#22C55E]" />
        </div>
        <span className="jp-kicker text-xs text-[var(--text-faint)]">portfolio.save</span>
      </div>
      <div className="min-w-0 space-y-4 p-4 font-mono text-sm leading-6 sm:p-5">
        {terminalLines.map((line) => (
          <div key={line.command} className="min-w-0">
            <p className="text-cyan-200">
              <span className="text-violet-300">&gt;</span> {line.command}
            </p>
            <p className="break-words text-[var(--text-soft)]">{line.output}</p>
          </div>
        ))}
        <div className="flex min-w-0 items-center gap-2 text-green-200">
          <span>&gt;</span>
          <span className="min-w-0 break-all">console.log(&apos;building...&apos;)</span>
          <span className="terminal-cursor" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
