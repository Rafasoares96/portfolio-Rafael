import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Code Café",
      description:
        "Aplicação desenvolvida em HTML CSS JAVA SCRIPT para elevar minhas habilidades front end, em breve adicionarei Back End",
      tech: "HTML • CSS • JavaScript",
      github: "https://github.com/Rafasoares96/cafeteria.git",
      demo: "#",
    },
    {
      title: "RJMax Energia Solar",
      description:
        "Site responsivo para empresa de energia solar, com painel administrativo e galeria dinâmica, Projeto real.",
      tech: "HTML • CSS • JavaScript • Node.js",
      github: "https://github.com/Rafasoares96/site-loja-placa-solar-front.git",
      demo: "https://rjmaxenergiasolar.com.br/",
    },
  ];

  return (
    <section id="projetos" className="projects">
      <h2>Projetos</h2>

      <p className="projects-subtitle">
        Alguns projetos desenvolvidos por mim.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.tech}</span>

            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href={project.demo} target="_blank" rel="noreferrer">
                Ver Projeto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;