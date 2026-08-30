import { GITHUB_URL, LINKEDIN_URL, MAIL_LINK, WA_LINK, type Copy } from "./content";

interface ContactCtaProps {
  t: Copy;
}

export function ContactCta({ t }: ContactCtaProps) {
  return (
    <section
      id="contacto"
      className="mx-auto max-w-[1100px] px-5 pt-12 pb-24 sm:px-8"
    >
      <div className="flex flex-col items-center gap-5 rounded-[22px] border border-accent/25 bg-panel px-6 py-14 text-center shadow-[0_0_0_1px_rgba(45,212,191,0.08),0_0_48px_rgba(45,212,191,0.10)] sm:px-12">
        <span className="font-mono text-[13px] text-accent">{t.ctaKicker}</span>
        <h2 className="m-0 max-w-[640px] font-display text-[30px] font-bold tracking-[-0.01em] text-pretty sm:text-[38px]">
          {t.ctaTitle}
        </h2>
        <p className="m-0 max-w-[520px] text-[16px] leading-[1.6] text-pretty text-muted">
          {t.ctaSub}
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3.5">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-[16px] font-bold text-ink transition-shadow hover:shadow-[0_0_0_1px_rgba(45,212,191,0.25),0_0_32px_rgba(45,212,191,0.22)]"
          >
            WhatsApp
          </a>
          <a
            href={MAIL_LINK}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-7 py-3.5 font-display text-[16px] font-semibold text-foreground transition-colors hover:border-accent/50"
          >
            Email
          </a>
        </div>
        <div className="mt-2 flex gap-5 font-mono text-[13px]">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            github
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            linkedin
          </a>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-between gap-2 font-mono text-[12px] text-faint">
        <span>© 2026 Luis Felipe Arredondo Giraldo</span>
        <span>{t.footer}</span>
      </div>
    </section>
  );
}
