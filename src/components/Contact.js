import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>CONTACT</h2>

      <p className="contact-text">
        Interested in collaborating or discussing new opportunities?
        Feel free to get in touch.
      </p>

      <a href="mailto:balajinandane@gmail.com" className="btn-outline">
        SEND EMAIL
      </a>

      <footer className="footer">
        © {new Date().getFullYear()} Balaji Nandane
      </footer>
    </section>
  );
}
