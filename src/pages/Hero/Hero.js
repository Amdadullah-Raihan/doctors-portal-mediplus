import React from 'react';
import './Hero.css'


const Hero = () => {
    return (
        <div className='hero-section'>
            <div className="transparent-div"></div>
            <div className="hero-contents container">
                <h1 >We provide <span className='primary-color '>medical</span> services that everyone can <span className='primary-color'>trust!!</span></h1>
                <p>Helping you make informed decisions about your health</p>
                <div className="hero-btn-container">
                    <button className='primary-btn text-light px-4 py-2'>Get Appointment</button>
                    <button className='secondary-btn text-light px-3 py-2'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;