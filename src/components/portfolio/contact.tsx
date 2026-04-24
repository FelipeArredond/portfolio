import { Prompt, SectionBar } from "./prompt";

export function Contact() {
  return (
    <section id="contact">
      <Prompt command="contact" args="--help" />
      <SectionBar label="let's talk" />

      <div className="contact reveal">
        <div className="line">
          <b>usage:</b> reach out for freelance builds, AI automations, or a
          full-stack collab.
        </div>
        <div className="line">
          <b>github</b>
          <a
            href="https://github.com/FelipeArredond"
            target="_blank"
            rel="noopener noreferrer"
            className="ext"
          >
            github.com/FelipeArredond
          </a>
        </div>
        <div className="line">
          <b>linkedin</b>
          <a
            href="https://www.linkedin.com/in/felipe-arredondo-giraldo-02259521b/"
            target="_blank"
            rel="noopener noreferrer"
            className="ext"
          >
            felipe-arredondo-giraldo
          </a>
        </div>
        <div className="line">
          <b>status</b>
          <span className="status-accepting">● accepting side projects</span>
        </div>

        <div className="ascii">
          {`   ┌───────────────────────────────────────────┐
   │   hit me up.                              │
   │   i reply fast, ship faster.              │
   └───────────────────────────────────────────┘`}
        </div>
      </div>
    </section>
  );
}
