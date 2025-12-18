import React from "react";
import "./Services.css";
import { FaPencilRuler, FaTshirt, FaUserTie } from "react-icons/fa"; // React Icons

const services = [
  {
    icon: <FaPencilRuler size={50} />,
    title: "Custom Clothing Design",
    description:
      "Tailor-made outfits for clients (e.g., weddings, events, branding). Includes sketching, fabric selection, and fittings.",
  },
  {
    icon: <FaTshirt size={50} />,
    title: "Ready-to-Wear Collection",
    description:
      "Design and sell pre-made pieces in small or large batches. Seasonal collections or signature styles sold online or in-store.",
  },
  {
    icon: <FaUserTie size={50} />,
    title: "Styling, Consultation & Training",
    description:
      "Offer fashion advice, wardrobe planning, or styling for shoots/events.",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>Luxury fashion solutions tailored for your style and brand.</p>
      </div>

      <div className="services-grid">
        {services.map((service, idx) => (
          <div className={`service-card card-${idx}`} key={idx}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
