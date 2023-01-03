import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import googleLogo from '../../images/GOOG-0ed88f7c.png'
import './Login.css'


const Login = () => {

    const { user,setUser, handleGoogleSignIn, signInUser,error,setError } = useAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/'
    

    const handleSignIn = (e) => {
        e.preventDefault();
        if(password.length <6){
            setError("Password must be at least 6 characters long!")
            return
        }
        signInUser(email, password)

    }
    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)

    }

    const handleRedirect = () =>{
        handleGoogleSignIn()
            .then(result => {
                setUser(result.user)
                navigate(redirect_uri)
            })
    }

    return (
        
        <>
            {
                user.email ?
                    <div className='my-5 py-5'>
                        <div className='my-5 py-5'>
                            <i className='fa-solid fa-circle-check text-success fs-1'></i>
                            <h1 className='text-success mb-5'>Log in Successful!</h1>
                            <Link to={redirect_uri}> <button className='btn btn-success'>Continue</button></Link>
                        </div>
                    </div>
                    :
                    <div className='container my-lg-5'>
                        <div className='container row row-cols-1 row-cols-lg-2 mx-auto shadow my-3'>
                            <div className="login-pic container">

                            </div>
                            <div className=' my-5 h-100 '>
                                <h2>Log in </h2>

                                <form action="" className='d-flex flex-column ' onSubmit={handleSignIn}>
                                    <input onBlur={handleEmail} className='my-2 p-2 border  rounded ' placeholder='Enter your email' type="text" name="" id="" required />
                                    <input onBlur={handlePassword} className='my-2 p-2 border rounded' placeholder='Enter your password' type="password" name="" id=""  required/>
                                    <div className='text-danger h-auto '>
                                        <p className='text-danger fs-5'>{error}</p>
                                    </div>

                                    <input className='my-2 p-2 border-none border rounded primary-bg text-light' type="submit" name="" value="Log in" id="" />
                                </form>
                                <p>Don't have an account?</p>
                                <p><Link to='/register'> Register here</Link></p>
                                <hr className='w-100' />
                                <p>or</p>
                                <button onClick={handleRedirect} className='extra-login-btn'> <img src={googleLogo} alt='' className='google-logo' />Continue with Google <></></button>
                            </div>
                        </div>
                    </div>

            }
        </>

    );
};

export default Login;