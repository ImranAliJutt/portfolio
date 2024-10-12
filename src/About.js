import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs, faNodeJs, faPhp } from '@fortawesome/free-brands-svg-icons'; 
import './About.css';

function AllCollapseExample() {
  return (
    <section id="about" className="about">
      <Container>
        <Row>
          {/* About Me Section on the Left */}
          <Col md={6}>
            <div className="about-content">
              <h2 style={{ color: '#b4b6b4' }}>About Me</h2>
              <p>
                I'm Imran Ali, a Full-Stack Developer with a passion for creating user-friendly web applications. Based in Banff, Alberta, I have experience ranging from Web Design and SEO to Full Stack PHP Development. My projects, including the Gemini AI Translator, showcase my skills in HTML, CSS, JavaScript, React, and PHP.
                <br /><br />
                I hold a Bachelor’s in Software Engineering and Post-Graduate Certificates in Mobile Application Development and Project Management. I also manage two blogs on educational content and resources about Canada and volunteer with STEM Canada to support web development initiatives.
              </p>
            </div>
          </Col>

          {/* Accordion on the Right */}
          <Col md={6}>
            <Accordion>
              {/* Education Tab */}
              <Accordion.Item eventKey="0">
                <Accordion.Header className="custom-header">
                  <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '8px', color: '#b4b6b4' }} />
                  Education
                </Accordion.Header>
                <Accordion.Body>
                <h5 style={{fontWeight:'bold'}}>Graduate Certificate in Mobile Application Development</h5>
                <p>TAV College, July 2023 - August 2024</p>

                  <h5 style={{fontWeight:'bold'}}>Bachelor of Software Engineering</h5>
                  <p>University of Gujrat, 2016 - 2020</p>
                 
                </Accordion.Body>
              </Accordion.Item>

              {/* Experience Tab */}
              <Accordion.Item eventKey="1">
                <Accordion.Header className="custom-header">
                  <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '8px', color: '#b4b6b4' }} />
                  Experience
                </Accordion.Header>
                <Accordion.Body>
                  <h5 style={{fontWeight:'bold'}}>Web Design and SEO Intern</h5>
                  <p>Kaayu, June - August 2024</p>
                  

                  <h5 style={{fontWeight:'bold'}} >Full Stack PHP Developer</h5>
                  <p>HajexFitness, Montreal, Canada (October 2022 - April 2023)</p>
                  
                  <h5 style={{fontWeight:'bold'}} >Junior IT Analyst</h5>
                  <p>WSolution, Sialkot, Pakistan (January 2021 - October 2022)</p>
                  
                  
                  
                </Accordion.Body>
              </Accordion.Item>

              {/* Front End Skills Tab */}
              <Accordion.Item eventKey="2">
                <Accordion.Header className="custom-header">
                  <FontAwesomeIcon icon={faCode} style={{ marginRight: '8px', color: '#b4b6b4' }} />
                  Front End Skills
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faHtml5} style={{ marginRight: '8px', color: '#e44d26' }} />
                      HTML
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCss3} style={{ marginRight: '8px', color: '#1572B6' }} />
                      CSS
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faJs} style={{ marginRight: '8px', color: '#F7DF1E' }} />
                      JavaScript
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCode} style={{ marginRight: '8px', color: '#61DBFB' }} />
                      React
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              {/* Back End Skills Tab */}
              <Accordion.Item eventKey="3">
                <Accordion.Header className="custom-header">
                  <FontAwesomeIcon icon={faCode} style={{ marginRight: '8px', color: '#b4b6b4' }} />
                  Back End Skills
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faPhp} style={{ marginRight: '8px', color: '#777BBF' }} />
                      PHP
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faNodeJs} style={{ marginRight: '8px', color: '#8CC84B' }} />
                      Node.js
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AllCollapseExample;
