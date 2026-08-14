function Footer() {
	return (
		<footer className="site-footer">
			<div className="site-footer-inner">
				<div className="footer-brand-block">
					<p className="footer-eyebrow">Portfolio</p>
					<h2>Navin Balmaceda</h2>
					<p>
						Desarrollador full stack enfocado en interfaces, backend, datos y soluciones
						funcionales.
					</p>
				</div>

				<div className="footer-links-block" aria-label="Enlaces del pie de pagina">
					<a href="https://github.com/NavinBalmaceda" target="_blank" rel="noreferrer">
						GitHub
					</a>
					<a href="#contactos">Contacto</a>
					<a href="#inicio">Acerca de mi</a>
				</div>
			</div>

			<div className="site-footer-bottom">
				<span>Disenado y desarrollado por Navin Balmaceda.</span>
				<span>Disponible para nuevos proyectos.</span>
			</div>
		</footer>
	)
}

export default Footer
