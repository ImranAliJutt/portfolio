import React from 'react';
import './Project1.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

function Project1() {
  return (
    <div className="project-section">
      <h2 className="section-title">Latest Work</h2> {/* Add this line */}
      <Container className="project-container">
        <Row className="align-items-center">
          <Col md={6} className="project-image">
            <img src="./TranslatApp.png" alt="Project 1" className="img-fluid" />
          </Col>
          <Col md={6} className="project-content">
            <h3>Gemini AI Translator</h3>
            <p>
              The Gemini AI Translator is a simple and user-friendly translation application built using React and the Google Translate API. It allows users to input text in one language and translate it to another with just a few clicks. The application is designed with a clean, minimalistic user interface to ensure ease of use.
            </p>
            <Button 
              href="https://github.com/ImranAliJutt/geminiaitranslator-" 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="outline-light"
              className="me-2"
            >
              <FaGithub /> GitHub
            </Button>
            <Button 
              href="https://geminiaitranslatorapp.onrender.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="outline-light"
            >
              Live Demo
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Project1;
