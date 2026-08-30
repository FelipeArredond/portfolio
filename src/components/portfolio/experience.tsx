import type { Copy, ExperienceEntry } from "./content";
import { SectionHeading } from "./section-heading";

interface ExperienceProps {
  t: Copy;
}

export function Experience({ t }: ExperienceProps) {
  return (
    <section id="exp" className="mx-auto max-w-[1100px] px-5 py-12 sm:px-8">
      <SectionHeading number="03" title={t.expTitle} />
      <div className="flex flex-col">
        {t.exp.map((entry) => (
          <ExperienceRow key={`${entry.role}-${entry.org}`} entry={entry} />
        ))}
      </div>
    </section>
  );
}

function ExperienceRow({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="grid grid-cols-[24px_1fr] gap-5">
      <div className="flex flex-col items-center">
        <span
          className={`mt-1.5 size-2.5 shrink-0 rounded-full ${
            entry.current ? "bg-accent-bright" : "bg-faint"
          }`}
        />
        <span className="w-px flex-1 bg-white/10" />
      </div>
      <div className="flex flex-col gap-2 pb-8">
        <div className="flex flex-wrap items-baseline gap-3">
          <h3 className="m-0 font-display text-[19px] font-semibold">
            {entry.role} <span className="text-accent">@{entry.org}</span>
          </h3>
          <span
            className={`rounded-full px-2.5 py-[3px] font-mono text-[11.5px] ${
              entry.current
                ? "bg-accent-bright/14 text-accent-bright"
                : "bg-chip text-muted"
            }`}
          >
            {entry.badge}
          </span>
        </div>
        <p className="m-0 max-w-[720px] text-[14.5px] leading-[1.6] text-pretty text-muted">
          {entry.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {entry.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-lg bg-chip px-2.5 py-[3px] font-mono text-[11px] text-muted"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
