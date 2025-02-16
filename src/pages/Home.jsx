import { Container, Row, Col, Image } from "react-bootstrap";

import "../Styles/global.css";
import logo from "../assets/D F G SECURTY-1.jpg"; // Import logo image
import { motion } from "framer-motion";
import Services from "./Services";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section text-white text-center d-flex align-items-center justify-content-center">
        <Container>
          <Image src={logo} alt="DFG Security Logo" width={150} className="mb-3" />
          <h1 className="hero-title">Innovating the Future of Security</h1>
          <p className="hero-subtext">Empowering businesses with cutting-edge security solutions.</p>
        </Container>
      </div>

      {/* Vision & Mission Section */}
      <Container className="mt-5 text-center vision-mission">
        <Row>
          <Col md={6}>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <h2 className="section-title">Our Vision</h2>
              <p className="section-text">
                DFG Security aims to be the industry’s most trusted name, pioneering innovative solutions and advanced technology to provide unmatched protection.
              </p>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <h2 className="section-title">Our Mission</h2>
              <p className="section-text">
                At DFG Security, our mission is to deliver precision-tailored security solutions designed to anticipate and neutralize threats before they arise.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Services Section */}
      <Services />

    
    </>
  );
};

export default Home;
