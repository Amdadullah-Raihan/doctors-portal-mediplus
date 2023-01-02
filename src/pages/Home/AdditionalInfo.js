import React from 'react';
import './AdditionalInfo.css'

const AdditionalInfo = () => {
    return (
       <div className='additional-info-container '>
            <div className=" mb-5 position-relative container">
                <div className=' additional-info-section'>
                    <div className='primary-bg additional-info-card text-start px-3 py-5'>
                        <p>Life-threatening</p>
                        <h3>Emergency Cases</h3>
                        <p>Medical emergencies are sudden, unexpected health events that require immediate medical attention. Examples of medical emergencies may include heart attacks, strokes, severe bleeding, and respiratory distress.</p>
                        <h5>Learn more <i className='fa-solid fa-arrow-right fs-6 '></i></h5>
                    </div>
                    <div className='primary-bg additional-info-card text-start px-3 py-5'>
                        <p>Patient schedule</p>
                        <h3>Doctors Timetable</h3>
                        <p>A doctor's timetable refers to their schedule for seeing patients and performing medical duties. This can vary greatly depending on the type of practice the doctor works in and their specialty. For example, a doctor working in a hospital may have a more unpredictable schedule, with long shifts and on-call responsibilities. </p>
                        <h5>Learn more <i className='fa-solid fa-arrow-right fs-6 '></i></h5>
                    </div>
                    <div className='primary-bg additional-info-card text-start px-3 py-5'>
                        <p>Operating hours</p>
                        <h3>Opening Hours</h3>
                        <p>Opening hours refer to the times during which a business, service, or facility is open and available for use. For example,our medical may have opening hours of 9:00 AM to 5:00 PM on weekdays, and may be closed on weekends.</p>
                        <h5>Learn more <i className='fa-solid fa-arrow-right fs-6 '></i></h5>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default AdditionalInfo;