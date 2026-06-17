import { useState } from "react";
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
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Luxury Apartment",
      location: "Andheri West, Mumbai",
      price: "₹65,000 / month",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Beach House",
      location: "Goa",
      price: "₹1,20,000 / month",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "City Studio",
      location: "Pune",
      price: "₹35,000 / month",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Premium Penthouse",
      location: "Powai, Mumbai",
      price: "₹1,50,000 / month",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Lake View Home",
      location: "Udaipur",
      price: "₹90,000 / month",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Royal Heritage Villa",
      location: "Jaipur",
      price: "₹95,000 / month",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "Hilltop Cottage",
      location: "Manali",
      price: "₹55,000 / month",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      title: "Urban Loft",
      location: "Bengaluru",
      price: "₹60,000 / month",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 10,
      title: "Sea View Apartment",
      location: "Marine Drive, Mumbai",
      price: "₹1,10,000 / month",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 11,
      title: "Nature Retreat",
      location: "Coorg",
      price: "₹70,000 / month",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 12,
      title: "Luxury Duplex",
      location: "Hyderabad",
      price: "₹80,000 / month",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 13,
      title: "Garden Villa",
      location: "Lonavala",
      price: "₹75,000 / month",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 14,
      title: "Skyline Residence",
      location: "Gurugram",
      price: "₹88,000 / month",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 15,
      title: "Luxury Farmhouse",
      location: "Nashik",
      price: "₹1,00,000 / month",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 16,
      title: "Executive Suite",
      location: "Chennai",
      price: "₹58,000 / month",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 17,
      title: "Riverside Retreat",
      location: "Kerala",
      price: "₹92,000 / month",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 18,
      title: "Elite Residence",
      location: "Delhi",
      price: "₹1,25,000 / month",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 19,
      title: "Ocean Breeze Villa",
      location: "Alibaug",
      price: "₹1,10,000 / month",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 20,
      title: "Green Valley Cottage",
      location: "Munnar",
      price: "₹62,000 / month",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 21,
      title: "Grand Penthouse",
      location: "Worli, Mumbai",
      price: "₹2,00,000 / month",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 22,
      title: "Sunset Apartment",
      location: "Kochi",
      price: "₹55,000 / month",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 23,
      title: "Palm Tree Villa",
      location: "Goa",
      price: "₹1,35,000 / month",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 24,
      title: "Elite City Home",
      location: "Noida",
      price: "₹68,000 / month",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 25,
      title: "Mountain Escape",
      location: "Shimla",
      price: "₹72,000 / month",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 26,
      title: "Luxury Sky Villa",
      location: "Bengaluru",
      price: "₹1,45,000 / month",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 27,
      title: "Royal Mansion",
      location: "Lucknow",
      price: "₹1,80,000 / month",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 28,
      title: "Lakeside Villa",
      location: "Nainital",
      price: "₹95,000 / month",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 29,
      title: "Modern Duplex",
      location: "Ahmedabad",
      price: "₹70,000 / month",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 30,
      title: "Golden Residency",
      location: "Indore",
      price: "₹52,000 / month",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 31,
      title: "Urban Heights",
      location: "Nagpur",
      price: "₹48,000 / month",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 32,
      title: "The White House",
      location: "Chandigarh",
      price: "₹82,000 / month",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 33,
      title: "Crystal Villa",
      location: "Mysuru",
      price: "₹88,000 / month",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
    }

  ];



  const [showAll, setShowAll] = useState(false);

  const displayedProperties = showAll
    ? properties
    : properties.slice(0, 8);



  return (
    <div className="welcome-page">

      <Navbar />

      <HeroSection1 />


      <section className="featured-section">

        <div className="section-title">

          <span>
            FEATURED PROPERTIES
          </span>

          <h2>
            Popular Stays
          </h2>

          <p>
            Handpicked homes designed to provide comfort,
            luxury, and an unforgettable living experience.
          </p>

        </div>



        <div
          className="property-grid"
          id="explore"
        >

          {
            displayedProperties.map((item) => (

              <div
                key={item.id}
                className="airbnb-card"
              >

                <div className="image-wrapper">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="rating">
                    ⭐ {item.rating}
                  </div>

                </div>



                <div className="card-content">

                  <h3>
                    {item.title}
                  </h3>


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

            ))
          }

        </div>



        <div className="show-all-container">

          <button
            className="show-all-btn"
            onClick={() => setShowAll(!showAll)}
          >

            {
              showAll
                ? "Show Less"
                : "Show All Properties"
            }

          </button>


        </div>


      </section>
      {/* Why Choose Us */}

      <section className="why-us">

        <div className="why-card">

          <span>
            🏠
          </span>

          <h3>
            Premium Homes
          </h3>

          <p>
            Carefully selected apartments,
            villas, and luxury spaces.
          </p>

        </div>



        <div className="why-card">

          <span>
            🔒
          </span>

          <h3>
            Safe & Secure
          </h3>

          <p>
            Verified listings and secure
            booking experience.
          </p>

        </div>



        <div className="why-card">

          <span>
            ⭐
          </span>

          <h3>
            Top Rated
          </h3>

          <p>
            Thousands of happy customers
            trust Lumina Living.
          </p>

        </div>


      </section>




      {/* CTA Section */}


      <section className="cta-section">


        <h2>
          Ready to Find Your Perfect Home?
        </h2>


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