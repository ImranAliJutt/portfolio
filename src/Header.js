import React from 'react';
import './Header.css';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Import Button from Bootstrap

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="align-items-center"> {/* Align items vertically center */}
          <Col md={6} className="header-text"> {/* Use 6 columns for medium screens and above */}
            <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Full-Stack Developer 👨‍💻</h1>
            <p>Hi, I'm Imran. A passionate Software Developer based in Alberta, Canada.</p>
            {/* Add the download CV button */}
            <Button 
              id="download-cv" // Add an id to the button
              href="/cv.pdf" // Path to your CV file
              target="_blank" // Opens the CV in a new tab
              rel="noopener noreferrer" // Security best practice
              variant="outline-light" // Match the project button style
              size="lg" // Larger button size
              className="mt-3 custom-button" // Add custom class for additional styling
            >
              Download My CV
            </Button>
          </Col>
          <Col md={6} className="header-image text-center"> {/* Use 6 columns for medium screens and above */}
            <img src="./imran.jpeg" alt="Imran" className="img-fluid" /> {/* Add img-fluid class for responsive images */}
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
