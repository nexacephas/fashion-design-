import React from "react";
import { Link } from "react-router-dom"; // 👈 import Link
import "./Hero.css";
import heroVideo from "../../assets/5759060-uhd_2160_3840_30fps.mp4";
import heroImage from "../../assets/15 Top Winter Fashion Trends To Stay Current (2024 Looks).jpg";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Video */}
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Fallback Image */}
      <img src={heroImage} alt="Hero Background" className="hero-fallback" />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">Elevate Your Style</h1>
        <p className="hero-subtitle">Luxury fashion, tailored for you</p>

        <div className="hero-buttons">
          <a href="#lookbook" className="hero-btn primary-btn">
            Shop Now
          </a>

          {/* ✅ Book a Stylist now works */}
          <Link to="/booking" className="hero-btn secondary-btn">
            Book a Stylist
          </Link>
        </div>
      </div>
    </section>
  );
}
