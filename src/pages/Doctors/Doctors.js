import React from 'react';
import Doctor from './Doctor';
import useDoctors from '../../hooks/useDoctors';

const Doctors = () => {
    const {doctors} = useDoctors();

    return (
        <div className='container py-5 h-auto'> 
            <h1 className='my-5 py-5'>Meet our world class doctors</h1>
            <div className="row row-cols-1 row-cols-lg-4 p-5">
                {
                    doctors.map(doctor=> <Doctor key={doctor.id} doctor={doctor}></Doctor> )
                }
            </div>
        </div>
    );
};

export default Doctors;