import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../components/common/Button";
import logo from "../assets/images/logo.png";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
				{isAuthenticated && (
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
        )}
        {isAuthenticated && (
          <Button
            text={"Logout"}
            color={"primary"}
            variant="outlined"
            onClick={() => logoutWithRedirect()}
          />
        )}
				{!isAuthenticated && (
          <Button
            text={"Login"}
            color={"primary"}
            variant="outlined"
            onClick={() => loginWithRedirect()}
          />
        )}
      </Navbar>
    </div>
  );
};

export default Header;
