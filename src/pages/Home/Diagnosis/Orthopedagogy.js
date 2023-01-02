import React from 'react';
import diagnosis from '../../../images/department.jpg'

const Orthopedagogy = () => {
    return (
        <div className='cardia row row-cols-1 row-cols-lg-2 w-100 my-5 py-5 '>
            <div className='diag-left text-start'>
                <h2>Orthopedagogy</h2>
                <hr className='w-25' />
                <p className='primary-color mb-4 fw-bold'>Helping you move through life with ease: A closer look at orthopedics!</p>

                <p className='text-secondary mb-4'>Orthopedics is a medical specialty that focuses on the diagnosis, treatment, and management of conditions and diseases of the musculoskeletal system. This includes the bones, joints, muscles, ligaments, and tendons. </p>

                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i> Orthopedics is a medical specialty that focuses on the musculoskeletal system.</p>
                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i> Orthopedists are medical doctors who specialize in this area of medicine.</p>
                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i> Orthopedics may involve a wide range of procedures, including surgeries, physical therapy, and rehabilitation.</p>

            </div>
            <div className='diag-right d-flex align-items-center'>
                <img className='h-auto  w-100' src={diagnosis} alt="" />
            </div>
        </div>
    );
};

export default Orthopedagogy;