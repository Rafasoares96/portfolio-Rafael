import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        Rafael<span>.Dev</span>
      </div>

      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#tecnologias">Tecnologias</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

export default Header;