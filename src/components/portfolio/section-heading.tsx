interface SectionHeadingProps {
  number: string;
  title: string;
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex items-baseline gap-4">
      <span className="font-mono text-[13px] text-accent">{number}</span>
      <h2 className="m-0 font-display text-[32px] font-bold tracking-[-0.01em]">
        {title}
      </h2>
    </div>
  );
}
