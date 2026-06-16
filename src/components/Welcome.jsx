import { Link } from "react-router-dom";
import HeroSection1 from "./HeroSection1.jsx";
import Navbar from "./Navbar.jsx";
import FooterSection from "./FooterSection.jsx";
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
    {
      id: 5,
      title: "Premium Penthouse",
      location: "Powai, Mumbai",
      price: "₹1,50,000 / month",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Lake View Home",
      location: "Udaipur",
      price: "₹90,000 / month",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="welcome-page">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection1 />

      {/* Featured Section */}
      <section className="featured-section">
        <div className="section-title">
          <span>FEATURED PROPERTIES</span>
          <h2>Popular Stays</h2>
          <p>
            Handpicked homes designed to provide comfort, luxury,
            and an unforgettable living experience.
          </p>
        </div>

        <div className="property-grid" id="explore">
          {properties.map((item) => (
            <div key={item.id} className="airbnb-card">
              <div className="image-wrapper">
                <img src={item.image} alt={item.title} />

                <div className="rating">
                  ⭐ {item.rating}
                </div>
              </div>

              <div className="card-content">
                <h3>{item.title}</h3>

                <p className="location">
                  📍 {item.location}
                </p>

                <div className="card-bottom">
                  <span className="price">
                    {item.price}
                  </span>

                  <button className="view-btn">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="why-card">
          <span>🏠</span>
          <h3>Premium Homes</h3>
          <p>
            Carefully selected apartments, villas,
            and luxury spaces.
          </p>
        </div>

        <div className="why-card">
          <span>🔒</span>
          <h3>Safe & Secure</h3>
          <p>
            Verified listings and secure booking
            experience.
          </p>
        </div>

        <div className="why-card">
          <span>⭐</span>
          <h3>Top Rated</h3>
          <p>
            Thousands of happy customers trust
            Lumina Living.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Find Your Perfect Home?</h2>

        <p>
          Join Lumina Living today and discover
          premium stays across India.
        </p>

        <Link to="/signup">
          <button className="cta-btn">
            Create Free Account
          </button>
        </Link>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}

export default Welcome;