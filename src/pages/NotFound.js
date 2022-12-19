import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center' style={{height:"90vh"}}>
            <p className='text-danger fs-xxl' style={{ fontSize:"100px", textShadow:"5px 2px 10px"}}>404!</p>
            <h1>Oopps!! The page you're looking for was not found </h1>
            <Link to='/'><button className='btn btn-danger text-bold'>Go to home</button></Link>
        </div>
    );
};

export default NotFound;