import React from 'react';
import './AdditionalInfo.css'

const AdditionalInfo = () => {
    return (
       <div className='additional-info-container'>
            <div className=" mb-5 position-relative container">
                <div className=' additional-info-section'>
                    <div className='primary-bg additional-info-card text-start px-3 py-5'>
                        <p>Lorem, ipsum.</p>
                        <h3>Emergency Cases</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam eveniet ad aliquid eum id quasi?</p>
                        <h5>Learn more <i className='fa-solid fa-arrow-right fs-6 '></i></h5>
                    </div>
                    <div className='primary-bg additional-info-card text-start px-3 py-5'>
                        <p>Lorem, ipsum.</p>
                        <h3>Doctors Timetable</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam eveniet ad aliquid eum id quasi?</p>
                        <h5>Learn more <i className='fa-solid fa-arrow-right fs-6 '></i></h5>
                    </div>
                    <div className='primary-bg additional-info-card text-start px-3 py-5'>
                        <p>Lorem, ipsum.</p>
                        <h3>Opening Hours</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam eveniet ad aliquid eum id quasi?</p>
                        <h5>Learn more <i className='fa-solid fa-arrow-right fs-6 '></i></h5>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default AdditionalInfo;