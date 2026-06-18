import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
      }
    );

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);

    setDropdownOpen(false);
    setMenuOpen(false);

    navigate("/");
  };

  const scrollToExplore = () => {
    const explore =
      document.getElementById("explore");

    if (explore) {
      explore.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* LOGO */}

      <div className="logo">
        <div className="logo-box">
          M
        </div>

        <h2>
          Lumina Living
        </h2>
      </div>

      {/* LINKS */}

      <ul
        className={`nav-links ${
          menuOpen ? "active" : ""
        }`}
      >
        <li>
          <Link
            to="/"
            onClick={() =>
              setMenuOpen(false)
            }
          >
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
          <a href="/">
            Matches
          </a>
        </li>

        <li>
          <a href="/">
            Stories
          </a>
        </li>

        {/* MOBILE USER AREA */}

        <li className="mobile-user">
          {user ? (
            <>
              <img
                className="mobile-profile-photo"
                src={
                  user.photoURL ||
                  "https://i.pravatar.cc/100"
                }
                alt="profile"
              />

              <button
                className="mobile-profile-btn"
                onClick={() => {
                  navigate("/profile");
                  setMenuOpen(false);
                }}
              >
                My Profile
              </button>

              <button
                className="mobile-logout-btn"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="mobile-login-btn"
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
            >
              Login
            </button>
          )}
        </li>
      </ul>

      {/* RIGHT SECTION */}

      <div className="nav-right">
        {user ? (
          <div className="profile-dropdown">
            <img
              className="profile-photo"
              src={
                user.photoURL ||
                "https://i.pravatar.cc/100"
              }
              alt="profile"
              onClick={() =>
                setDropdownOpen(
                  !dropdownOpen
                )
              }
            />

            {dropdownOpen && (
              <div className="dropdown-menu">
                <button
                  onClick={() => {
                    navigate("/profile");
                    setDropdownOpen(false);
                  }}
                >
                  My Profile
                </button>

                <button
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="login-btn"
            onClick={() =>
              navigate("/login")
            }
          >
            Login
          </button>
        )}

        <button className="room-btn">
          List a Room
        </button>

        {/* HAMBURGER */}

        <div
          className={`hamburger ${
            menuOpen ? "active" : ""
          }`}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
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