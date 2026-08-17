function Skills() {
  const skills = [
    {
      title: "Languages",
      items: ["Python", "C", "JavaScript"]
    },
    {
      title: "AI / ML",
      items: ["Machine Learning", "AI Fundamentals", "Data Analysis"]
    },
    {
      title: "Development",
      items: ["React", "HTML", "CSS", "Git"]
    },
    {
      title: "Tools",
      items: ["VS Code", "n8n", "Docker", "Ollama"]
    }
  ]

  return (
    <section className="skills section" id="skills">
      <div className="section-heading">
        <p className="section-label">02 — SKILLS</p>

        <h2>
          Tools I use to
          <span> build things.</span>
        </h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <h3>{skill.title}</h3>

            <div className="skill-list">
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills