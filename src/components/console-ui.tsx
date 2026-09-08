import type { ReactNode } from "react";

export const nf = new Intl.NumberFormat("sv-SE");

export function PageHead({
  eyebrow,
  title,
  intro,
  actions,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </p>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h1>
        {intro ? <p className="max-w-2xl text-sm text-muted-foreground">{intro}</p> : null}
      </div>
      {actions}
    </div>
  );
}

export function Stat({
  label,
  value,
  sub,
  tone = "neutral",
}: {
  label: string;
  value: string;
  sub?: string;
  tone?: "neutral" | "ok" | "loss";
}) {
  return (
    <div className="rounded-xl border border-border bg-muted/40 p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p
        className={`mt-2 font-mono text-2xl font-bold ${
          tone === "loss" ? "text-loss" : tone === "ok" ? "text-ok" : ""
        }`}
      >
        {value}
      </p>
      {sub ? <p className="mt-1 text-sm text-muted-foreground">{sub}</p> : null}
    </div>
  );
}

export function Panel({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border">
      <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-5 py-4">
        <h2 className="text-sm font-bold uppercase tracking-widest">{title}</h2>
        {hint ? <span className="text-xs text-muted-foreground">{hint}</span> : null}
      </header>
      <div className="p-5">{children}</div>
    </section>
  );
}

export function Table({
  head,
  rows,
}: {
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-sm">
        <thead>
          <tr className="text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {head.map((h, i) => (
              <th key={h} className={`pb-3 ${i === 0 ? "" : "px-3"}`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className="border-t border-border">
              {r.map((c, ci) => (
                <td key={ci} className={`py-3 ${ci === 0 ? "font-medium" : "px-3"}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Bar({ pct, tone = "ok" }: { pct: number; tone?: "ok" | "loss" }) {
  return (
    <div className="h-2 w-full min-w-24 rounded-full bg-muted">
      <div
        className={`h-2 rounded-full ${tone === "loss" ? "bg-loss" : "bg-ok"}`}
        style={{ width: `${Math.min(100, pct)}%` }}
      />
    </div>
  );
}

export function Tag({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "ok" | "loss";
}) {
  const cls =
    tone === "ok"
      ? "border-ok/40 text-ok"
      : tone === "loss"
        ? "border-loss/40 text-loss"
        : "border-border text-muted-foreground";
  return (
    <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${cls}`}>
      {children}
    </span>
  );
}
