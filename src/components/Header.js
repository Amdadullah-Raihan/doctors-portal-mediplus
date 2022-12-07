import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../images/logo.png'

const Header = () => {
    return (
        <Navbar expand='lg'>
            <Container>
                <Navbar.Brand>
                    <img src={logo} height='30px' alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'> 
                    <Nav className='me-auto'>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Doctors</Nav.Link>
                        <Nav.Link>Services</Nav.Link>
                    </Nav>
                    <Nav>
                        <button className='btn btn-primary'>Appointments</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;