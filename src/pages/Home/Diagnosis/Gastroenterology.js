import React from 'react';
import diagnosis from '../../../images/department.jpg'

const Gastroenterology = () => {
    return (
        <div className='cardia row row-cols-1 row-cols-lg-2 w-100 my-5 py-5 '>
            <div className='diag-left text-start'>
                <h2>Gastroenterology</h2>
                <hr className='w-25' />
                <p className='primary-color mb-4 fw-bold'>Gastrointestinal health at the forefront: A closer look at gastroenterology!</p>

                <p className='text-secondary mb-4'>Gastroenterology is a medical specialty that focuses on the diagnosis, treatment, and management of conditions and diseases of the digestive system.</p>

                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i> Gastroenterology is a medical specialty that focuses on the digestive system.</p>
                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i>Gastroenterologists are medical doctors who specialize in this area of medicine.</p>
                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i>Gastroenterology involves the diagnosis, treatment, and management of a wide range of conditions.</p>

            </div>
            <div className='diag-right d-flex align-items-center'>
                <img className='h-auto  w-100' src={diagnosis} alt="" />
            </div>
        </div>
    );
};

export default Gastroenterology;