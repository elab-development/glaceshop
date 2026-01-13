import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © 2025 Sladoledi San • Beograd • Ustanička 123 • 063/123-456 • 
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="instagram-link"
          >
            Instagram @sladoledisan
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;