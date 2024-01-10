import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavMenu = () => {
    const NAME = 'Michael Campos';    
    return (
        <Navbar collapseOnSelect expand='lg' className="bg-body">
            <Navbar.Brand>{NAME}</Navbar.Brand >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href='#about'>// About</Nav.Link>
                    <Nav.Link href='#skills' >// Skills</Nav.Link>
                    <Nav.Link href='#experience' >// Experience</Nav.Link>
                    <Nav.Link href='#projects'>// Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavMenu;