import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        <Link to='/appoinments'><button className='btn border border-primary'>Appointments</button></Link>
                        <Link to='/login'><button className="btn border border-danger">Log in  </button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;