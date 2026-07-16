import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "SuperViaApp",
      description:
        "Aplicativo mobile desenvolvido em React Native para consulta de trens, rotas e informações da SuperVia.",
      tech: "React Native • TypeScript",
      github: "#",
      demo: "#",
    },
    {
      title: "RJMax Energia Solar",
      description:
        "Site institucional responsivo para empresa de energia solar, com painel administrativo e galeria dinâmica.",
      tech: "HTML • CSS • JavaScript • Node.js",
      github: "#",
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