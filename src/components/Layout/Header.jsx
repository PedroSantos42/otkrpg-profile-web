import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">🎲</span>
          <div className="logo-text">
            <h1>Otaku's RPG</h1>
            <p>Sistema de Fichas</p>
          </div>
        </div>
        <nav className="nav">
          <a href="/" className="nav-link">Início</a>
          <a href="/characters" className="nav-link">Personagens</a>
          <a href="/new" className="nav-link btn-primary">Criar Ficha</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;