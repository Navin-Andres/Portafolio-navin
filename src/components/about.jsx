function About() {
  return (
    <section className="about-screen" id="about" aria-labelledby="about-title">
      <div className="about-header">
        <p className="projects-eyebrow">About me</p>
        <h1 id="about-title">Sobre mi</h1>
        <p>
          Soy desarrollador Full Stack y estudiante de Ingenieria de Sistemas, enfocado en crear soluciones digitales utiles, claras y faciles de usar.
        </p>
      </div>

      <div className="about-grid">
        <article className="about-card about-card-featured">
          <h2>Mi enfoque</h2>
          <p>
            Combino desarrollo web y movil con una mirada practica: entender el problema, proponer una solucion y construir una experiencia funcional para las personas que la usan.
          </p>
        </article>

        <article className="about-card">
          <h2>Lo que hago</h2>
          <ul>
            <li>Desarrollo de aplicaciones web con React y Node.js.</li>
            <li>Aplicaciones moviles con Flutter.</li>
            <li>Integracion de bases de datos y servicios en la nube.</li>
          </ul>
        </article>

        <article className="about-card">
          <h2>Como trabajo</h2>
          <ul>
            <li>Aprendizaje continuo y atencion al detalle.</li>
            <li>Comunicacion cercana con equipos y usuarios.</li>
            <li>Soluciones mantenibles y orientadas a resultados.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default About
