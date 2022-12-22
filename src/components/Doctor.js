import React from 'react';

const Doctor = ({doctor}) => {
    return (
        <div className='border h-auto'>
            <div className='h-75 w-100'>
                <img className='h-100 w-100'  src={doctor.img} alt="" />

            </div>
            <div className='h-25'>
                <small>{doctor.designation}</small>
                <h5 className='text-dark'>{doctor.name}</h5>
            </div>
        </div>
    );
};

export default Doctor;