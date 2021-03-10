import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap'
import logo from '../assets/images/logo.png';

function Header() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img src={logo} alt="Logo" className="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Klienti</Nav.Link>
                        <NavDropdown title="Izdrukāt uzlīmes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Izdrukāt jaunus svītrkodus</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Izdrukāt esošus svītrkodus</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-danger">Logout</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;