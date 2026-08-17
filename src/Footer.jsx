function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">

      <div className="footer-inner">

        <a href="#" className="footer-logo">
          <span>&lt;</span>
          YOURNAME
          <span>/&gt;</span>
        </a>

        <p>
          Building, learning, and experimenting with technology.
        </p>

        <span className="footer-copy">
          © {currentYear} YOURNAME. All rights reserved.
        </span>

      </div>

    </footer>
  )
}

export default Footer