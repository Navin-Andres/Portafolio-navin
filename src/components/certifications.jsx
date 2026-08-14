function Certifications() {
	const certifications = [
		{
			title: 'Visualizacion de Datos con Power BI',
			issuer: 'SENA',
			year: '2025',
			hours: '48 horas',
		},
		{
			title: 'Manejo Basico de Excel',
			issuer: 'SENA',
			year: '2024',
			hours: '40 horas',
		},
		{
			title: 'Introduccion a la Ciberseguridad',
			issuer: 'Cisco Networking Academy',
			year: '2025',
			hours: '48 horas',
		},
		{
			title: 'Domina la IA con Gemini',
			issuer: 'Santander Open Academy',
			year: '2026',
			hours: null,
		},
	]

	return (
		<section className="certifications-screen" id="certificaciones" aria-labelledby="certifications-title">
			<div className="certifications-header">
				<p className="projects-eyebrow">Certificaciones</p>
				<h2 id="certifications-title">Formacion y logros</h2>
				<p>
					Certificaciones y cursos que respaldan mi perfil tecnico y mi aprendizaje continuo.
				</p>
			</div>

			<div className="certifications-grid">
				{certifications.map((certification) => (
					<article className="certification-card" key={`${certification.title}-${certification.year}`}>
						<p className="experience-period">{certification.year}</p>
						<h3>{certification.title}</h3>
						<p className="education-company">{certification.issuer}</p>
						{certification.hours ? (
							<p className="experience-summary">{certification.hours}</p>
						) : null}
					</article>
				))}
			</div>
		</section>
	)
}

export default Certifications
