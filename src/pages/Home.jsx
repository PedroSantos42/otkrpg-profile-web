import './Home.css';

function Home({ onNewCharacter }) {
  return (
    <div className="home fade-in">
      <div className="hero">
        <div className="hero-content">
          <h1>Bem-vindo ao Otaku's RPG</h1>
          <p className="hero-subtitle">
            O sistema definitivo para criar e gerenciar seus personagens de RPG
          </p>
          <div className="hero-buttons">
            <button className="btn-primary btn-large" onClick={onNewCharacter}>
              🎲 Criar Nova Ficha
            </button>
            <button className="btn-secondary btn-large">
              📖 Explorar Personagens
            </button>
          </div>
        </div>
      </div>

      <div className="features">
        <h2>Recursos Incríveis</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Criação Simplificada</h3>
            <p>Crie fichas de personagem de forma intuitiva e rápida</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💾</div>
            <h3>Salvamento Automático</h3>
            <p>Seus personagens são salvos automaticamente no navegador</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Design Moderno</h3>
            <p>Interface bonita e responsiva para uma experiência incrível</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Sistema de Atributos</h3>
            <p>Sistema completo de atributos e modificadores</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;