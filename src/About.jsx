function About() {
  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <p className="section-label">01 — ABOUT ME</p>

        <h2>
          Curious mind.
          <span> Builder mindset.</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a second-year B.Tech Computer Science student specializing
            in Artificial Intelligence and Machine Learning.
          </p>

          <p>
            I'm interested in understanding how technology works and,
            more importantly, building things with it. From programming
            and automation to AI-powered applications, I enjoy turning
            ideas into working projects.
          </p>

          <p>
            I'm currently focused on strengthening my fundamentals,
            exploring AI/ML, and building projects that help me learn
            through real-world experimentation.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <h3>SY</h3>
            <p>B.Tech</p>
          </div>

          <div className="stat-card">
            <h3>CSE</h3>
            <p>AI / ML</p>
          </div>

          <div className="stat-card">
            <h3>∞</h3>
            <p>Curiosity</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About