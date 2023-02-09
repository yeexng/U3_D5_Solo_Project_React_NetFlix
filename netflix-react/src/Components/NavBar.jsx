import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Search, BellFill } from "react-bootstrap-icons";
import '../Css/NavBar.css'
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {

  const location = useLocation()
  console.log(location)

  const navigate = useNavigate()

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Link to='/'>

        <Navbar.Brand>
          <img className="logo" src="/assets/netflix_logo.png" alt="logo"/>
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='/'>
              <div className="nav-link">Home</div>
            </Link>
            <Link to='/tv-shows'>
              <div className="nav-link">TV Shows</div>
            </Link>
            <div className="nav-link">Movies</div>
            <div className="nav-link">Recently Added</div>
            <div className="nav-link">My List</div>
          </Nav>
          <Nav className="ml-auto">
            <div className="nav-link"><Search></Search></div>
            <div className="nav-link">KIDS</div>
            <div className="nav-link"><BellFill></BellFill></div>
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
