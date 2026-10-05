import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Validate single field
  const validateField = (name, value) => {
    const valueTrimmed = value.trim();

    switch (name) {
      case "name":
        if (!valueTrimmed) {
          return "Name is required.";
        }

        if (valueTrimmed.length < 2) {
          return "Name must be at least 2 characters.";
        }

        if (valueTrimmed.length > 50) {
          return "Name cannot exceed 50 characters.";
        }

        if (!/^[a-zA-Z\s.'-]+$/.test(valueTrimmed)) {
          return "Name contains invalid characters.";
        }

        return "";

      case "email":
        if (!valueTrimmed) {
          return "Email is required.";
        }

        if (valueTrimmed.length > 100) {
          return "Email cannot exceed 100 characters.";
        }

        if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
            valueTrimmed
          )
        ) {
          return "Please enter a valid email address.";
        }

        return "";

      case "subject":
        if (!valueTrimmed) {
          return "Subject is required.";
        }

        if (valueTrimmed.length < 3) {
          return "Subject must be at least 3 characters.";
        }

        if (valueTrimmed.length > 150) {
          return "Subject cannot exceed 150 characters.";
        }

        return "";

      case "message":
        if (!valueTrimmed) {
          return "Message is required.";
        }

        if (valueTrimmed.length < 10) {
          return "Message must be at least 10 characters.";
        }

        if (valueTrimmed.length > 2000) {
          return "Message cannot exceed 2000 characters.";
        }

        return "";

      default:
        return "";
    }
  };

  // Validate all fields
  const validateForm = (data) => {
    const newErrors = {};

    Object.keys(data).forEach((field) => {
      const error = validateField(field, data[field]);

      if (error) {
        newErrors[field] = error;
      }
    });

    return newErrors;
  };

  // Handle typing
  const handleChange = (e) => {
    const { name, value } = e.target;

    const error = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    // Clear success/error message when user modifies form
    if (status) {
      setStatus("");
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setStatus("");

    const formData = new FormData(form.current);

    const data = {
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      subject: formData.get("subject") || "",
      message: formData.get("message") || "",
    };

    const validationErrors = validateForm(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors({
        name: validationErrors.name || "",
        email: validationErrors.email || "",
        subject: validationErrors.subject || "",
        message: validationErrors.message || "",
      });

      return;
    }

    setErrors({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setIsSending(true);

    try {
      await emailjs.sendForm(
        emailServiceId,
        emailTemplateId,
        form.current,
        emailPublicKey
      );

      setStatus("success");

      form.current.reset();

      setErrors({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Success SweetAlert
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Your message has been sent successfully.",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");

      // Error SweetAlert
      Swal.fire({
        icon: "error",
        title: "Failed to Send",
        text: "Failed to send your message. Please try again.",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

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
              <a href={`mailto:${contactEmail}`}>
                📧 {contactEmail}
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                💼 LinkedIn
              </a>

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
            noValidate
          >

            {/* Name */}
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                maxLength={50}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />

              {errors.name && (
                <span className="field-error">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                maxLength={100}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />

              {errors.email && (
                <span className="field-error">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Subject */}
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                maxLength={150}
                onChange={handleChange}
                className={errors.subject ? "input-error" : ""}
              />

              {errors.subject && (
                <span className="field-error">
                  {errors.subject}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="form-group">
              <textarea
                name="message"
                rows="3"
                placeholder="Your Message"
                maxLength={2000}
                onChange={handleChange}
                className={errors.message ? "input-error" : ""}
              />

              {errors.message && (
                <span className="field-error">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn primary-btn"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {/* Success */}
            {status === "success" && (
              <p className="form-status success">
                {/* ✅ Message sent successfully! */}
              </p>
            )}

            {/* Error */}
            {status === "error" && (
              <p className="form-status error">
                {/* ❌ Failed to send message. Please try again. */}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
