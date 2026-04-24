import { Prompt, SectionBar } from "./prompt";

interface Project {
  name: string;
  description: string;
  language: string;
  url: string;
}

const projects: Project[] = [
  {
    name: "project-one",
    description:
      "placeholder — swap with a real repo description. 1-2 lines that explain the problem you solved and who it was for.",
    language: "TypeScript",
    url: "https://github.com/FelipeArredond",
  },
  {
    name: "project-two",
    description:
      "placeholder — another flagship project. Keep it tight: what, stack, outcome.",
    language: "Java",
    url: "https://github.com/FelipeArredond",
  },
  {
    name: "ai-automation",
    description:
      "placeholder — describe an AI automation you've built. Which workflow, which LLM/tooling, impact.",
    language: "Python",
    url: "https://github.com/FelipeArredond",
  },
  {
    name: "landing-template",
    description:
      "placeholder — a landing page template or client site you're proud of.",
    language: "React",
    url: "https://github.com/FelipeArredond",
  },
];

export function Projects() {
  return (
    <section id="projects">
      <Prompt command="gh" args="repo list FelipeArredond --limit 10" />
      <SectionBar label="selected work" />

      <div className="reveal">
        {projects.map((project) => (
          <a
            key={project.name}
            className="project"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="glyph">▸</div>
            <div>
              <div className="pname">
                FelipeArredond/
                <span className="pname-accent">{project.name}</span>
              </div>
              <div className="pdesc">{project.description}</div>
              <div className="pmeta">
                <span className="lang">{project.language}</span>
                <span>★ —</span>
                <span>updated —</span>
              </div>
            </div>
            <div className="plink">view →</div>
          </a>
        ))}

        <div className="empty-state">
          <div>
            <b>TODO</b> — replace these placeholder rows with real repos from{" "}
            <a
              href="https://github.com/FelipeArredond"
              target="_blank"
              rel="noopener noreferrer"
              className="ext"
            >
              github.com/FelipeArredond
            </a>
            .
          </div>
          <div style={{ marginTop: 6 }}>
            For each repo: <span className="fg">name</span>,{" "}
            <span className="fg">one-line description</span>,{" "}
            <span className="fg">primary language</span>, and a link.
          </div>
        </div>

        <div style={{ marginTop: 22 }}>
          <span className="prompt">
            <span className="sigil">❯</span>
          </span>{" "}
          <a
            href="https://github.com/FelipeArredond"
            target="_blank"
            rel="noopener noreferrer"
            className="ext"
          >
            see all on github
          </a>
        </div>
      </div>
    </section>
  );
}
