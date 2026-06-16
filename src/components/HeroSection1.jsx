import { Link } from "react-router-dom";
import "./HeroSection1.css";

function HeroSection1() {
  return (
    <section className="hero-section1">
      <div className="hero-overlay">

        <div className="hero-content">

          <span className="hero-badge">
            ✨ Trusted by 10,000+ renters
          </span>

          <h1>
            Find Your Dream Home
            <br />
            With Ease
          </h1>

          <p>
            Explore premium apartments, villas, and rooms
            across India with comfort and confidence.
          </p>

          <div className="hero-buttons">
            <Link to="/signup">
              <button className="primary-btn">
                Get Started
              </button>
            </Link>

            <a href="#explore">
              <button className="secondary-btn">
                Explore Homes
              </button>
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>500+</h3>
              <span>Properties</span>
            </div>

            <div>
              <h3>50+</h3>
              <span>Cities</span>
            </div>

            <div>
              <h3>10K+</h3>
              <span>Happy Users</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection1;