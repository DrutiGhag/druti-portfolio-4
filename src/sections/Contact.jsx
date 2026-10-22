
import Reveal from '../components/Reveal';
import './Contact.css';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

function Contact() {
  return (
    <section className="contact section-container" id="contact">
      <Reveal className="contact-card" y={40}>
        <p className="section-eyebrow">LET'S CONNECT</p>

        <h2>
          Have a project in mind?
          <span> Let's build something.</span>
        </h2>

        <p className="contact-description">
          I'm open to software engineering opportunities, collaborative
          projects and conversations about technology. Feel free to reach out!
        </p>

        <a
          href="mailto:drutighag2003@gmail.com"
          className="button button-primary contact-email"
        >
          <Mail size={18} />
          Get in touch
          <ArrowUpRight size={18} />
        </a>

        <div className="contact-details">
          <div>
            <Mail size={18} />
            <span>drutighag2003@gmail.com</span>
          </div>

          <div>
            <Phone size={18} />
            <span>+91 98192 52664</span>
          </div>

          <div>
            <MapPin size={18} />
            <span>Mumbai, India</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;
