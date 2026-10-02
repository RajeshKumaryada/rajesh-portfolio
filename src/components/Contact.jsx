import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
const githubUrl = import.meta.env.VITE_GITHUB_URL;
const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;

const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        emailServiceId,
        emailTemplateId,
        form.current,
        emailPublicKey
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        {/* Section Title */}
        <div className="section-title">
          <span>06.</span>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-grid">

          {/* Contact Information */}
          <div className="contact-content">
            <h3>Let's work together</h3>

            <p>
              I am currently open to Laravel, React.js and Full Stack
              Developer opportunities.
            </p>

            <div className="contact-links">

              {/* Email */}
              <a href={`mailto:${contactEmail}`}>
                📧 {contactEmail}
              </a>

              {/* LinkedIn */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                💼 LinkedIn
              </a>

              {/* GitHub */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 GitHub
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            className="contact-form"
            onSubmit={sendEmail}
          >

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            {/* Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn primary-btn"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {/* Success Message */}
            {status === "success" && (
              <p className="form-status success">
                ✅ Message sent successfully!
              </p>
            )}

            {/* Error Message */}
            {status === "error" && (
              <p className="form-status error">
                ❌ Failed to send message. Please try again.
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}