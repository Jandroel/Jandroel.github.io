export function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
    >
      <div className="grid-bg absolute inset-0 opacity-55" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,10,0.20)_0%,rgba(5,6,10,0.82)_78%,var(--background)_100%)]" />
    </div>
  );
}
