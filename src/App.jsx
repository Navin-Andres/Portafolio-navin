import { useEffect, useState } from 'react'
import Navar from './components/navar'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Experience from './components/experience'
import Certifications from './components/certifications'
import Education from './components/education'
import Contacts from './components/contacts'
import Footer from './components/footer'
import './App.css'

function App() {
  const [screen, setScreen] = useState('home')
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const navigateTo = (nextScreen) => {
    setScreen(nextScreen)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main>
      <Navar
        activePage={screen}
        theme={theme}
        onThemeToggle={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
        onHomeClick={() => navigateTo('home')}
        onAboutClick={() => navigateTo('about')}
        onProjectsClick={() => navigateTo('projects')}
        onSkillsClick={() => navigateTo('skills')}
        onProfileClick={() => navigateTo('profile')}
        onContactsClick={() => navigateTo('contacts')}
      />

      {screen === 'home' && <Hero />}
      {screen === 'about' && <About />}
      {screen === 'projects' && <Projects />}
      {screen === 'skills' && <Skills />}
      {screen === 'profile' && (
        <>
          <Experience />
          <Certifications />
          <Education />
        </>
      )}
      {screen === 'contacts' && <Contacts />}

      <Footer />
    </main>
  )
}

export default App
