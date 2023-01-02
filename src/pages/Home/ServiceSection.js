import { useSSRSafeId } from '@react-aria/ssr';
import React, { useEffect, useState } from 'react';
import useServices from '../../hooks/useServices';
import sectionImg from "../../images/section-img.png"
import Service from '../Services/Service';
import './ServiceSection.css'

const ServiceSection = () => {
    const {services} = useServices();
  
    return (
        <div className='sevice-section container py-5'>
            <h1>We Offer Different Services To Improve Your Health</h1>
            <img className='m-3' src={sectionImg} alt="" />
            <p className='m-3 text-dark'>Navigating the world of medicine, together. Helping you make informed decisions about your health!</p>
            <div className='services-container row row-cols-lg-3 row-cols-md-2 mt-5'>
                {
                    services?.map(service=> <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default ServiceSection;