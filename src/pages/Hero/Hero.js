import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'


const Hero = () => {
    return (
        <div className='hero-section'>
            <div className="transparent-div"></div>
             <div className="row row-cols-1 row-cols-lg-2">
                <div className="hero-left container">
                    <h1 >We provide <span className='primary-color '>medical</span> services that everyone can <span className='primary-color'>trust!!</span></h1>
                    <p>Helping you make informed decisions about your health</p>
                    <div className="hero-btn-container">
                        <Link to='/appointment'><button className='primary-btn text-light px-4 py-2'>Get Appointment</button></Link>
                        <Link to='/about-us'><button className='secondary-btn text-light px-3 py-2'>Learn More</button></Link>
                    </div>
                    
                </div>
                <div className='hero-right'>
                    <img src="https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png" alt="" />
                </div>
             </div>
        </div>
    );
};

export default Hero;