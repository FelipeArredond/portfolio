import Image from "next/image";

export function Hero() {
  return (
    <section id="whoami" className="hero">
      <div className="block">
        <div>
          <span className="prompt">
            <span className="user">felipe</span>
            <span className="at">@</span>
            <span className="host">devops</span>{" "}
            <span className="path">~/portfolio</span>{" "}
            <span className="sigil">❯</span>
          </span>{" "}
          <span className="cmd">
            <span className="kw">whoami</span>
          </span>
          <span className="cursor" />
        </div>
      </div>

      <div className="hero-row reveal">
        <div className="avatar">
          <Image
            src="/felipe.jpeg"
            alt="Luis Felipe Arredondo Giraldo"
            width={130}
            height={130}
          />
          <div className="badge">
            uid=<span className="g">1000</span>(felipe)
          </div>
        </div>
        <div>
          <h1>
            Luis Felipe Arredondo Giraldo
            <span className="slash">/</span>
            <span className="subtitle">devops · full-stack</span>
          </h1>
          <p className="hero-sub">
            I build <b>end-to-end applications from scratch</b> that solve real
            problems for enterprises, SMBs and founders — from full product
            builds to landing pages and AI-powered automations.
          </p>
          <div className="status">
            <span className="pulse" />
            <span className="live">online</span>
            <span className="sep">·</span> currently{" "}
            <b className="current-role">DevOps Engineer</b> @ fintech{" "}
            <span className="sep">·</span> open to side projects
          </div>
        </div>
      </div>

      <nav className="toc reveal" id="toc">
        <a href="#about">about</a>
        <a href="#experience">experience</a>
        <a href="#skills">skills</a>
        <a href="#projects">projects</a>
        <a href="#oss">open-source</a>
        <a href="#contact">contact</a>
      </nav>
    </section>
  );
}
