import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Search, BellFill } from "react-bootstrap-icons";
import '../Css/NavBar.css'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <img className="logo" src="/assets/netflix_logo.png" alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#"><Search></Search></Nav.Link>
            <Nav.Link href="#">KIDS</Nav.Link>
            <Nav.Link href="#"><BellFill></BellFill></Nav.Link>
            <NavDropdown title="User" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">U_U</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                OwO
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">^3^</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                ¬_¬
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
