import React from 'react';
import './Project2.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

function Project2() {
  return (
    <div className="project2-section">
      <Container className="project2-container">
        <Row className="align-items-center">
          <Col md={6} className="project2-content">
            {/* Animated Circle with "2nd Project" Text */}
            <div className="project2-circle">
              <span>2nd Project</span>
            </div>
            
            <h3>To-Do List Application</h3>
            <p>
              This App provides the basic structure and functionality for a to-do list application using React. Users can add items to the list, and they can delete items individually using the "Delete" button associated with each item.
            </p>
            <Button 
              href="https://github.com/ImranAliJutt/react_totolist_app" 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="outline-dark"
              className="me-2"
            >
              <FaGithub /> GitHub
            </Button>
            <Button 
              href="https://imranalijutt.github.io/react_totolist_app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="outline-dark"
            >
              Live Demo
            </Button>
          </Col>
          <Col md={6} className="project2-image">
            <img src="./project2.png" alt="Project 2" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Project2;
