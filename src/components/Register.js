import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import logo from '../images/GOOG-0ed88f7c.png'

const Register = () => {

    const {handleGoogleSignIn, signUpNewUser} = useFirebase();

    return (
        <div className='m-5 p-5'>
            <Container className='shadow d-flex mx-auto overflow-hidden'>
                <Row className='container'>
                    <Col className="login-pic container" sm={12} md={6} lg={6}>

                    </Col>
                    <Col sm={12} md={6} lg={6} className=' my-5 ps-5 h-100 d-flex flex-column '>
                        <h3> Register </h3>

                        <input className='my-2 p-2 border rounded' placeholder='Enter your email' type="text" name="" id="" required />
                        <input className='my-2 p-2 border rounded' placeholder='Enter your password' type="text" name="" id="" />
                        <input className='my-2 p-2 border rounded' placeholder='Confirm your password' type="text" name="" id="" required />

                        <input className='my-2 p-2 border border-none rounded primary-bg text-light' type="submit" name="" value="Register" id="" required />
                        <p>Already Registered?</p>
                        <p><Link to='/login'> Log in here</Link></p>
                        <hr className='w-100' />
                        <p>or</p>
                        <button onClick={handleGoogleSignIn} className="btn border border-primary  position-relative d-flex align-items-center rounded-pill p-2"> <img src={logo} alt="" className="google-logo start-0 position absolute" />  <p className='d-flex w-100 justify-content-center align-items-center'> Register with Google</p></button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;