import React from "react";
import "./Lookbook.css";

// Your image imports
import img1 from "../../assets/15 Top Winter Fashion Trends To Stay Current (2024 Looks).jpg";
import img2 from "../../assets/layer1.jpg";
import img3 from "../../assets/layer4.jpg";
import img4 from "../../assets/layer2.jpg";
import img5 from "../../assets/layer2.jpg";
import img6 from "../../assets/project6.jpg";
import img8 from "../../assets/layer2.jpg";
import img9 from "../../assets/layer2.jpg";

const images = [
  { src: img1, title: "Autumn Collection" },
  { src: img2, title: "Editorial Look" },
  { src: img3, title: "Fabric Details" },
  { src: img4, title: "Model Pose" },
  { src: img5, title: "Luxury Textures" },
  { src: img6, title: "Evening Elegance" },
  { src: img8, title: "Evening Elegance" },
  { src: img9, title: "Evening Elegance" },
];

export default function Lookbook() {
  return (
    <section className="lookbook-section" id="lookbook">
      {/* Hero Image */}
      <div className="lookbook-hero">
        <img src={img1} alt="Featured Look" />
        <div className="hero-overlay">
          <h2>Autumn 2025 Collection</h2>
        </div>
      </div>

      {/* Asymmetric Grid */}
      <div className="lookbook-grid">
        {images.map((img, idx) => (
          <div className={`lookbook-item item-${idx}`} key={idx}>
            <img src={img.src} alt={img.title} />
            <div className="overlay">
              <span>{img.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
