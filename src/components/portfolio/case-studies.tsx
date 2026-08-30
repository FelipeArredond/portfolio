import { CASE_CHIPS, type CaseStudy, type Copy } from "./content";
import { SectionHeading } from "./section-heading";

interface CaseStudiesProps {
  t: Copy;
  onOpenCase: (name: string) => void;
}

export function CaseStudies({ t, onOpenCase }: CaseStudiesProps) {
  return (
    <section id="casos" className="mx-auto max-w-[1100px] px-5 py-12 sm:px-8">
      <SectionHeading number="01" title={t.casesTitle} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {t.cases.map((caseStudy) => (
          <CaseCard
            key={caseStudy.name}
            caseStudy={caseStudy}
            seeMoreLabel={t.seeMore}
            onOpen={() => onOpenCase(caseStudy.name)}
          />
        ))}
      </div>
    </section>
  );
}

interface CaseCardProps {
  caseStudy: CaseStudy;
  seeMoreLabel: string;
  onOpen: () => void;
}

function CaseCard({ caseStudy, seeMoreLabel, onOpen }: CaseCardProps) {
  return (
    <article
      onClick={onOpen}
      className="flex cursor-pointer flex-col gap-3.5 rounded-[18px] border border-white/6 bg-surface p-7 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_8px_24px_rgba(0,0,0,0.35)] transition-[border-color,transform] duration-150 hover:-translate-y-0.5 hover:border-accent/25"
    >
      <div className="flex items-center justify-between">
        <span
          className="rounded-full px-3 py-[5px] font-mono text-[12px]"
          style={{ color: caseStudy.color, background: caseStudy.bg }}
        >
          {caseStudy.tag}
        </span>
        <span className="font-mono text-[12px] text-faint">
          {caseStudy.type}
        </span>
      </div>
      <h3 className="m-0 font-display text-[22px] font-semibold">
        {caseStudy.name}
      </h3>
      <p className="m-0 text-[14.5px] leading-[1.6] text-pretty text-muted">
        {caseStudy.desc}
      </p>
      <div className="mt-auto flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {(CASE_CHIPS[caseStudy.name] ?? []).map((chip) => (
            <span
              key={chip}
              className="rounded-lg bg-chip px-2.5 py-1 font-mono text-[11.5px] text-muted"
            >
              {chip}
            </span>
          ))}
        </div>
        <span className="font-mono text-[12px] whitespace-nowrap text-accent">
          {seeMoreLabel} →
        </span>
      </div>
    </article>
  );
}
