const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      ['React', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
      ['JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'],
      ['HTML5', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'],
      ['CSS3', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'],
      ['Flutter', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'],
    ],
  },
  {
    title: 'Backend y datos',
    skills: [
      ['Node.js', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'],
      ['Python', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'],
      ['PostgreSQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'],
      ['MySQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'],
      ['Firebase', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'],
    ],
  },
  {
    title: 'Herramientas',
    skills: [
      ['Git', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'],
      ['GitHub', githubIcon],
      ['Power BI', powerBiIcon],
      ['Vite', 'https://cdn.simpleicons.org/vite/646CFF'],
      ['Figma', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'],
    ],
  },
]

function Skills() {
  return (
    <section className="skills-screen" id="skills" aria-labelledby="skills-title">
      <div className="skills-header">
        <p className="projects-eyebrow">Skills</p>
        <h1 id="skills-title">Tecnologias y herramientas</h1>
        <p>
          Tecnologias que utilizo para crear aplicaciones web y moviles, desde la interfaz hasta los datos.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.skills.map(([name, icon]) => (
                <li key={name}>
                  <img src={icon} alt="" aria-hidden="true" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
import githubIcon from '../assets/icons/github-white.svg'
import powerBiIcon from '../assets/icons/power-bi.svg'
