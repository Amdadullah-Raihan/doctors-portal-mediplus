import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './Diagnosis.css'

const Diagnosis = () => {


    return (
        <div className='my-5 h-auto'>
            <div className='container daignosis-links row row-cols-3 row-cols-lg-5 mx-auto'>

                <Link className='diagnosis-link' to='/link-1'> <i className='fa-solid fa-heart-pulse'></i> Cardiac Clininc </Link>
                <Link className='diagnosis-link' to='/link-2'> <i className='fa-solid fa-brain'></i> Neurology</Link>
                <Link className='diagnosis-link' to='/link-3'> <i className='fa-solid fa-tooth'></i> Dentistry</Link>
                <Link className='diagnosis-link' to='/link-4'> <i className='fa-solid fa-heart-pulse'></i> Gastroenteroglogy</Link>
                <Link className='diagnosis-link' to='/link-5'> <i className='fa-solid fa-bone'></i> Orthopedagogy</Link>

            </div>

        </div>
    );
};

export default Diagnosis;