import "./FooterSection.css";

function FooterSection() {
  const scrollToExplore = () => {
    document
      .getElementById("explore")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToReviews = () => {
    document
      .getElementById("reviews")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand */}
        <div className="footer-brand">
          <h2>Lumina Living</h2>
          <p>
            Find your perfect co-living space and connect
            with compatible roommates.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <button onClick={scrollToExplore} className="footer-link">
            Explore
          </button>

          <button onClick={scrollToReviews} className="footer-link">
            Reviews
          </button>

          <button onClick={scrollToContact} className="footer-link">
            Contact
          </button>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <p>hello@luminaliving.com</p>
          <p>+91 98765 43210</p>
          <p>Mumbai, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Lumina Living. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default FooterSection;