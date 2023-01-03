import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import googleLogo from '../../images/GOOG-0ed88f7c.png'
import './Register.css'
const Register = () => {

    const { user, handleGoogleSignIn, signUpNewUser, error, setError } = useFirebase();

    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [passwordMatch, setPasswordMatch] = useState(' ')


    const handleRegister = (e) => {

        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be six characters long!')
            return;
        }
        // else if (password !== passwordMatch) {
        //     setError("Passwords didn't match")
        //     return;
        // }
        else {

            signUpNewUser(email, password)
        }


    }
    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)

    }
    const handlePasswordMatch = (e) => {
        setPasswordMatch(e.target.value)
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
                                <h2> Register </h2>
                                <form className='d-flex flex-column' action="" onSubmit={handleRegister}>
                                    <input className='my-2 p-2 border rounded' onBlur={handleEmail} placeholder='Enter your email' type="text" name="" id="" required />
                                    <input className='my-2 p-2 border rounded' onBlur={handlePassword} placeholder='Enter your password' type="text" name="" id="" />
                                    <input className='my-2 p-2 border rounded' placeholder='Confirm your password' type="text" name="" id="" required />
                                    <div>
                                        <p className='text-danger fs-5'>{error}</p>
                                    </div>
                                    <input onBlur={handlePasswordMatch} className='my-2 p-2 border border-none rounded primary-bg text-light' type="submit" name="" value="Register" id="" required />
                                </form>

                                <p>Already Registered?</p>
                                <p><Link to='/login'> Log in here</Link></p>
                                <hr className='w-100' />
                                <p>or</p>
                                <button onClick={handleGoogleSignIn} className='extra-login-btn'> <img src={googleLogo} alt='' className='google-logo'/>Continue with Google <></></button>
                            </div>
                        </div>
                    </div>
            }
        </>

    );
};

export default Register;