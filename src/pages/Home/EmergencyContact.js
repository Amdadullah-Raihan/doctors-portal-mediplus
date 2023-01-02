import React from 'react';
import './EmergencyContact.css'

const EmergencyContact = () => {
    return (
        <div className='emergency-contact-section h-100 py-5' >
           <div className="container my-5 py-5 ">
                <div className="trasparent">

                </div>
                <div className='emg-contact-info'>
                    <h1 className='text-light'>Do you need Emergency Medical Care? Call @ +880123456789</h1>
                    <p className='text-light'>It is important to remember that medical emergencies can be serious and require immediate attention. Don't delay seeking help in the event of a medical emergency.</p>
                    <div className=''>
                        <button className='white-btn'>Contact Now</button>
                        <button className='btn text-light border p-2 '>Learn More <i className='fa-solid fa-arrow-right '></i></button>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default EmergencyContact;