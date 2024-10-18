import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NAME } from '../util/Constants';
import { Link } from 'react-scroll';

const NavMenu = (props) => {
    const { refs } = props;
    const handleClick = (ref) => {
        ref.current.scrollIntoView();
    }    
    const smooth = true
    const duration = 250
    return (
        <Navbar sticky='top' collapseOnSelect expand='lg' className="bg-body">
            <Navbar.Brand>{NAME}</Navbar.Brand >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Link to='about' duration={duration}>// About</Link></Nav.Link>
                    <Nav.Link><Link to='skills' duration={duration}>// Skills</Link></Nav.Link>
                    <Nav.Link><Link to='job' duration={duration}>// Experience</Link></Nav.Link>
                    <Nav.Link><Link to='proj' duration={duration}>// Projects</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavMenu;