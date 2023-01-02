import React from 'react';
import diagnosis from '../../../images/department.jpg'

const Dentistry = () => {
    return (
        <div className='cardia row row-cols-1 row-cols-lg-2 w-100 my-5 py-5 '>
            <div className='diag-left text-start'>
                <h2>Dentistry</h2>
                <hr className='w-25' />
                <p className='primary-color mb-4 fw-bold'>A healthy smile for life: A closer look at dentistry!</p>

                <p className='text-secondary mb-4'>Dentistry is a medical specialty that focuses on the diagnosis, treatment, and management of conditions and diseases of the mouth, teeth, and gums. </p>

                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i> Dentistry is a medical specialty that focuses on the mouth, teeth, and gums.</p>
                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i> Dentists are medical professionals who specialize in this area of medicine.</p>
                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i> Dentistry may involve a wide range of procedures, including cleanings, fillings, extractions, and cosmetic procedures.</p>

            </div>
            <div className='diag-right d-flex align-items-center'>
                <img className='h-auto  w-100' src={diagnosis} alt="" />
            </div>
        </div>
    );
};

export default Dentistry;