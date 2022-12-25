import React from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './Diagnosis.css'
import sectionImg from "../../../images/section-img.png"

const Diagnosis = () => {


    return (
        <div className='my-lg-5 my- h-auto'>
            <div className='container my-5'>
                <h2 className='my-5'>We Offer Different Departments To Diagnose Your Diseases</h2>
                <img src={sectionImg} alt="" />
            </div>
            <div className='container daignosis-links row row-cols-3 row-cols-lg-5 mx-auto'>

                <Link className='diagnosis-link' to='/link-1'> <i className='fa-solid fa-heart-pulse'></i> <small>Cardiac Clininc</small> </Link>
                <Link className='diagnosis-link' to='/link-2'> <i className='fa-solid fa-brain'></i> <small>Neurology</small></Link>
                <Link className='diagnosis-link' to='/link-4'> <i className='fa-solid fa-heart-pulse'></i> <small>Gastroenteroglogy</small></Link>
                <Link className='diagnosis-link' to='/link-3'> <i className='fa-solid fa-tooth'></i> <small>Dentistry</small></Link>
                <Link className='diagnosis-link' to='/link-5'> <i className='fa-solid fa-bone'></i> <small>Orthopedagogy</small></Link>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Diagnosis;