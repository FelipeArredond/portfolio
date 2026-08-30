import { WA_LINK, type CaseDetail, type CaseStudy, type Copy } from "./content";

interface CaseModalProps {
  t: Copy;
  caseStudy: CaseStudy;
  detail: CaseDetail;
  chips: string[];
  onClose: () => void;
}

export function CaseModal({ t, caseStudy, detail, chips, onClose }: CaseModalProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-ink/78 p-5 backdrop-blur-[8px] sm:p-8"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex max-h-[85vh] w-full max-w-[680px] flex-col gap-5 overflow-y-auto rounded-[22px] border border-white/10 bg-panel p-6 shadow-[0_24px_64px_rgba(0,0,0,0.6)] sm:p-10"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2.5">
            <span
              className="self-start rounded-full px-3 py-[5px] font-mono text-[12px]"
              style={{ color: caseStudy.color, background: caseStudy.bg }}
            >
              {caseStudy.tag} · {caseStudy.type}
            </span>
            <h3 className="m-0 font-display text-[28px] font-bold tracking-[-0.01em]">
              {caseStudy.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-chip text-[16px] text-muted transition-colors hover:border-accent/50 hover:text-foreground"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[12px] text-accent">
              {t.dProblem}
            </span>
            <p className="m-0 text-[14.5px] leading-[1.65] text-pretty text-muted">
              {detail.problem}
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[12px] text-accent">
              {t.dSolution}
            </span>
            <p className="m-0 text-[14.5px] leading-[1.65] text-pretty text-muted">
              {detail.solution}
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[12px] text-accent">
              {t.dFeatures}
            </span>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {detail.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2 text-[13.5px] leading-[1.5] text-foreground"
                >
                  <span className="shrink-0 text-accent-bright">✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[12px] text-accent">{t.dStack}</span>
            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-lg bg-chip px-3 py-[5px] font-mono text-[12px] text-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-3 border-t border-white/6 pt-2">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-accent px-[22px] py-[11px] font-display text-[14px] font-bold text-ink transition-shadow hover:shadow-[0_0_0_1px_rgba(45,212,191,0.25),0_0_32px_rgba(45,212,191,0.22)]"
          >
            {t.dCta}
          </a>
        </div>
      </div>
    </div>
  );
}
