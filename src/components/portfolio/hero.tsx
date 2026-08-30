import Image from "next/image";
import felipePhoto from "../../../public/felipe.jpeg";
import { MAIL_LINK, WA_LINK, type Copy } from "./content";

interface HeroProps {
  t: Copy;
}

export function Hero({ t }: HeroProps) {
  return (
    <header className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-16 px-5 pt-16 pb-18 sm:px-8 lg:grid-cols-[1fr_340px] lg:pt-22">
      <div className="flex flex-col gap-[22px]">
        <div className="flex items-center gap-2.5 font-mono text-[13px] text-accent">
          <span className="size-2 animate-pulse-dot rounded-full bg-accent-bright" />
          {t.status}
        </div>
        <h1 className="m-0 font-display text-[38px] leading-[1.08] font-bold tracking-[-0.02em] text-pretty sm:text-[52px]">
          {t.heroA} <span className="text-accent">{t.heroB}</span>
        </h1>
        <p className="m-0 max-w-[560px] text-[17px] leading-[1.65] text-pretty text-muted">
          {t.heroSub}
        </p>
        <div className="mt-1.5 flex flex-wrap gap-3.5">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-[13px] font-display text-[15px] font-bold text-ink transition-shadow hover:shadow-[0_0_0_1px_rgba(45,212,191,0.25),0_0_32px_rgba(45,212,191,0.22)]"
          >
            {t.ctaWa}
          </a>
          <a
            href={MAIL_LINK}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-6 py-[13px] font-display text-[15px] font-semibold text-foreground transition-colors hover:border-accent/50"
          >
            {t.ctaMail}
          </a>
        </div>
        <div className="mt-1 flex flex-wrap gap-2">
          {t.services.map((service) => (
            <span
              key={service}
              className="rounded-full bg-accent/14 px-3.5 py-1.5 font-mono text-[12px] text-accent"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
      <div className="relative">
        <Image
          src={felipePhoto}
          alt="Luis Felipe Arredondo Giraldo"
          placeholder="blur"
          sizes="(max-width: 1024px) 100vw, 340px"
          className="aspect-square w-full rounded-[22px] border border-white/10 object-cover shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_8px_24px_rgba(0,0,0,0.35)]"
        />
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-[14px] border border-accent/25 bg-surface px-[18px] py-2.5 font-mono text-[12px] whitespace-nowrap text-muted shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
          Luis Felipe Arredondo ·{" "}
          <span className="text-accent">full-stack + devops</span>
        </div>
      </div>
    </header>
  );
}
