import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <Container className="mt-5 contact-section">
      <motion.h2
        className="text-center section-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h2>
      <p className="text-center text-muted">
        Have any questions? Reach out to us, and we&apos;ll respond as soon as possible.
      </p>

      <Row className="mt-5">
        {/* Contact Info */}
        <Col md={5} className="contact-info text-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h4><FaMapMarkerAlt /> Our Address</h4>
            <p>123 Security Street, Nairobi, Kenya</p>
            <h4><FaEnvelope /> Email Us</h4>
            <p>info@dfgsecurity.com</p>
            <h4><FaPhone /> Call Us</h4>
            <p>+254 700 123 456</p>
          </motion.div>
        </Col>

        {/* Contact Form */}
        <Col md={7}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Form className="contact-form p-4 shadow-lg rounded">
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group controlId="message" className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
              </Form.Group>

              <Button variant="dark" type="submit" className="mt-3 w-100">
                Send Message
              </Button>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;