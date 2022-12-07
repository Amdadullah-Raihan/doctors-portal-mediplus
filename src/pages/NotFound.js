import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{height:"90vh"}}>
            <p style={{color:"blue", fontSize:"100px", textShadow:"2px 2px 2px"}}>404!</p>
            <h1>Oopps!! The page you're looking for was not found </h1>
            <Link to='/'><button className='btn btn-danger text-bold'>Go to home</button></Link>
        </div>
    );
};

export default NotFound;