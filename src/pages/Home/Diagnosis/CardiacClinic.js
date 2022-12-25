import React from 'react';
import diagnosis from '../../../images/department.jpg'

const CardiacClinic = () => {
    return (
        <div className='cardia'>
            <div className='diag-left'>
                <h1>Cardiac Clinic</h1>

            </div>
            <div className='diag-right'>
                <img className='h-100  w-100' src={diagnosis} alt="" />
            </div>
        </div>
    );
};

export default CardiacClinic;