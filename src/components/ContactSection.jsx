import { useState } from "react";
import "./ContactSection.css";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className="contact" id="contact">
      {/* Left Side */}
      <div className="contact-left">
        <h2>Get in Touch</h2>

        <p>
          Have questions about finding your perfect living space?
          We'd love to hear from you. Reach out anytime and our
          team will get back to you as soon as possible.
        </p>

        <div className="contact-info">
          <div className="info-box">
            <h4>📧 Email</h4>
            <p>hello@luminaliving.com</p>
          </div>

          <div className="info-box">
            <h4>📞 Phone</h4>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <h4>📍 Location</h4>
            <p>Mumbai, India</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="👤 Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="📧 Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="💬 Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message →
          </button>

          {submitted && (
            <div
              style={{
                marginTop: "15px",
                color: "#7c3aed",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              ✅ Message sent successfully!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;