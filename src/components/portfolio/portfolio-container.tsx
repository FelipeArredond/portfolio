"use client";

import { useState } from "react";
import { CASE_CHIPS, COPY, DETAILS, type Lang } from "./content";
import { CaseModal } from "./case-modal";
import { CaseStudies } from "./case-studies";
import { ContactCta } from "./contact-cta";
import { Experience } from "./experience";
import { Hero } from "./hero";
import { Navbar } from "./navbar";
import { TechStack } from "./tech-stack";

export function PortfolioContainer() {
  const [lang, setLang] = useState<Lang>("es");
  const [openCase, setOpenCase] = useState<string | null>(null);

  const t = COPY[lang];
  const openedCase = openCase
    ? (t.cases.find((caseStudy) => caseStudy.name === openCase) ?? null)
    : null;
  const openedDetail = openedCase ? DETAILS[lang][openedCase.name] : null;

  return (
    <div className="min-h-screen bg-ink">
      <Navbar
        t={t}
        lang={lang}
        onToggleLang={() => setLang(lang === "es" ? "en" : "es")}
      />
      <Hero t={t} />
      <CaseStudies t={t} onOpenCase={setOpenCase} />
      <TechStack t={t} />
      <Experience t={t} />
      <ContactCta t={t} />
      {openedCase && openedDetail && (
        <CaseModal
          t={t}
          caseStudy={openedCase}
          detail={openedDetail}
          chips={CASE_CHIPS[openedCase.name] ?? []}
          onClose={() => setOpenCase(null)}
        />
      )}
    </div>
  );
}
