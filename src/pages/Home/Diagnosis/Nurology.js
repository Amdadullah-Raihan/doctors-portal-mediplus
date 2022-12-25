import React from 'react';
import diagnosis from '../../../images/department.jpg'

const Nurology = () => {
    return (
        <div className='cardia row row-cols-1 row-cols-lg-2 w-100 my-5 py-5 '>
            <div className='diag-left text-start'>
                <h2>Nurology</h2>
                <hr className='w-25' />
                <p className='primary-color mb-4 fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat culpa quae quo voluptates debitis nemo!</p>

                <p className='text-secondary mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quas iusto quibusdam tempora aperiam neque similique voluptas quo at, atque ipsa ipsum alias commodi accusantium?</p>

                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, iste?</p>
                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, iste?</p>
                <p> <i class="fa-solid fa-circle-check primary-color me-2"></i> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, iste?</p>

            </div>
            <div className='diag-right'>
                <img className='h-100  w-100' src={diagnosis} alt="" />
            </div>
        </div>
    );
};

export default Nurology;