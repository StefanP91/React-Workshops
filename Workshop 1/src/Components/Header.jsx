import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {

    return (
        <>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">Shoes Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">About us</Nav.Link>
                            <Nav.Link href="#">Features</Nav.Link>
                            <NavDropdown title="Pricing" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Price 1</NavDropdown.Item>
                                <NavDropdown.Item href="#">Price 2</NavDropdown.Item>
                                <NavDropdown.Item href="#">Price 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Price 4</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header