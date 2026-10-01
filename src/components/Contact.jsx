export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-title">
          <span>06.</span>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-content">
            <h3>Let's work together</h3>

            <p>
              I am currently open to Laravel, React.js and Full Stack
              Developer opportunities.
            </p>

            <div className="contact-links">
              <a href="mailto:rjshkumaryadav3@gmail.com">
                📧 rjshkumaryadav3@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/rajesh-kyadav"
                target="_blank"
                rel="noreferrer"
              >
                💼 LinkedIn
              </a>

              <a
                href="https://github.com/RajeshKumaryada"
                target="_blank"
                rel="noreferrer"
              >
                💻 GitHub
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            action="mailto:rjshkumaryadav3@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <input type="text" name="name" placeholder="Your Name" required />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit" className="btn primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}