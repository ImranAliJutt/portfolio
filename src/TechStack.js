import React from 'react';
import './TechStack.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'; // Import the required icons

function TechStack() {
  return (
    <section className="tech-stack">
      <div className="tech-header">
        <h2 className='section-titles'>Tech Stack</h2>
        <div className="stack-icons">
          <FontAwesomeIcon icon={faHtml5} size="3x" title="HTML" />
          <FontAwesomeIcon icon={faCss3Alt} size="3x" title="CSS" />
          <FontAwesomeIcon icon={faJs} size="3x" title="JavaScript" />
          <FontAwesomeIcon icon={faReact} size="3x" title="React" />
          <FontAwesomeIcon icon={faNodeJs} size="3x" title="Node.js" />
          
        </div>
      </div>
    </section>
  );
}

export default TechStack;
