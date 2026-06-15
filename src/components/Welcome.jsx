import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Welcome.css";

function Welcome() {
  const properties = [
    {
      id: 1,
      title: "Modern Villa",
      location: "Bandra, Mumbai",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Luxury Apartment",
      location: "Andheri West",
      image:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Beach House",
      location: "Goa",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "City Studio",
      location: "Pune",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="welcome-page">

      {/* ✅ NAVBAR ADDED HERE */}
      <Navbar />

      <div className="welcome-header">
        <h1>Lumina Living</h1>
        <p>Find your dream home with ease and confidence</p>

        <Link to="/signup">
          <button className="explore-btn">
            Get Started
          </button>
        </Link>
      </div>

      <div className="property-grid" id="explore">
        {properties.map((item) => (
          <div key={item.id} className="property-card">
            <img src={item.image} alt={item.title} />
            <div className="property-info">
              <h3>{item.title}</h3>
              <p>{item.location}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Welcome;