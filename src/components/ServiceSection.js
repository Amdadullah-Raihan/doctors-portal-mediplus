import { useSSRSafeId } from '@react-aria/ssr';
import React, { useEffect, useState } from 'react';
import sectionImg from "../images/section-img.png"
import Service from './Service';
import './ServiceSection.css'

const ServiceSection = () => {
    const [services, setServices] = useState();
    useEffect(()=>{
        fetch('./services.json')
            .then(res=>res.json())
            .then(data=>setServices(data))
    },[])

    return (
        <div className='sevice-section container mt-5 mb-5'>
            <h1>We Offer Different Services To Improve Your Health</h1>
            <img className='m-3' src={sectionImg} alt="" />
            <p className='m-3 text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum molestiae sint explicabo!</p>
            <div className='services-container mt-5'>
                {
                    services?.map(service=> <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default ServiceSection;