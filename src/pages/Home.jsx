import { Container, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { useRef } from "react";
import "../Styles/global.css";
import logo from "../assets/D F G SECURTY-1.jpg";
import Services from "./Services";
import AboutDFG from "./About";
import Contact from "./Contact";
import JoinUs from "./JoinUs";




const Home = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
     <div className="main-content">
      {/* Navbar */}
      <nav className="navbar fixed-navbar">
        <h1 className="brand">DFG Security</h1>
        <ul className="nav-links">
          <li onClick={() => scrollToSection(aboutRef)}>About Us</li>
          <li onClick={() => scrollToSection(servicesRef)}>Services</li>
          <li onClick={() => scrollToSection(reviewsRef)}>Reviews</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-container">
  <motion.div
    className="hero-content"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="hero-box">
      <h2>
        Escape to Security Excellence at <span>DFG Security</span>
      </h2>
      <p>
        At <strong>DFG Security</strong>, we don’t just protect—we empower.
        Cutting-edge security solutions keep your assets, data, and
        operations safe, giving you peace of mind in a dynamic digital world.
      </p>
      <div className="hero-buttons">
        <button className="btn-green" onClick={() => scrollToSection(servicesRef)}>
          View Our Services
        </button>
        <button className="btn-gold" onClick={() => scrollToSection(contactRef)}>
          Contact Us
        </button>
      </div>
    </div>

    {/* Hero Image with Motion Effect */}
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
      <Image src={logo} alt="DFG Security Logo" width={150} className="mb-3" />
    </motion.div>
  </motion.div>

  {/* Mission, Vision & Values Section */}
  <motion.div 
    className="mission-vision-values" 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1.2 }}
  >
    <div className="mission-box">
      <h3>🚀 Our Mission</h3>
      <p>To provide cutting-edge security solutions that protect and empower businesses and individuals worldwide.</p>
    </div>

    <div className="vision-box">
      <h3>🌟 Our Vision</h3>
      <p>To be the leading security solutions provider, ensuring a safer, more secure future for all.</p>
    </div>

    <div className="values-box">
      <h3>💡 Our Core Values</h3>
      <ul>
        <li>🔒 Integrity & Trust</li>
        <li>🛡️ Customer-Centric Security</li>
        <li>⚡ Innovation & Excellence</li>
        <li>🤝 Commitment to Service</li>
      </ul>
    </div>
  </motion.div>

  {/* Chat Icon Button */}
  <motion.button className="chat-icon" onClick={() => scrollToSection(contactRef)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    💬
  </motion.button>
</div>


      {/* About Section */}
      <div ref={aboutRef} className="section-spacing">
  <AboutDFG />
</div>

      {/* Services Section */}
      <div ref={servicesRef}>
        <Services />
      </div>

      {/* Reviews Section */}
      <Container ref={reviewsRef} className="mt-5 text-center vision-mission">
        <JoinUs />
      </Container>

      {/* Contact Section */}
      <Container ref={contactRef} className="mt-5 text-center vision-mission">
        <Contact />
        <p>Reach us at support@dfgsecurity.com</p>
      </Container>
      </div>
    </>
  );
};

export default Home;
