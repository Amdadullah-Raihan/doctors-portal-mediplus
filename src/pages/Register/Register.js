import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/GOOG-0ed88f7c.png'

const Register = () => {

    const {user, handleGoogleSignIn, signUpNewUser} = useFirebase();
    
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')

    const handleRegister = (e) => {
        e.preventDefault();
        
       signUpNewUser(email,password)

    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
        
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
       
    }

    return (

        <>
            {
                user.email ? 
                <div className='my-5 py-5'>
                    <div className='my-5 py-5'>
                            <i className='fa-solid fa-circle-check text-success fs-1'></i>
                            <h1 className='text-success mb-5'>You are registered!</h1>
                            <Link to='/'> <button className='btn btn-success'>Go to home</button></Link>
                    </div>
                </div>
                : <div className='container my-lg-5 '>
                    <div className='container mx-auto row row-cols-1 row-cols-lg-2 shadow my-3'>
                        <div className="login-pic container">

                        </div>
                        <div className=' my-5  h-100 d-flex flex-column '>
                            <h3> Register </h3>
                            <form className='d-flex flex-column' action="" onSubmit={handleRegister}>
                                <input className='my-2 p-2 border rounded' onBlur={handleEmail} placeholder='Enter your email' type="text" name="" id="" required />
                                <input className='my-2 p-2 border rounded' onBlur={handlePassword} placeholder='Enter your password' type="text" name="" id="" />
                                <input className='my-2 p-2 border rounded' placeholder='Confirm your password' type="text" name="" id="" required />

                                <input className='my-2 p-2 border border-none rounded primary-bg text-light' type="submit" name="" value="Register" id="" required />
                            </form>

                            <p>Already Registered?</p>
                            <p><Link to='/login'> Log in here</Link></p>
                            <hr className='w-100' />
                            <p>or</p>
                            <button onClick={handleGoogleSignIn} className="btn border border-primary  position-relative d-flex align-items-center rounded-pill p-2"> <img src={logo} alt="" className="google-logo start-0 position absolute" />  <p className='d-flex w-100 justify-content-center align-items-center'> Register with Google</p></button>
                        </div>
                    </div>
                </div>
            }
        </>

    );
};

export default Register;