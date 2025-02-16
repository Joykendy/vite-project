import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaShieldAlt, FaVideo, FaKey } from "react-icons/fa"; // Icons for services
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../Styles/global.css";

const services = [
  { title: "Cybersecurity", icon: <FaShieldAlt />, text: "Protect your business from digital threats." },
  { title: "Surveillance", icon: <FaVideo />, text: "Advanced monitoring systems for enhanced safety." },
  { title: "Access Control", icon: <FaKey />, text: "Secure entry management solutions." }
];

const ServicesSection = () => {
    const navigate = useNavigate();
  return (
    <Container className="mt-5 text-center services-section">
      <h2 className="section-title">Our Services</h2>
      <Row className="mt-4">
        {services.map((service, index) => (
          <Col md={4} key={index}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="service-card shadow-lg border-0 hover-effect">
                <Card.Body>
                  <div className="service-icon">{service.icon}</div>
                  <Card.Title className="card-title">{service.title}</Card.Title>
                  <Card.Text className="card-text">{service.text}</Card.Text>
                 
                  <Button variant="dark" onClick={() => navigate("/join-us")}>Learn More</Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesSection;
