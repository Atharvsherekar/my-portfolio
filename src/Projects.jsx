function Projects() {
  const projects = [
  {
    number: "01",
    title: "AI Motivation Company",
    description:
      "An AI-powered content automation system designed to generate motivational content, create visuals, and manage a structured publishing workflow.",
    tags: ["Python", "Ollama", "n8n", "Docker"],
    type: "AI • Automation",
    github: "https://github.com/",
    demo: "#",
    image: null,
    visual: "AI AUTOMATION"
  },

  {
    number: "02",
    title: "Machine Learning Project",
    description:
      "A machine learning project focused on exploring data, identifying patterns, training models, and evaluating model performance.",
    tags: ["Python", "Machine Learning", "Data"],
    type: "AI • ML",
    github: "https://github.com/",
    demo: "#",
    image: null,
    visual: "MACHINE LEARNING"
  },

  {
    number: "03",
    title: "Personal Portfolio",
    description:
      "A modern responsive portfolio website built with React to showcase projects, skills, education, and my journey in technology.",
    tags: ["React", "JavaScript", "CSS"],
    type: "WEB DEVELOPMENT",
    github: "https://github.com/",
    demo: "#",
    image: null,
    visual: "REACT PORTFOLIO"
  },

  {
  number: "04",
  title: "Another Project",
  description: "Something awesome...",
  tags: ["Python", "AI"],
  type: "AI",
  github: "https://github.com/",
  demo: "#",
  image: null,
  visual: "ANOTHER PROJECT" 
  }
]

  return (
    <section className="projects section" id="projects">
      <div className="section-heading">
        <p className="section-label">03 — PROJECTS</p>

        <h2>
          Things I've
          <span> built.</span>
        </h2>

        <p className="section-intro">
          A collection of experiments, applications, and systems
          built while exploring software development and AI.
        </p>

      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>

  <div className="project-visual">

  {project.image ? (
    <img
      src={project.image}
      alt={`${project.title} project preview`}
      className="project-image"
    />
  ) : (
    <>
      <div className="project-visual-grid"></div>

      <div className="project-visual-content">
        <span>{project.number}</span>
        <strong>{project.visual}</strong>
      </div>
    </>
  )}

</div>

  <div className="project-content">

    <div className="project-top">
      <div>
        <p className="project-type">
          {project.type}
        </p>

        <h3>{project.title}</h3>
      </div>

      <span className="project-number">
        {project.number}
      </span>
    </div>

    <p className="project-description">
      {project.description}
    </p>

    <div className="project-tags">
      {project.tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>

    <div className="project-actions">

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        GitHub
        <span>↗</span>
      </a>

      <a
        href={project.demo}
        target={project.demo !== "#" ? "_blank" : undefined}
        rel={project.demo !== "#" ? "noopener noreferrer" : undefined}
        className="project-link project-link-secondary"
      > 
        Live Demo
        <span>↗</span>
      </a>

    </div>

  </div>

</article>
        ))}
      </div>
    </section>
  )
}

export default Projects