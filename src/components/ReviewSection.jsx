import { useState, useEffect } from "react";
import "./ReviewSection.css";

function ReviewSection() {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer",
      image: "https://i.pravatar.cc/100?img=1",
      review: "Amazing platform for finding homes."
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/100?img=2",
      review: "Smooth experience and UI."
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "Marketing Executive",
      image: "https://i.pravatar.cc/100?img=3",
      review: "Found my perfect place."
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Data Analyst",
      image: "https://i.pravatar.cc/100?img=4",
      review: "Very reliable listings."
    },
    {
      id: 5,
      name: "Neha Gupta",
      role: "HR Manager",
      image: "https://i.pravatar.cc/100?img=5",
      review: "Highly recommended."
    },
    {
      id: 6,
      name: "Amit Joshi",
      role: "Developer",
      image: "https://i.pravatar.cc/100?img=6",
      review: "Best co-living experience."
    },
    {
      id: 7,
      name: "Sneha Kapoor",
      role: "Student",
      image: "https://i.pravatar.cc/100?img=7",
      review: "Safe and affordable."
    },
    {
      id: 8,
      name: "Rohan Mehta",
      role: "Engineer",
      image: "https://i.pravatar.cc/100?img=8",
      review: "Great support system."
    },
    {
      id: 9,
      name: "Pooja Nair",
      role: "Architect",
      image: "https://i.pravatar.cc/100?img=9",
      review: "Comfortable homes."
    },
    {
      id: 10,
      name: "Karan Malhotra",
      role: "Consultant",
      image: "https://i.pravatar.cc/100?img=10",
      review: "Very professional service."
    }
  ];

  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth <= 768) {
        setCardsToShow(1); // mobile
      } else {
        setCardsToShow(4); // laptop + desktop
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + cardsToShow) % reviews.length);
  };

  const prev = () => {
    setIndex(
      (prev) => (prev - cardsToShow + reviews.length) % reviews.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3500);

    return () => clearInterval(interval);
  }, [cardsToShow]);

  const visibleReviews = [];

  for (let i = 0; i < cardsToShow; i++) {
    visibleReviews.push(reviews[(index + i) % reviews.length]);
  }

  return (
    <section className="reviews" id="reviews">
      <div className="reviews-header">
        <h2>What Our Members Say</h2>
        <p>Real experiences from our users</p>
      </div>

      <div className="slider-wrapper">
        <button className="arrow" onClick={prev}>
          ❮
        </button>

        <div className="slider">
          {visibleReviews.map((r) => (
            <div className="review-card" key={r.id}>
              <img src={r.image} alt={r.name} />
              <h3>{r.name}</h3>
              <span>{r.role}</span>
              <p>{r.review}</p>
            </div>
          ))}
        </div>

        <button className="arrow" onClick={next}>
          ❯
        </button>
      </div>
    </section>
  );
}

export default ReviewSection;