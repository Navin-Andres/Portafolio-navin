const experienceData = [
	{
		role: 'Desarrollador Fullstack',
		company: 'Areandina · Consultorio Jurídico',
		period: 'Mar 2026 - Jul 2026',
		summary:
			'Desarrollé y mantuve módulos web institucionales con React, Node.js/Express y PostgreSQL, integrando autenticación con JWT y Google OAuth 2.0, además de soporte en producción y trabajo directo con usuarios finales.',
	},
	{
		role: 'Desarrollador Fullstack (Freelance)',
		company: 'Independiente',
		period: 'Ago 2024 - Jun 2026',
		summary:
			'Creé soluciones para clientes con Node.js/Express, Firebase/Firestore y Flutter, gestionando proyectos remotos desde el levantamiento de requerimientos hasta el despliegue.',
	},
	{
		role: 'Técnico de Soporte',
		company: 'Air Services Ingeniería SAS (AISEING)',
		period: 'Nov 2022 - Mar 2023',
		summary:
			'Resolví incidentes técnicos y administré accesos en plataformas corporativas.',
	},
]

function Experience() {
	return (
		<section className="experience-screen" id="experiencia" aria-labelledby="experience-title">
			<div className="experience-header">
				<p className="projects-eyebrow">Experiencia</p>
				<h2 id="experience-title">Trayectoria profesional</h2>
				<p>
					Un resumen corto de mi trabajo en desarrollo, soporte y colaboración con equipos y usuarios.
				</p>
			</div>

			<div className="experience-grid">
				{experienceData.map((item) => (
					<article className="experience-card" key={`${item.role}-${item.company}`}>
						<p className="experience-period">{item.period}</p>
						<h3>{item.role}</h3>
						<p className="experience-company">{item.company}</p>
						<p className="experience-summary">{item.summary}</p>
					</article>
				))}
			</div>
		</section>
	)
}

export default Experience
