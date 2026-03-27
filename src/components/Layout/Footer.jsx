import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Otaku's RPG - Sistema de Fichas</p>
    </footer>
  );
}

export default Footer;