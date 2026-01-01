import React from "react";
import { motion } from "framer-motion";
import "./Lookbook.css";

// Image imports
import img1 from "../../assets/WhatsApp Image 2025-12-19 at 08.03.35_6d187b8d.jpg";
import img2 from "../../assets/WhatsApp Image 2025-12-19 at 08.03.40_ba9fd897.jpg";
import img3 from "../../assets/WhatsApp Image 2025-12-19 at 08.03.39_2b6e980d.jpg";
import img4 from "../../assets/WhatsApp Image 2025-12-19 at 08.03.37_2ca27990.jpg";
import img5 from "../../assets/WhatsApp Image 2025-12-19 at 08.03.35_eb66d982.jpg";
import img6 from "../../assets/WhatsApp Image 2025-12-19 at 08.03.41_759bf31a.jpg";
import img8 from "../../assets/WhatsApp Image 2025-12-19 at 08.03.36_bb8e34b8.jpg";
import img9 from "../../assets/WhatsApp Image 2025-12-19 at 08.03.38_7f2c7ae9.jpg";

const images = [
  { src: img1, title: "Autumn Collection" },
  { src: img2, title: "Editorial Look" },
  { src: img3, title: "Fabric Details" },
  { src: img4, title: "Model Pose" },
  { src: img5, title: "Luxury Textures" },
  { src: img6, title: "Evening Elegance" },
  { src: img8, title: "Runway Glamor" },
  { src: img9, title: "Signature Pieces" },
];

const container = {
  hidden: {},
  visible: { 
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Lookbook() {
  return (
    <section className="lookbook-section" id="lookbook">
      {/* Hero Image */}
      <motion.div 
        className="lookbook-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img src={img1} alt="Featured Look" />
        <div className="hero-overlay">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Autumn 2025 Collection
          </motion.h2>
        </div>
      </motion.div>

      {/* Asymmetric Grid */}
      <motion.div className="lookbook-grid" variants={container} initial="hidden" animate="visible">
        {images.map((img, idx) => (
          <motion.div
            className={`lookbook-item item-${idx}`}
            key={idx}
            variants={item}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(201,160,99,0.5)" }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img src={img.src} alt={img.title} />
            <div className="overlay">
              <span>{img.title}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
