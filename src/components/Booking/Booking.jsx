import React, { useState } from 'react';
import './Booking.css';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Booking = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Booking submitted! A copy has been sent to your email.");
        e.target.reset();
      } else {
        setStatus("❌ Failed to send. Try again later.");
      }
    } catch (error) {
      console.error("Booking Error:", error);
      setStatus("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { name: "name", label: "Full Name", type: "text" },
    { name: "email", label: "Email Address", type: "email" },
    { name: "phone", label: "Phone Number", type: "text" },
    { name: "whatsapp", label: "WhatsApp Number", type: "text" },
    { name: "state", label: "State", type: "text" },
    { name: "city", label: "City", type: "text" },
    { name: "address", label: "Full Address", type: "text" },
  ];

  return (
    <section className="booking-section" id="booking">
      <div className="booking-container">
        {/* Header */}
        <motion.div 
          className="booking-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Book Your Style</h2>
          <p className="section-subtitle">
            Fill out all details to ensure we deliver exactly what you want.
          </p>
        </motion.div>

        <div className="booking-content">
          {/* Left Contact Info */}
          <motion.div 
            className="booking-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Contact Us</h3>
            <div className="booking-contact-info">
              <div><FiPhone /> +234 000 000 0000</div>
              <div><FiPhone /> WhatsApp: +234 111 222 3333</div>
              <div><FiMail /> tephilahfashion@gmail.com</div>
              <div><FiMapPin /> Lagos, Nigeria - Victoria Island</div>
            </div>
          </motion.div>

          {/* Right Booking Form */}
          <motion.form
            className="booking-right"
            onSubmit={handleSubmit}
            data-captcha="true"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              {fields.map((field, idx) => (
                <motion.div 
                  className="floating-label"
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <input type={field.type} name={field.name} required placeholder=" " />
                  <label>{field.label}</label>
                </motion.div>
              ))}

              <motion.div 
                className="floating-label"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <select name="service" required>
                  <option value="">Select Service</option>
                  <option value="Custom Clothing">Custom Clothing Design</option>
                  <option value="Ready-to-Wear">Ready-to-Wear Collection</option>
                  <option value="Consultation">Styling & Consultation</option>
                </select>
                <label>Service Type</label>
              </motion.div>

              <motion.div 
                className="floating-label"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                viewport={{ once: true }}
              >
                <input type="date" name="bookingDate" required placeholder=" " />
                <label>Preferred Date</label>
              </motion.div>

              <motion.div 
                className="floating-label"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
              >
                <input type="time" name="bookingTime" required placeholder=" " />
                <label>Preferred Time</label>
              </motion.div>

              <motion.div 
                className="floating-label"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                viewport={{ once: true }}
              >
                <textarea name="additionalInfo" rows="5" placeholder=" "></textarea>
                <label>Additional Details / Requirements</label>
              </motion.div>
            </div>

            <motion.button 
              type="submit" 
              className="btn-primary"
              disabled={loading}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
            >
              {loading ? 'Submitting...' : 'Submit Booking'}
            </motion.button>

            {status && <p className="form-status">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
