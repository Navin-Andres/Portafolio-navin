function Contacts() {
	return (
		<section className="contacts-screen" id="contactos" aria-labelledby="contacts-title">
			<div className="contacts-header">
				<p className="projects-eyebrow">Contactos</p>
				<h2 id="contacts-title">Conectemos</h2>
				<p>
					Estoy abierto a oportunidades laborales, proyectos freelance y colaboraciones.
				</p>
			</div>

			<div className="contacts-grid">
				<a href="mailto:navinbalmaceda83@gmail.com" className="contact-card">
					<span className="contact-icon" aria-hidden="true">
						<svg viewBox="0 0 24 24"><path d="M3.5 5.5h17v13h-17zM4.5 6.5 12 12l7.5-5.5" /></svg>
					</span>
					<span>Email</span>
					<small>navinbalmaceda83@gmail.com</small>
				</a>
				<a href="https://www.linkedin.com/in/navin-balmaceda/" target="_blank" rel="noreferrer" className="contact-card">
					<span className="contact-icon" aria-hidden="true">
						<svg viewBox="0 0 24 24"><path d="M6.2 9.2H3.4V21h2.8V9.2ZM4.8 3A1.7 1.7 0 1 0 4.8 6.4 1.7 1.7 0 0 0 4.8 3ZM20.8 14.2c0-3.6-1.9-5.3-4.5-5.3-2.1 0-3 1.2-3.5 2v-1.7H10V21h2.8v-5.8c0-1.5.3-3 2.2-3 1.9 0 2.1 1.7 2.1 3.1V21h2.8v-6.8Z" /></svg>
					</span>
					<span>LinkedIn</span>
					<small>navin-balmaceda</small>
				</a>
				<a href="https://github.com/Navin-Andres" target="_blank" rel="noreferrer" className="contact-card">
					<span className="contact-icon" aria-hidden="true">
						<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.19-3.37-1.19-.46-1.16-1.11-1.47-1.11-1.47-.91-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.9 1.54 2.35 1.1 2.92.84.09-.66.35-1.1.63-1.36-2.22-.25-4.55-1.12-4.55-4.99 0-1.1.39-2 1.03-2.71-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.55 1.39.2 2.42.1 2.67.64.71 1.03 1.61 1.03 2.71 0 3.88-2.34 4.73-4.57 4.98.36.31.68.91.68 1.84v2.73c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" /></svg>
					</span>
					<span>GitHub</span>
					<small>Navin-Andres</small>
				</a>
			</div>
		</section>
	)
}

export default Contacts
