import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Btn from '../components/common/Btn';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Klienti
          </Nav.Link>
          <Nav.Link as={Link} to="/boxes">
            Kastes
          </Nav.Link>
          <NavDropdown title="Uzlīmes" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/newlabels">
              Izdrukāt jaunus svītrkodus
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/labels">
              Izdrukāt esošus svītrkodus
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Btn text={'Logout'} color={'primary'} />
        </Form>
      </Navbar>
    </div>
  );
};

export default Header;
