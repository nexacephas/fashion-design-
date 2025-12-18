import React from "react";
import "./Footer.css";
import logo from "../../assets/logo-navbar-removebg-preview.png";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <img src={logo} alt="Brand Logo" />
          <p>Luxury fashion for every style and occasion.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#lookbook">Lookbook</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: tephilahfashion@gmail.com</p>
          <p>Phone: +234 000 000 0000</p>
          <p>Lagos, Nigeria</p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tephilah Fashion. All rights reserved.</p>
      </div>
    </footer>
  );
}
