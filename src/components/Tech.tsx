import "../styles/Tech.css";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiReact,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: <FaReact />,
    className: "react",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    className: "typescript",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    className: "javascript",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    className: "node",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    className: "express",
  },
  {
    name: "React Native",
    icon: <SiReact />,
    className: "react",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    className: "git",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    className: "github",
  },
];

function Tech() {
  return (
    <section id="tecnologias" className="tech">
      <h2>Tecnologias</h2>

      <p className="tech-subtitle">
        Tecnologias que utilizo no desenvolvimento de aplicações web e mobile.
      </p>

      <div className="tech-grid">
        {technologies.map((tech) => (
        <div className="tech-card" key={tech.name}>
  <div className={`tech-icon ${tech.className}`}>
    {tech.icon}
  </div>

            <h3>{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tech;