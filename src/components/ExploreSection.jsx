import { useState, useEffect } from "react";
import "./ExploreSection.css";

function ExploreSection() {
  const properties = [
    { id: 1, title: "Modern Studio", location: "Mumbai", price: "₹12,000/month", rating: "4.8", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600" },
    { id: 2, title: "Luxury Co-Living", location: "Pune", price: "₹15,000/month", rating: "4.9", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600" },
    { id: 3, title: "Student Residence", location: "Bangalore", price: "₹9,000/month", rating: "4.7", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600" },
    { id: 4, title: "Premium Apartment", location: "Hyderabad", price: "₹18,000/month", rating: "4.9", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600" },
    { id: 5, title: "Skyline PG", location: "Delhi", price: "₹11,500/month", rating: "4.6", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600" },
    { id: 6, title: "Green Nest", location: "Chennai", price: "₹10,000/month", rating: "4.5", image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600" },
    { id: 7, title: "Urban Heights", location: "Kolkata", price: "₹13,000/month", rating: "4.8", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600" },
    { id: 8, title: "City Comfort", location: "Ahmedabad", price: "₹9,500/month", rating: "4.4", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600" },
    { id: 9, title: "Elite Living", location: "Jaipur", price: "₹14,000/month", rating: "4.7", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600" },
    { id: 10, title: "Lake View Residency", location: "Nashik", price: "₹10,500/month", rating: "4.6", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600" },
    { id: 11, title: "The Urban Nest", location: "Thane", price: "₹13,500/month", rating: "4.8", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600" },
    { id: 12, title: "Royal Heights", location: "Noida", price: "₹16,000/month", rating: "4.9", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600" },
    { id: 13, title: "Green Valley Homes", location: "Chandigarh", price: "₹12,000/month", rating: "4.7", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600" },
    { id: 14, title: "Silver Oak Apartments", location: "Mysore", price: "₹9,500/month", rating: "4.5", image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600" },
    { id: 15, title: "Sunset Residency", location: "Kochi", price: "₹11,500/month", rating: "4.6", image: "https://images.unsplash.com/photo-1600607687644-c7f34c4b6f1d?w=600" },
    { id: 16, title: "Pearl Living", location: "Visakhapatnam", price: "₹14,000/month", rating: "4.8", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600" },
    { id: 17, title: "Ocean Breeze Stay", location: "Goa", price: "₹18,500/month", rating: "4.9", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600" },
    { id: 18, title: "Metro Elite Homes", location: "Gurugram", price: "₹17,000/month", rating: "4.8", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600" },
    { id: 19, title: "Harmony Apartments", location: "Nagpur", price: "₹10,000/month", rating: "4.5", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600" },
    { id: 20, title: "Crystal Residency", location: "Aurangabad", price: "₹11,000/month", rating: "4.6", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600" },
    { id: 21, title: "The Grand Habitat", location: "Indore", price: "₹13,000/month", rating: "4.7", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600" },
    { id: 22, title: "Palm Grove Living", location: "Bhubaneswar", price: "₹12,500/month", rating: "4.7", image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600" },
    { id: 23, title: "Skyline Suites", location: "Vadodara", price: "₹14,500/month", rating: "4.8", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600" },
    { id: 24, title: "Comfort Corner", location: "Coimbatore", price: "₹9,800/month", rating: "4.5", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600" },
    { id: 25, title: "Royal Heights", location: "Noida", price: "₹16,000/month", rating: "4.9", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600" },
    { id: 26, title: "Emerald Residency", location: "Patna", price: "₹11,500/month", rating: "4.6", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600" },
    { id: 27, title: "Golden Heights", location: "Raipur", price: "₹12,800/month", rating: "4.7", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600" },
    { id: 28, title: "Blue Horizon", location: "Jodhpur", price: "₹13,500/month", rating: "4.8", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600" },
    { id: 29, title: "Prestige Living", location: "Amritsar", price: "₹15,000/month", rating: "4.9", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600" },
    { id: 30, title: "Riverfront Homes", location: "Ranchi", price: "₹10,500/month", rating: "4.5", image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600" }// Paste your 30 property objects here
  ];

  const [startIndex, setStartIndex] = useState(0);

  const cardsToShow = 4;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + cardsToShow) % properties.length);
  };

  const prevSlide = () => {
    setStartIndex(
      (prev) =>
        (prev - cardsToShow + properties.length) % properties.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const visibleProperties = [];

  for (let i = 0; i < cardsToShow; i++) {
    visibleProperties.push(
      properties[(startIndex + i) % properties.length]
    );
  }

  return (
    <section id = "explore" className="explore">
      <div className="explore-header">
        <h2>Explore Properties</h2>
        <p>
          Discover premium co-living spaces tailored to your lifestyle.
        </p>
      </div>

      <div className="slider-container">
        <button className="arrow" onClick={prevSlide}>
          ❮
        </button>

        <div className="property-grid">
          {visibleProperties.map((property) => (
            <div className="property-card" key={property.id}>
              <img src={property.image} alt={property.title} />

              <div className="property-content">
                <h3>{property.title}</h3>

                <p>📍 {property.location}</p>

                <div className="property-info">
                  <span>{property.price}</span>
                  <span>⭐ {property.rating}</span>
                </div>

                <button className="view-btn">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </section>
  );
}

export default ExploreSection;