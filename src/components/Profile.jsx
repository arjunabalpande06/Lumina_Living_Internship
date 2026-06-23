import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
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

  if (!user) {
    return (
      <div className="profile-loading">
        <h2>Please Login First</h2>
      </div>
    );
  }

  return (
    <div className="profile-page">
      {/* Cover Section */}
      <div className="profile-cover">
        <div className="cover-overlay"></div>

        <div className="profile-header">
          <img
            src={
              user.photoURL ||
              "https://i.pravatar.cc/200"
            }
            alt="Profile"
            className="profile-avatar"
          />

          <h1>
            {user.displayName || "Lumina User"}
          </h1>

          <p>{user.email}</p>

          <button
            className="edit-btn"
            onClick={() =>
              alert("Edit Profile Coming Soon")
            }
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>12</h2>
          <p>Saved Homes</p>
        </div>

        <div className="stat-card">
          <h2>5</h2>
          <p>Matches</p>
        </div>

        <div className="stat-card">
          <h2>3</h2>
          <p>Bookings</p>
        </div>
      </div>

      {/* Details */}
      <div className="profile-content">
        <div className="info-card">
          <h2>Personal Information</h2>

          <div className="info-row">
            <span>Name</span>
            <strong>
              {user.displayName || "Not Set"}
            </strong>
          </div>

          <div className="info-row">
            <span>Email</span>
            <strong>{user.email}</strong>
          </div>

          <div className="info-row">
            <span>Email Verified</span>
            <strong>
              {user.emailVerified
                ? "Yes"
                : "No"}
            </strong>
          </div>

          <div className="info-row">
            <span>User ID</span>
            <strong>
              {user.uid.substring(0, 12)}
              ...
            </strong>
          </div>
        </div>

        <div className="action-card">
          <h2>Quick Actions</h2>

          <button
            onClick={() => navigate("/")}
          >
            Browse Properties
          </button>

          <button>
            Saved Properties
          </button>

          <button>
            My Bookings
          </button>

          <button>
            List a Property
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;