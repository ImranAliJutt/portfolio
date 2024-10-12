import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome

function Contact() {
  return (
    <section id="contact" className="contact">
      <Container>
        <h2 className="section-title mb-2" style={{ color: '#000' }}>Contact</h2>
        <p className="text-center mb-4">Don't be shy! Hit me up! 👇</p>
        <Row className="justify-content-center">
          <Col md={10} className="contact-info p-4 rounded d-flex align-items-center justify-content-between"> {/* Horizontal layout */}
  
            {/* Location */}
            <div className="d-flex align-items-center me-4">
              
              <div>
                <p style={{ fontWeight: 'bold', marginBottom: '0' }}><i className="fa fa-map-marker fa-2x me-2" style={{ color: '#000' }}></i> Location:</p>
                <p style={{ marginBottom: '0' }}>Banff, Alberta, Canada</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="d-flex align-items-center me-4">
             
              <div>
                <p style={{ fontWeight: 'bold', marginBottom: '0' }}> <i className="fa fa-envelope fa-2x me-2" style={{ color: '#000' }}></i> Mail:</p>
                <p style={{ marginBottom: '0' }}>
                  <a href="mailto:imranranjha3464@gmail.com" style={{ textDecoration: 'none', color: '#000' }}>
                    imranranjha3464@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="d-flex align-items-center">
              
              <div>
                <p style={{ fontWeight: 'bold', marginBottom: '0' }}><i className="fa fa-phone fa-2x me-2" style={{ color: '#000' }}></i> Contact:</p>
                <p style={{ marginBottom: '0' }}>+1 514-546-255</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
