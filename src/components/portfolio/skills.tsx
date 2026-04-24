import { Prompt, SectionBar } from "./prompt";

interface SkillGroup {
  title: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "backend",
    items: [
      "Node.js · Express",
      "Java 17 · Spring Boot 3",
      "Spring WebFlux (reactive)",
      "Python · Django",
      "REST · GraphQL · gRPC",
    ],
  },
  {
    title: "frontend",
    items: [
      "React · Next.js",
      "Angular",
      "TypeScript · JavaScript",
      "Tailwind · CSS-in-JS",
    ],
  },
  {
    title: "devops/cloud",
    items: [
      "AWS · CloudFormation",
      "CI/CD pipelines",
      "Docker · Kubernetes",
      "Security scans (SAST/DAST)",
      "Infrastructure as Code",
    ],
  },
  {
    title: "data/ai",
    items: [
      "MongoDB · PostgreSQL",
      "LLM integrations",
      "AI-powered automations",
      "RAG pipelines",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills">
      <Prompt command="cat" args="skills.json | jq ." />
      <SectionBar label="stack & tools" />

      <div className="skills reveal">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
