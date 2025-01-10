import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NAME } from '../util/Constants';

const NavMenu = (props) => {
    const { refs } = props;
    const handleClick = (ref) => {
        ref.current.scrollIntoView();
    }    
    return (
        <Navbar sticky='top' collapseOnSelect expand='lg' className="bg-body">
            <Navbar.Brand>{NAME}</Navbar.Brand >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href='#about' onClick={() => handleClick(refs.about)}>// About</Nav.Link>
                    <Nav.Link href='#academics' onClick={() => handleClick(refs.acad)}>// Academics</Nav.Link>
                    <Nav.Link href='#skills' onClick={() => handleClick(refs.skill)}>// Skills</Nav.Link>
                    <Nav.Link href='#experience' onClick={() => handleClick(refs.job)}>// Experience</Nav.Link>
                    <Nav.Link href='#projects' onClick={() => handleClick(refs.proj)}>// Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavMenu;