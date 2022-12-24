import React, { useEffect, useState } from 'react';
import sectionImg from '../images/section-img.png'
import "./ReadyToHelp.css"

const ReadyToHelp = () => {
    const [emergencyServices, setEmergencyServices]= useState([])
    useEffect(()=>{
        fetch('./readyToHelp.json')
        .then(res=>res.json())
        .then(data=>setEmergencyServices(data))
    },[])

    return (
        <div className='container ready-to-help-section mt-5'>
            <h1>We Are Always Ready To Help You & Your Family</h1>
            <img className='my-4' src={sectionImg} alt="" />
            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
            <div className="container my-5 row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {
                    emergencyServices.map(emergencyService=> <div className='emergency-service-card'>
                        <i className={emergencyService.icon}></i>
                        <h3 className='text-dark'>{emergencyService.title}</h3>
                        <p className='my-3'>{emergencyService.description}</p>
                    </div>)
                }

            </div>
        </div>
    );
};

export default ReadyToHelp;