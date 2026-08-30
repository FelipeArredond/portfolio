import type { Copy, Lang } from "./content";

interface NavbarProps {
  t: Copy;
  lang: Lang;
  onToggleLang: () => void;
}

export function Navbar({ t, lang, onToggleLang }: NavbarProps) {
  const links = [
    { href: "#casos", label: t.navCases },
    { href: "#stack", label: t.navStack },
    { href: "#exp", label: t.navExp },
    { href: "#contacto", label: t.navContact },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/6 bg-ink/85 px-5 py-3.5 backdrop-blur-[12px] sm:px-8">
      <div className="flex items-center gap-2.5 font-mono text-[14px] font-semibold text-foreground">
        <span className="text-accent">❯</span> felidev
      </div>
      <div className="flex items-center gap-6 font-mono text-[13px]">
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={onToggleLang}
          className="flex cursor-pointer items-center gap-1.5 rounded-full border border-white/10 bg-surface px-3 py-1.5 font-mono text-[12px] font-semibold text-foreground transition-colors hover:border-accent/50"
        >
          {lang === "es" ? "ES → EN" : "EN → ES"}
        </button>
      </div>
    </nav>
  );
}
