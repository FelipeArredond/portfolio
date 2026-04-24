import { Prompt, SectionBar } from "./prompt";

export function About() {
  return (
    <section id="about">
      <Prompt command="cat" args="about.md" />
      <SectionBar label="about" />

      <div className="reveal">
        <p className="about-text">
          Five years in and still genuinely in love with shipping. Started as a{" "}
          <b>backend engineer</b> at a US startup on a{" "}
          <span className="accent">Node.js · Express · MongoDB</span> stack,
          then pivoted to the frontend with{" "}
          <span className="accent">React</span> at another startup to learn the
          other side of the wire.
        </p>
        <p className="about-text">
          From there I went full-stack at <b>Postobón</b> on{" "}
          <span className="accent">Java 17 · Spring Boot 3 · Angular</span>,
          then joined <b>Bancolombia</b> as a backend engineer writing reactive
          services with <span className="accent">Spring WebFlux</span> and{" "}
          <span className="accent">Django</span>.
        </p>
        <p className="about-text">
          These days I&apos;m in DevOps — designing CI/CD pipelines, managing
          AWS infrastructure with CloudFormation, and wiring up security scans
          into the build. On the side I ship E2E products, AI automations and
          landing pages for founders who need something real and shipped.
        </p>
      </div>
    </section>
  );
}
