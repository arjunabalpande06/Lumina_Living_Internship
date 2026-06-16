import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import FooterSection from "./FooterSection";
import "./Welcome.css";

function Welcome() {
  const properties = [
    {
      id: 1,
      title: "Modern Villa",
      location: "Bandra, Mumbai",
      price: "₹85,000 / month",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Luxury Apartment",
      location: "Andheri West, Mumbai",
      price: "₹65,000 / month",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Beach House",
      location: "Goa",
      price: "₹1,20,000 / month",
      rating: "5.0",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "City Studio",
      location: "Pune",
      price: "₹35,000 / month",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="welcome-page">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <div className="hero">
        <h1>Find your perfect stay</h1>
        <p>Discover beautiful homes, rooms, and villas curated for you</p>

        <Link to="/signup">
          <button className="hero-btn">
            Get Started
          </button>
        </Link>
      </div>

      {/* SECTION TITLE */}
      <div className="section-title">
        <h2>Popular Stays</h2>
        <p>Top-rated homes chosen for comfort & lifestyle</p>
      </div>

      {/* PROPERTY GRID */}
      <div className="property-grid" id="explore">

        {properties.map((item) => (
          <div key={item.id} className="airbnb-card">

            {/* IMAGE */}
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />

              <div className="rating">
                ⭐ {item.rating}
              </div>
            </div>

            {/* INFO */}
            <div className="card-content">

              <div className="card-top">
                <h3>{item.title}</h3>
              </div>

              <p className="location">{item.location}</p>

              <div className="card-bottom">
                <span className="price">{item.price}</span>

                <button className="view-btn">
                  View
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* FOOTER */}
      <FooterSection />

    </div>
  );
}

export default Welcome;