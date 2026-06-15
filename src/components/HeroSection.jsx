import { useEffect, useState } from "react";
import "./HeroSection.css";

const Counter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <h3>
      {count}
      {suffix}
    </h3>
  );
};

const HeroSection = () => {
  return (
    <section className="hero">

      <div className="hero-bg-circle circle-1"></div>
      <div className="hero-bg-circle circle-2"></div>
      <div className="hero-bg-circle circle-3"></div>

      <div className="hero-left">

        <div className="hero-tag">
          ✨ AI Powered Roommate Matching
        </div>

        <h1>
          Find Your Perfect
          <span> Living Space</span>
          <br />
          & Ideal Roommate
        </h1>

        <p>
          Discover modern co-living experiences with smart AI matching,
          verified listings, and a community built around compatibility.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Start Swiping →
          </button>

          <button className="secondary-btn">
            Explore Listings
          </button>

        </div>

        <div className="hero-stats">

          <div>
            <Counter end={15} suffix="K+" />
            <p>Users</p>
          </div>

          <div>
            <Counter end={2} suffix="K+" />
            <p>Homes</p>
          </div>

          <div>
            <Counter end={98} suffix="%" />
            <p>Match</p>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <div className="floating-card top-card">
          ⭐ 4.9 Rating
        </div>

        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
          alt="Modern Apartment"
        />

        <div className="floating-card bottom-card">
          🎉 1200+ Matches
        </div>

      </div>

    </section>
  );
};

export default HeroSection;