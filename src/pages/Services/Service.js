import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    return (
        <div className='service-card mb-5'>
            <div className="service-card-logo">
                <i className={service.icon}></i>
            </div>
            <div className="service-card-contents">
                <h4>{service.title}</h4>
                <p>{service.description}</p> 
                <Link service={service} to={'/service/' + service.id}> <button className='btn bg-light m-0 '>Learn more <i className='fa-solid fa-arrow-right'></i></button></Link>
            </div>
        </div>
    );
};

export default Service;