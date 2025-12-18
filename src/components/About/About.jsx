import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import aboutImage from "../../assets/15 Top Winter Fashion Trends To Stay Current (2024 Looks).jpg"; // Replace with your image

export default function About() {
  const imageRef = useRef(null);
  const [offset, setOffset] = useState(0);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollTop = window.scrollY;
      setOffset(scrollTop * 0.2); // adjust speed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Image */}
        <div
          className="about-image-container"
          style={{ transform: `translateY(${offset}px)` }}
          ref={imageRef}
        >
          <img src={aboutImage} alt="About Brand" className="about-image" />
          <div className="image-overlay"></div>
        </div>

        {/* Text Box */}
        <div className="about-text-box">
          <h2 className="headline">Where Elegance Meets Craftsmanship</h2>
          <p className="subheadline">
            Every stitch tells a story, every design is a statement.
          </p>
          <p className="body-text">
            At [Brand Name], we create pieces that embody sophistication and
            artistry. Our designs combine timeless craftsmanship with modern
            innovation, ensuring that each creation is both luxurious and
            meaningful.
          </p>
          <button className="about-cta">Learn More</button>
        </div>
      </div>
    </section>
  );
}




