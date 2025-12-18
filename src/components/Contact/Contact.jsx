import React, { useState } from 'react';
import './Contact.css';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const formData = new FormData(e.target);
    formData.append("access_key", "b0d63608-782b-495a-a8ab-03c7d80e1c92");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("❌ Failed to send. Try again later.");
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);
      setStatus("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const infoItems = [
    { icon: <FiMail />, text: 'tephilahfashion@gmail.com' },
    { icon: <FiPhone />, text: '+234 000 000 0000' },
    { icon: <FiMapPin />, text: 'Lagos, Nigeria' }
  ];

  const socialIcons = [
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaFacebook />, link: '#' },
    { icon: <FaWhatsapp />, link: '#' },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Let’s Connect</h2>
          <p className="section-subtitle">
            Whether you’re looking to enroll, style, or partner — our team is ready to respond.
          </p>
        </motion.div>

        {/* Left Info */}
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Get in Touch</h3>
          <p>Reach us directly through any of the following channels:</p>

          <motion.div className="contact-info">
            {infoItems.map((item, idx) => (
              <motion.div key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                {item.icon} {item.text}
              </motion.div>
            ))}
          </motion.div>

          <div className="contact-note">
            <p><strong>Office Hours:</strong> Mon–Fri, 9AM – 5PM</p>
            <p><strong>Follow us:</strong> Facebook • Instagram • WhatsApp</p>
          </div>

          {/* Floating Social Icons */}
          <div className="social-icons">
            {socialIcons.map((s, i) => (
              <a key={i} href={s.link}>{s.icon}</a>
            ))}
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form 
          className="contact-right"
          onSubmit={handleSubmit}
          data-captcha="true"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <div className="floating-label">
              <input type="text" name="name" required placeholder=" " />
              <label>Your Name</label>
            </div>
            <div className="floating-label">
              <input type="email" name="email" required placeholder=" " />
              <label>Your Email</label>
            </div>
            <div className="floating-label">
              <input type="text" name="phone" required placeholder=" " />
              <label>Phone Number</label>
            </div>
            <div className="floating-label">
              <textarea name="message" rows="5" required placeholder=" " />
              <label>Your Message</label>
            </div>
          </div>

          <motion.button 
            type="submit" 
            className="btn-primary"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>

          {status && <p className="form-status">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
