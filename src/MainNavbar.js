import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiFileText, FiFolder } from 'react-icons/fi'; // Example icons
import 'bootstrap/dist/css/bootstrap.min.css';

export const MainNavbar = () => {
  return (
    <Navbar  collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: '25px' }}>IMRAN.ALI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto"></Nav>

          <Nav>
          <NavDropdown title="Myblogs" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#project1">
                <FiFileText size={16} style={{ marginRight: '8px' }} /> <a href="https://sialkotiincanada.com/" target="_blank" rel="noopener noreferrer">Sialkotinincanada</a> 
              </NavDropdown.Item>
              <NavDropdown.Item href="#project2">
                <FiFolder size={16} style={{ marginRight: '8px' }} /> coming soon
              </NavDropdown.Item>
            </NavDropdown>
          
            <Nav.Link href="https://www.linkedin.com/in/imran-ali-77755a264/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} style={{ marginRight: '8px' }} /> LinkedIn
            </Nav.Link>

            <Nav.Link href="https://github.com/ImranAliJutt" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} style={{ marginRight: '8px' }} /> GitHub
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
