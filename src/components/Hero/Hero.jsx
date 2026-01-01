import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // 👈 import Framer Motion
import "./Hero.css";
import heroVideo from "../../assets/5759060-uhd_2160_3840_30fps.mp4";
import heroImage from "../../assets/15 Top Winter Fashion Trends To Stay Current (2024 Looks).jpg";

export default function Hero() {
  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

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
        poster={heroImage}
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={item}>
          Elevate Your Style
        </motion.h1>
        <motion.p className="hero-subtitle" variants={item}>
          Luxury fashion, tailored for you
        </motion.p>

        <motion.div className="hero-buttons" variants={item}>
          <motion.a 
            href="#lookbook" 
            className="hero-btn primary-btn" 
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(201,160,99,0.6)" }}
          >
            Shop Now
          </motion.a>
          <motion.a
            href="/booking" 
            className="hero-btn secondary-btn"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(201,160,99,0.6)" }}
          >
            Book a Stylist
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}