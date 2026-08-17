function Contact() {
  const contactItems = [
    {
      label: "EMAIL",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      label: "GITHUB",
      value: "github.com/yourusername",
      href: "https://github.com/",
      external: true,
    },
    {
      label: "LINKEDIN",
      value: "linkedin.com/in/yourusername",
      href: "https://www.linkedin.com/",
      external: true,
    },
  ]

  return (
    <section id="contact" className="section contact">
      <div className="container">

        <div className="section-heading">

          <p className="section-label">
            05 — CONTACT
          </p>

          <h2>
            Let's build
            <span> something.</span>
          </h2>

          <p className="section-intro">
            Have an idea, opportunity, or interesting problem?
            I'm always open to connecting and learning something new.
          </p>

        </div>

        <div className="contact-grid">

          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="contact-card"
              target={item.external ? "_blank" : undefined}
              rel={
                item.external
                  ? "noopener noreferrer"
                  : undefined
              }
            >

              <span className="contact-label">
                {item.label}
              </span>

              <span className="contact-value">
                {item.value}
              </span>

              <span className="contact-arrow">
                ↗
              </span>

            </a>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Contact