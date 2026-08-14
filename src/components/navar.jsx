import { useState } from 'react'
import profilePhoto from '../assets/images/foto_perfil_github_navin.jpg'

const navLinks = [
  { label: 'Inicio', action: 'home' },
  { label: 'Sobre mi', action: 'about' },
  { label: 'Proyectos', action: 'projects' },
  { label: 'Habilidades', action: 'skills' },
  { label: 'Trayectoria', action: 'profile' },
  { label: 'Contactos', action: 'contacts' },
]

function Navar({
  activePage,
  theme,
  onThemeToggle,
  onHomeClick,
  onAboutClick,
  onProjectsClick,
  onSkillsClick,
  onProfileClick,
  onContactsClick,
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = (action) => {
    if (action === 'home' && onHomeClick) onHomeClick()
    if (action === 'about' && onAboutClick) onAboutClick()
    if (action === 'projects' && onProjectsClick) onProjectsClick()
    if (action === 'skills' && onSkillsClick) onSkillsClick()
    if (action === 'profile' && onProfileClick) onProfileClick()
    if (action === 'contacts' && onContactsClick) onContactsClick()

    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <button className="brand" type="button" onClick={() => handleNavigate('home')} aria-label="Ir al inicio">
        <img className="nav-avatar" src={profilePhoto} alt="Navin Balmaceda" />
        <span>Navin Balmaceda</span>
      </button>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegacion principal">
        {navLinks.map((link) => (
          <button
            key={link.action}
            type="button"
            className={`nav-link-button ${activePage === link.action ? 'is-active' : ''}`}
            aria-current={activePage === link.action ? 'page' : undefined}
            onClick={() => handleNavigate(link.action)}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <button
        className="theme-toggle"
        type="button"
        onClick={onThemeToggle}
        aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
        title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
      >
        <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
      </button>
    </header>
  )
}

export default Navar
