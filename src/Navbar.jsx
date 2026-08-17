import { useEffect, useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'about',
        'skills',
        'projects',
        'education',
        'contact',
      ]

      const scrollPosition = window.scrollY + 150

      let currentSection = ''

      sections.forEach((id) => {
        const section = document.getElementById(id)

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <a href="#" className="logo" onClick={closeMenu}>
        <span>&lt;</span>YOURNAME<span>/&gt;</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={
              activeSection === item.id ? 'active' : ''
            }
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="nav-cta"
        onClick={closeMenu}
      >
        Let's Connect
      </a>
    </nav>
  )
}

export default Navbar