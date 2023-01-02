import React from 'react';
import diagnosis from '../../../images/department.jpg'

const CardiacClinic = () => {
    return (
        <div className='cardia row row-cols-1 row-cols-lg-2 w-100 my-5 py-5 '>
            <div className='diag-left text-start'>
                <h2>Cardiac Clinic</h2>
                <hr  className='w-25'/>
                <p className='primary-color mb-4 fw-bold'>Compassionate care for heart health: A closer look at our cardiac clinic</p>

                <p className='text-secondary mb-4'>A cardiac clinic is a medical facility that specializes in the diagnosis, treatment, and management of heart-related conditions. This may include conditions such as heart disease, heart attacks, and arrhythmias.</p>

                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i> A cardiac clinic is a medical facility that specializes in the diagnosis, treatment, and management of heart-related conditions.</p>
                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i> The team at a cardiac clinic typically includes doctors and other healthcare professionals who are trained in the diagnosis and treatment of heart conditions.</p>
                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i> Cardiac clinics may offer a range of services, including diagnostic testing, medication management, and rehabilitation.</p>

            </div>
            <div className='diag-right d-flex align-items-center'>
                <img className='h-auto  w-100' src={diagnosis} alt="" />
            </div>
        </div>
    );
};

export default CardiacClinic;