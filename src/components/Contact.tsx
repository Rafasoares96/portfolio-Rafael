import "../styles/Contact.css";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contato" className="contact">
      <h2>Contato</h2>

      <p>
        Entre em Contato comigo estou disponível para novos projetos e oportunidades.
      </p>

      <div className="contact-links">
        <a href="mailto:seuemail@email.com">
          <FaEnvelope />
          Email
        </a>

        <a href="https://github.com/Rafasoares96">
          <FaGithub />
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/rafaelmartinssoares/">
          <FaLinkedin />
          LinkedIn
        </a>

         <a href="https://Instagram.com/in/SEU_USUARIO">
          <FaInstagram />
          Instagram
        </a>
      
      </div>
    </section>
  );
}

export default Contact;