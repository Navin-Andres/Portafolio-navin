function Education() {
	return (
		<section className="education-screen" id="educacion" aria-labelledby="education-title">
			<div className="education-header">
				<p className="projects-eyebrow">Educación</p>
				<h2 id="education-title">Formación académica</h2>
				<p>
					Mi formación combina ingeniería, soporte técnico y enfoque práctico para construir y mantener soluciones digitales.
				</p>
			</div>

			<div className="education-grid">
				<article className="education-card">
					<p className="education-period">Feb 2023 - Dic 2026</p>
					<h3>Ingeniería de Sistemas</h3>
					<p className="education-company">Fundación Universitaria del Área Andina</p>
					<p className="education-summary">Últimos semestres, graduación esperada en 2026.</p>
				</article>

				<article className="education-card">
					<p className="education-period">SENA - Colombia</p>
					<h3>Tecnólogo en Mantenimiento de Equipos de Cómputo</h3>
					<p className="education-company">Diseño e Instalación de Cableado Estructurado</p>
					<p className="education-summary">Base técnica en soporte, infraestructura y redes.</p>
				</article>
			</div>
		</section>
	)
}

export default Education
