import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Hero.css";
import foto from "../assets/rafael.jpg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        

        <h1>
          Rafael Martins <br />
          Soares
        </h1>

        <h2>Desenvolvedor Full Stack</h2>

        <p>
          Desenvolvedor apaixonado por tecnologia, criando aplicações web e
          mobile utilizando React, React Native, Node.js e TypeScript.
          Transformando conhecimento em soluções reais.
        </p>

        <div className="buttons">
          <button>Ver Projetos</button>
          <button className="secondary"> Baixar CV</button>
        </div>

        <div className="social-icons">
  <a
    href="https://github.com/Rafasoares96"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub size={32} />
  </a>

  <a
    href="https://www.linkedin.com/in/rafaelmartinssoares/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin size={32} />
  </a>
</div>
      </div>

      <div className="hero-image">
        <img src={foto} alt="Rafael" />
      </div>

    </section>
  );
}

export default Hero;