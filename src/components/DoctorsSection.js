import React from 'react';
import useDoctors from '../hooks/useDoctors';
import Doctor from './Doctor';
import sectionImg from "../images/section-img.png"

const DoctorsSection = () => {
    const {doctors} = useDoctors();
    const drs = doctors.slice(2,6)

    return (
        <div className=' py-5'>
            <h2 className='text-dark mb-3'>We Have Specialist Doctors To Solve Your Problems</h2>
            <img className="primary-color mb-3" src={sectionImg} alt="" />
            <p className='mb-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, harum! Lorem ipsum dolor sit. </p>
            <div className='container mx-auto h-auto row row-cols-1  row-cols-lg-4'>
                {
                    drs.map(dr => <Doctor doctor={dr}></Doctor>)
                }
            </div>
        </div>
    );
};

export default DoctorsSection;