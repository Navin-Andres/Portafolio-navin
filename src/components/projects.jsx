import projectData from '../data/projects'
import ecovalleHome from '../assets/images/Captura de pantalla 2026-08-12 155617.png'
import portafolioNavin from '../assets/images/portafolio-navin.png'
import medicTotal from '../assets/images/medic total.png'
import nitendoDs from '../assets/images/nitendo ds.png'

const projectImages = {
	'ecovalle-home': { src: ecovalleHome, alt: 'Pantalla principal de la aplicación Ecovalle' },
	'portafolio-navin': { src: portafolioNavin, alt: 'Vista previa del Portafolio Web Personal' },
	'medic-total': { src: medicTotal, alt: 'Vista previa de la aplicación Medic Total' },
	'nitendo-ds': { src: nitendoDs, alt: 'Vista previa de R4 ROMs Library para Nintendo DS' },
}

const techIcons = {
	'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
	'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
	'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
	'Google Maps API': 'https://cdn.simpleicons.org/googlemaps/4285F4',
	'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
	'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
	'Vite': 'https://cdn.simpleicons.org/vite/646CFF',
	'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
	'Twitch API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitch/twitch-original.svg',
	'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
	'Flask': 'https://cdn.simpleicons.org/flask/000000',
	'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
	'Render': 'https://cdn.simpleicons.org/render/46E3B7',
	'Aiven': 'https://cdn.simpleicons.org/aiven/FF4C22',
	'Gunicorn': 'https://cdn.simpleicons.org/gunicorn/499848',
	'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
	'CSS custom': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
	'LocalStorage': 'https://cdn.simpleicons.org/webauthn/342634',
	'Responsive design': 'https://cdn.simpleicons.org/responsive/4A4A4A',
	'UI components': 'https://cdn.simpleicons.org/webcomponents/263840',
}

function Projects() {
	return (
		<section className="projects-screen" id="proyectos" aria-labelledby="projects-title">
			<div className="projects-header">
				<p className="projects-eyebrow">Portafolio</p>
				<h1 id="projects-title">Proyectos realizados</h1>
				<p>
					Selección de trabajos y prototipos hechos con foco en interfaces, datos y
					experiencias funcionales.
				</p>
			</div>

			<div className="projects-grid">
				{projectData.map((project) => (
					<article className="project-card" key={project.title}>
						{project.image && projectImages[project.image] && (
							<div className="project-image">
								<img
									src={projectImages[project.image].src}
									alt={projectImages[project.image].alt}
								/>
							</div>
						)}
						<div className="project-card-top">
							<span>{project.category}</span>
							<h2>{project.title}</h2>
						</div>

						<p className="project-description">{project.description}</p>

						<ul className="project-stack" aria-label={`Tecnologías de ${project.title}`}>
							{project.stack.map((technology) => (
								<li key={technology} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
									{techIcons[technology] && (
										<img
											src={techIcons[technology]}
											alt=""
											style={{ width: '16px', height: '16px', objectFit: 'contain' }}
										/>
									)}
									<span>{technology}</span>
								</li>
							))}
						</ul>

						{(project.demoUrl || project.githubUrl) && (
							<div className="project-links">
								{project.demoUrl && (
									<a href={project.demoUrl} target="_blank" rel="noreferrer" className="project-link-button">
										Ver demo
									</a>
								)}
								{project.githubUrl && (
									<a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link-button project-link-button-secondary">
										Ver GitHub
									</a>
								)}
							</div>
						)}

						<ul className="project-points">
							{project.points.map((point) => (
								<li key={point}>{point}</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</section>
	)
}

export default Projects
