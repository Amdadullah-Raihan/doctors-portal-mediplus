import React from 'react';
import Service from '../components/Service';

const Services = () => {
    // const [services] = useServices();
    return (
        <div className='container my-5 py-5'>
            <div className='services-container my-5 py-5'>
                <h1>We provide you all services you needed from a hospital</h1>
                {/* {
                    services?.map(service => <Service service={service} key={service.id}></Service>)
                } */}
            </div>
        </div>
    );
};

export default Services;