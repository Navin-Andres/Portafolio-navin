import profilePhoto from '../assets/images/foto_perfil_github_navin.jpg'

function Hero() {
  const technologies = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Power BI', icon: 'https://cdn.simpleicons.org/powerbi/F2C811' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ]

  return (
    <section className="hero-section" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow"><span></span> Disponible para nuevos proyectos</p>
        <p className="intro">Hola, soy</p>
        <h1>Navin Balmaceda<span>.</span></h1>
        <h2>Full Stack Developer</h2>
        <p className="hero-description">
          Desarrollo aplicaciones web y móviles utilizando tecnologías modernas y
          soluciones orientadas a resolver problemas reales.
        </p>
        <div className="social-links" aria-label="Redes y contacto">
          <a href="https://github.com/Navin-Andres" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 6.88c.85 0 1.7.12 2.5.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.93.68 1.87 0 1.35-.01 2.43-.01 2.77 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" /></svg>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/navin-balmaceda/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5H3.3V21h3.2V8.5ZM4.9 3A1.9 1.9 0 1 0 5 6.8 1.9 1.9 0 0 0 4.9 3ZM20.7 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.7 2v-1.7H9.1V21h3.2v-6.2c0-1.6.3-3.2 2.3-3.2 2 0 2 1.9 2 3.3V21h3.2v-7.2Z" /></svg>
            <span>LinkedIn</span>
          </a>
          <a href="mailto:navinbalmaceda83@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.5h17v13h-17v-13Zm.8.8 7.7 6 7.7-6M3.8 18l5.9-5M20.2 18l-5.9-5" /></svg>
            <span>Email</span>
          </a>
          <a className="button button-secondary" href="/cv.pdf" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" /></svg>
            Descargar CV
          </a>
        </div>
        <div className="technologies" id="skills">
          <p>Tecnologías</p>
          <div className="technology-list">
            {technologies.map((technology) => (
              <span key={technology.name}>
                <img src={technology.icon} alt="" aria-hidden="true" />
                {technology.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="portrait-card">
          <img src={profilePhoto} alt="Navin Balmaceda" />
          <div className="card-bar"></div>
        </div>
        <div className="dots-pattern"></div>
      </div>
    </section>
  )
}

export default Hero
