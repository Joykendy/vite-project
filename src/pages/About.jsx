import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/global.css";

const images = [
  "/security-guard-workspace.jpg",
  "/portrait-male-security-guard-with-uniform.jpg",
  "/portrait-male-security-guard-with-radio-station-camera-screens.jpg",
];

const AboutUs = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      <h2 className="about-heading">About Us</h2>

      {/* Image Section with Smooth Crossfade */}
      <div className="image-container">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="About Us"
            className="animated-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }} // Smoother transition
          />
        </AnimatePresence>
      </div>

      {/* About Content */}
      <div className="about-content">
        <p>
          At <strong>DFG Security</strong>, we go beyond protection—we provide peace of mind.
        </p>
        <p>
          Our expertise in both physical and digital security ensures that businesses, individuals, and assets
          remain safeguarded in an ever-evolving world. With a commitment to excellence, innovation, and reliability,
          we offer comprehensive security solutions tailored to your specific needs.
        </p>
        <p>
          From securing high-profile locations and critical infrastructure to safeguarding sensitive data and
          deploying state-of-the-art surveillance systems, our team is equipped with the latest technology and
          industry best practices.
        </p>
        <p>
          Whether you need real-time monitoring, risk assessment, or advanced cybersecurity measures, we deliver
          solutions that adapt to emerging threats. With DFG Security, you don't just get protection—you gain a
          trusted partner dedicated to ensuring safety, resilience, and confidence in every environment.
        </p>
        <p>
          Your security is our priority. Get in touch today to experience tailored, top-tier security solutions.
        </p>

        <a href="#book" className="about-btn">Get in touch</a>
      </div>
    </div>
  );
};

export default AboutUs;
