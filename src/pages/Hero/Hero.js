import React from 'react';
import './Hero.css'


const Hero = () => {
    return (
        <div className='hero-section'>
            <div className="transparent-div"></div>
            <div className="hero-contents container">
                <h1>We provide medical services that everyone can trust!!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officiis, facilis fugit omnis iure magni.</p>
                <div className="hero-btn-container">
                    <button className='primary-btn text-light px-4 py-2'>Get Appointment</button>
                    <button className='secondary-btn text-light px-3 py-2'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;