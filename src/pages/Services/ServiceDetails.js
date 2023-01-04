import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useService from '../../hooks/useService';
import useServices from '../../hooks/useServices'


const ServiceDetails = () => {

    // const [serviceDetails, setServiceDetails] = useState({});
    const params = useParams()

    const { services, isLoading } = useService();

    if (isLoading) {
        return
    }

    const service = services.filter(service => service.id == params.id)
    // setServiceDetails(service)






    return (
        <div className="container my-5 py-5">

            <div class=" mb-3 my-5 shadow" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://www.freevector.com/uploads/vector/preview/26947/Physiotherapy-Icons.jpg" class="img-fluid rounded-start h-100" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body p-5 ">
                            
                            <h3 class="card-title text-dark mb-5 mt-2"><i className={`${service[0].icon} primary-color card-text `}></i> {service[0].title}</h3>
                            <p class="card-text py-5">{service[0].description}</p>
                            <Link to='/appointment'><button className='primary-btn'>Get Appointment <i className="fa-solid fa-arrow-right ms-2"></i></button></Link>
                            {/* <p class="card-text "><small class="text-muted">Last updated 3 mins ago</small></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;