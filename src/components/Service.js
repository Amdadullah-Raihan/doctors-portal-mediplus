import React from 'react';
import './Service.css'

const Service = ({service}) => {
    return (
        <div className='service-card'>
            <div className="service-card-logo">
                <i className={service.icon}></i>
            </div>
            <div className="service-card-contents">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;