import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap'
import logo from '../assets/images/logo.png';
import Modal from './common/Modal';

function Header() {
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand href=""><img src={logo} alt="Logo" className="logo"/></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Klienti</Nav.Link>
                        <Nav.Link href="/boxes">Kastes</Nav.Link>
                        <NavDropdown title="Izdrukāt uzlīmes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">
                                <Modal
                                    btnText="Izdrukāt jaunus svītrkodus"
                                    cancel="Atcelt"
                                    save="drukāt"
                                    dialogTitle="Izdrukāt jaunas uzlīmes"
                                />
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Izdrukāt esošus svītrkodus</NavDropdown.Item>
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