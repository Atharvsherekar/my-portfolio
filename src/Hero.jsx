function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">CSE • AI/ML STUDENT</p>

        <h1>
          Building ideas into
          <span> real projects.</span>
        </h1>

        <p className="hero-description">
          I'm a second-year Computer Science student specializing in
          Artificial Intelligence and Machine Learning. I enjoy building
          projects, exploring new technologies, and turning ideas into
          something useful.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub ↗
          </a>
          <a
            href="/resume.pdf"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
        >
            Resume ↓
        </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orb"></div>

        <div className="code-card">
          <div className="code-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="code-content">
            <p>
              <span className="code-purple">const</span>{" "}
              <span className="code-blue">student</span> = {"{"}
            </p>

            <p className="indent">
              <span className="code-blue">field</span>:{" "}
              <span className="code-green">"AI/ML"</span>,
            </p>

            <p className="indent">
              <span className="code-blue">focus</span>:{" "}
              <span className="code-green">"Building"</span>,
            </p>

            <p className="indent">
              <span className="code-blue">status</span>:{" "}
              <span className="code-green">"Learning"</span>
            </p>

            <p>{"};"}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero