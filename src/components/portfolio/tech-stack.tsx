import { STACK, type Copy } from "./content";
import { SectionHeading } from "./section-heading";

interface TechStackProps {
  t: Copy;
}

export function TechStack({ t }: TechStackProps) {
  return (
    <section id="stack" className="mx-auto max-w-[1100px] px-5 py-12 sm:px-8">
      <SectionHeading number="02" title={t.stackTitle} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((stackGroup) => (
          <div
            key={stackGroup.group}
            className="flex flex-col gap-3 rounded-[18px] border border-white/6 bg-panel p-6"
          >
            <div className="font-mono text-[12px] font-semibold lowercase text-accent">
              {stackGroup.group}
            </div>
            <div className="flex flex-col gap-2">
              {stackGroup.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[14px] text-foreground"
                >
                  <span className="font-mono text-faint">·</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
