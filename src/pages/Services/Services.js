import React from 'react';
import Service from './Service';
import useServices from '../../hooks/useServices';


const Services = () => {

    const {services} = useServices();
    
    return (
        <div className='container my-5 py-5'>
            <h1 className='w-75 mx-auto'>We provide you all services you needed from a hospital</h1>
            <div className='services-container mt-5 container row row-cols-1 row-cols-lg-3 g-3'>
                
                {
                    services?.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;