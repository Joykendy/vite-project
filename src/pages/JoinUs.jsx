import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const services = [
  {
    title: "Cybersecurity Solutions",
    description: "Our cybersecurity services ensure complete protection against cyber threats, including malware, phishing, and data breaches.",
  },
  {
    title: "Advanced Surveillance",
    description: "We offer high-tech surveillance solutions, including CCTV monitoring, AI-driven analytics, and real-time alerts for enhanced security.",
  },
  {
    title: "Access Control Systems",
    description: "Control and monitor entry points with biometric authentication, RFID cards, and automated security checks.",
  },
  {
    title: "Security Consultancy",
    description: "Expert consultations to analyze and enhance your security protocols, ensuring compliance with industry standards.",
  },
  {
    title: "Event Security Management",
    description: "Comprehensive security solutions for events, ensuring crowd control, emergency response planning, and VIP protection.",
  },
];

const JoinUs = () => {
  return (
    <Container className="mt-5">
      {/* Page Heading */}
      <motion.h2
        className="text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Why Choose DFG Security?
      </motion.h2>
      <p className="text-center text-muted">
        Explore our wide range of security services designed to protect you and your business.
      </p>

      {/* Services Section */}
      <Row className="mt-4">
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="shadow-lg border-0 service-card">
                <Card.Body>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Join Us Section */}
      <motion.div
        className="join-us-section p-5 mt-5 text-center bg-dark text-white rounded-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Join Us Today!</h2>
        <p className="mb-4">
          Looking for top-tier security services? Fill out the form below, and our team will get back to you promptly.
        </p>

        {/* Contact Form */}
        <Form className="contact-form mx-auto" style={{ maxWidth: "500px" }}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="service">
            <Form.Label>Select a Service</Form.Label>
            <Form.Select required>
              <option>Choose...</option>
              {services.map((service, index) => (
                <option key={index}>{service.title}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Additional Details</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Tell us more about your needs..." />
          </Form.Group>

          <Button variant="light" type="submit" className="fw-bold px-4">
            Submit Request
          </Button>
        </Form>
      </motion.div>
    </Container>
  );
};

export default JoinUs;
