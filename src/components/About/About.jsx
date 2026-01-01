import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import "./About.css";
import aboutImage from "../../assets/WhatsApp Image 2025-12-19 at 08.03.40_ba9fd897.jpg";

export default function About() {
  const imageRef = useRef(null);

  // Motion value for parallax
  const y = useMotionValue(0);
  const inView = useInView(imageRef, { margin: "-100px" });
  
  // Parallax transform (image moves slower)
  const yTransform = useTransform(y, [0, 500], [0, 80]);

  // Scroll listener
  React.useEffect(() => {
    const handleScroll = () => y.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [y]);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Image */}
        <motion.div
          className="about-image-container"
          ref={imageRef}
          style={{ y: yTransform }}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 80, damping: 12 }}
        >
          <img src={aboutImage} alt="About Brand" className="about-image" />
          <div className="image-overlay"></div>
        </motion.div>

        {/* Text Box */}
        <motion.div
          className="about-text-box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
        >
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
          <motion.button
            className="about-cta"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(201,160,99,0.6)" }}
            transition={{ duration: 0.3 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
