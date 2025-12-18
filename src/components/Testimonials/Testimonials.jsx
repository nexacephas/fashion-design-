import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sophia A.",
    title: "Fashion Enthusiast",
    text: "Absolutely loved my custom outfit! The attention to detail and fabric quality is unmatched.",
  },
  {
    name: "Liam K.",
    title: "Event Coordinator",
    text: "Their ready-to-wear collection is both stylish and comfortable. Highly recommend for luxury events.",
  },
  {
    name: "Isabella M.",
    title: "Blogger",
    text: "Amazing styling advice and consultation. I felt confident and elegant at my shoot thanks to their guidance.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-header">
        <h2>What Our Clients Say</h2>
        <p>Discover how we elevate style and luxury for our valued clients</p>
      </div>

      <div className="testimonials-slider">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            className="testimonial-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="quote-icon">
              <FaQuoteLeft size={30} />
            </div>
            <p className="testimonial-text">"{testimonials[current].text}"</p>
            <h4 className="testimonial-name">{testimonials[current].name}</h4>
            <p className="testimonial-title">{testimonials[current].title}</p>
          </motion.div>
        </AnimatePresence>

        <div className="slider-controls">
          <button onClick={prevSlide} aria-label="Previous testimonial">&lt;</button>
          <button onClick={nextSlide} aria-label="Next testimonial">&gt;</button>
        </div>
      </div>
    </section>
  );
}
