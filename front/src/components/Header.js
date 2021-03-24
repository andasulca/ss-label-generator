import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap'
import logo from '../assets/images/logo.png';

function Header() {
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand href=""><img src={logo} alt="Logo" className="logo"/></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Klienti</Nav.Link>
                        <Nav.Link href="/boxes">Kastes</Nav.Link>
                        <NavDropdown title="Uzlīmes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="newlabels">Izdrukāt jaunus svītrkodus</NavDropdown.Item>
                            <NavDropdown.Item href="labels">Izdrukāt esošus svītrkodus</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-danger">Logout</Button>
                    </Form>
            </Navbar>
        </div>
    )
}

export default Header;