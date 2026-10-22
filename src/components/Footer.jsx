
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#home" className="footer-logo">
          druti<span>.</span>
        </a>

        <div className="footer-text">
          <p>Designed &amp; built with care.</p>
          <p>
            © {new Date().getFullYear()} Druti Ghag. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
