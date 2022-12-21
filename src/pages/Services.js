import React from 'react';
import Service from '../components/Service';

const Services = () => {
    const [services] = useServi
    return (
        <div>
            <div className='services-container mt-5'>
                {
                    services?.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;