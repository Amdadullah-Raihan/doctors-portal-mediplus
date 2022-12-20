import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import logo from '../images/logo.png'
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    console.log(user);

    let activeStyle = {
        textDecoration: "underline",
        color: "#3187D7"
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
                        <Nav.Link>
                            <NavLink
                                to="/appointments"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                Appointments
                            </NavLink>
                        </Nav.Link>



                    </Nav>
                    <Nav>
                        {
                            user.email ? <div>
                                {['bottom'].map((placement) => (
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Header className='' as="h3">
                                                    <img className='border rounded-circle' src={user.photoURL} alt="Profile pic" /> <br />
                                                    <p className='fw-bold'>{user.displayName}</p>
                                                </Popover.Header>
                                                <Popover.Body className='popover-body'>
                                                    <Link>Your Appointments</Link> <br />
                                                    <button onClick={handleSignOut} className='btn'>Log Out</button>
                                                    <Link></Link>
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <Button variant="bg-light text-dark ">
                                            {user.displayName}
                                            <img className='border border-primary rounded-circle ms-2' src={user.photoURL} height='30px' width='30px' alt="Pro" /></Button>
                                    </OverlayTrigger>
                                ))}
                            </div> : <div>
                                <Link to='/register'><button className='btn border border-primary'>Register</button></Link>
                                <Link to='/login'><button className="btn border border-primary">Log in</button></Link>
                            </div>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;