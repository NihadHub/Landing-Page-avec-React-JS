import { useState, useEffect } from 'react'
import { ArrowUp, Sun, Moon } from 'lucide-react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrollVisible, setScrollVisible] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Changer le thème"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {scrollVisible && (
        <button className="scroll-top" onClick={scrollTop}>
          <ArrowUp size={20} />
        </button>
      )}

    </div>
  )
}

export default App