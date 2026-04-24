import { Prompt, SectionBar } from "./prompt";

interface Job {
  role: string;
  company: string;
  dates: string;
  description: string;
  chips: { label: string; highlight?: boolean }[];
  current?: boolean;
}

const jobs: Job[] = [
  {
    role: "DevOps Engineer",
    company: "Fintech",
    dates: "current",
    description:
      "Designing CI/CD pipelines, managing cloud infrastructure with AWS CloudFormation, and integrating security-scan tooling into the delivery process. Bridging platform ops with the product teams shipping on top of it.",
    chips: [
      { label: "AWS", highlight: true },
      { label: "CloudFormation", highlight: true },
      { label: "CI/CD" },
      { label: "Security Scans" },
      { label: "IaC" },
    ],
    current: true,
  },
  {
    role: "Backend Engineer",
    company: "Bancolombia",
    dates: "previous",
    description:
      "Built reactive backend services using Spring WebFlux and Django for one of the largest banks in Latin America. Also started picking up DevOps responsibilities — pipelines, infrastructure, and security automation — which became the next chapter.",
    chips: [
      { label: "Spring WebFlux", highlight: true },
      { label: "Django", highlight: true },
      { label: "Reactive" },
      { label: "Python" },
      { label: "Java" },
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "Postobón",
    dates: "previous",
    description:
      "Shipped full-stack features across one of Colombia's largest beverage companies. Backend on Java 17 + Spring Boot 3, frontend in Angular. Got comfortable owning a feature end-to-end, from DB schema to UI state.",
    chips: [
      { label: "Java 17", highlight: true },
      { label: "Spring Boot 3", highlight: true },
      { label: "Angular", highlight: true },
      { label: "TypeScript" },
    ],
  },
  {
    role: "Frontend Developer",
    company: "Startup",
    dates: "previous",
    description:
      "Joined a startup as a dedicated React developer to deepen the frontend craft — component architecture, state management, and building UIs that survive contact with real users.",
    chips: [
      { label: "React", highlight: true },
      { label: "JavaScript" },
      { label: "Frontend" },
    ],
  },
  {
    role: "Backend Engineer",
    company: "US Startup",
    dates: "first role",
    description:
      'First professional role. Built backend services on the classic Node.js · Express · MongoDB stack for an American startup. Shipped to production and learned what "it works on my machine" actually costs.',
    chips: [
      { label: "Node.js", highlight: true },
      { label: "Express", highlight: true },
      { label: "MongoDB", highlight: true },
    ],
  },
];

export function Experience() {
  return (
    <section id="experience">
      <Prompt command="ls" args="-lah ./experience" />
      <SectionBar label="5 entries · sorted by date desc" />

      <div className="exp reveal">
        {jobs.map((job) => (
          <div
            key={`${job.role}-${job.company}`}
            className={`exp-item${job.current ? " current" : ""}`}
          >
            <div className="exp-head">
              <div className="exp-title">
                <span className="role">{job.role}</span>
                <span className="at">@</span>
                <span className="co">{job.company}</span>
              </div>
              <div className="exp-dates">{job.dates}</div>
            </div>
            <div className="exp-body">{job.description}</div>
            <div className="chips">
              {job.chips.map((chip) => (
                <span
                  key={chip.label}
                  className={`chip${chip.highlight ? " hi" : ""}`}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
