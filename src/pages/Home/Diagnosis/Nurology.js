import React from 'react';
import diagnosis from '../../../images/department.jpg'

const Nurology = () => {
    return (
        <div className='cardia row row-cols-1 row-cols-lg-2 w-100 my-5 py-5 '>
            <div className='diag-left text-start'>
                <h2>Nurology</h2>
                <hr className='w-25' />
                <p className='primary-color mb-4 fw-bold'>Unravelling the mysteries of the brain and nervous system: A closer look at neurology!</p>

                <p className='text-secondary mb-4'>Neurology is a medical specialty that focuses on the diagnosis, treatment, and management of conditions and diseases of the brain, spinal cord, and nerves. </p>

                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i> Neurology is a medical specialty that focuses on the brain, spinal cord, and nerves.</p>
                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i> Neurologists are medical doctors who specialize in this area of medicine.</p>
                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i> Neurology involves the diagnosis, treatment, and management of a wide range of conditions.</p>

            </div>
            <div className='diag-right d-flex align-items-center'>
                <img className='h-auto  w-100' src={diagnosis} alt="" />
            </div>
        </div>
    );
};

export default Nurology;