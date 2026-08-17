import { useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Education from './Education'
import Contact from './Contact'
import Footer from './Footer'
import BackToTop from './BackToTop'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

   sections.forEach((section, index) => {
  section.classList.add('reveal')
  section.style.setProperty(
    '--section-delay',
    `${index * 0.05}s`
  )

  observer.observe(section)
})

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Education />
    <Contact />
    <Footer />
    <BackToTop />
  </div>
)
}
export default App