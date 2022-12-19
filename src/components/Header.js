import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png'

const Header = () => {

    let activeStyle = {
        textDecoration: "underline",
        color:"blue"
    };
    let activeClassName = "underline";


    return (
        <Navbar expand='lg' className='navbar-section '>
            <Container>
                <Navbar.Brand>
                    <img src={logo} height='30px' alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link>
                            <NavLink
                                to="/"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                Home
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink
                                to="/doctors"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                               Doctors
                            </NavLink>
                        </Nav.Link>

                        <Nav.Link>
                            <NavLink
                                to="/services"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                Services
                            </NavLink>
                        </Nav.Link>



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