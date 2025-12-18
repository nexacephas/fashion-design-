import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Lookbook from "./components/Lookbook/Lookbook";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Booking from "./components/Booking/Booking";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Lookbook />
              <Services />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Booking page */}
        <Route
          path="/booking"
          element={
            <>
              <Booking />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}
