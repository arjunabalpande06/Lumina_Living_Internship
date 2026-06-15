import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToExplore = () => {
    const exploreSection = document.getElementById("explore");

    if (exploreSection) {
      exploreSection.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <div className="logo-box">M</div>
        <h2>Lumina Living</h2>
      </div>

      {/* Navigation */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <a
            href="#explore"
            onClick={(e) => {
              e.preventDefault();
              scrollToExplore();
            }}
          >
            Explore
          </a>
        </li>

        <li>
          <a href="/" onClick={closeMenu}>
            Matches
          </a>
        </li>

        <li>
          <a href="/" onClick={closeMenu}>
            Stories
          </a>
        </li>

        {/* Mobile Buttons */}
        <li className="mobile-buttons">
          <button
            className="mobile-login-btn"
            onClick={() => {
              navigate("/login");
              closeMenu();
            }}
          >
            Login
          </button>

          <button className="mobile-room-btn">
            List a Room
          </button>
        </li>
      </ul>

      {/* Right Side */}
      <div className="nav-right">
        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button className="room-btn">
          List a Room
        </button>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;