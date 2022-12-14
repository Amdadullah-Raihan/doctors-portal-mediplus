import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    

    return (
        <div className='container my-5 h-100 d-flex flex-column w-25 border p-3 border-primary'>
            <h3>Log in </h3>
            
            <input className='my-2 p-2 border border-primary' placeholder='Enter your email' type="text" name="" id="" />
            <input className='my-2 p-2 border border-primary' placeholder='Enter your password' type="text" name="" id="" />
            <input className='my-2 p-2 border border-primary' placeholder='Confirm Password' type="password" name="" id="" />
            <input className='my-2 p-2 btn btn-primary'  type="button" name="" value="Log in" id="" />
            <p>Don't have an account?</p>
            <p><Link to='/registration'> Register here</Link></p>
            <hr className='w-100'/>
            <p>or</p>
            <button className="btn border border-primary"> Log in with Google</button>
            
            
        </div>
    );
};

export default Login;