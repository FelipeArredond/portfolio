export function Prompt({
  command,
  args,
}: {
  command: string;
  args?: string;
}) {
  return (
    <div>
      <span className="prompt">
        <span className="user">felipe</span>
        <span className="at">@</span>
        <span className="host">devops</span>{" "}
        <span className="path">~</span>{" "}
        <span className="sigil">❯</span>
      </span>{" "}
      <span className="cmd">
        <span className="kw">{command}</span>
        {args && <>{" "}<span className="arg">{args}</span></>}
      </span>
    </div>
  );
}

export function SectionBar({ label }: { label: string }) {
  const line = "─".repeat(Math.max(0, 72 - label.length));
  return <span className="bar">── {label} {line}</span>;
}
