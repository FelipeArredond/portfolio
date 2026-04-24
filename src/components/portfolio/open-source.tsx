import { Prompt, SectionBar } from "./prompt";

const contributions = [
  { title: "Contribution title", note: "repo · short note about the PR or issue" },
  { title: "Contribution title", note: "repo · short note about the PR or issue" },
  { title: "Tool / library", note: "what it does · who uses it" },
  { title: "Tool / library", note: "what it does · who uses it" },
];

export function OpenSource() {
  return (
    <section id="oss">
      <Prompt command="cat" args="open-source.md" />
      <SectionBar label="contributions" />

      <div className="reveal">
        <p className="about-text" style={{ marginTop: 0 }}>
          Open-source contributions and personal tools. Add your PRs, libraries,
          or tools you maintain here.
        </p>
        <div className="oss-list">
          {contributions.map((c, i) => (
            <div key={i} className="row">
              <div className="h">[+]</div>
              <div>
                <div className="t">{c.title}</div>
                <div className="row-note">{c.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
