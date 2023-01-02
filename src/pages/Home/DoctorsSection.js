import React from 'react';
import useDoctors from '../../hooks/useDoctors';
import Doctor from '../Doctors/Doctor';
import sectionImg from "../../images/section-img.png"
import { Link } from 'react-router-dom';

const DoctorsSection = () => {
    const {doctors} = useDoctors();
    const drs = doctors.slice(3,6)

    return (
        <div className="doctors-section">
            <div className=' py-5'>
                <h2 className='text-dark mb-3'>We Have Specialist Doctors To Solve Your Problems</h2>
                <img className="primary-color mb-3" src={sectionImg} alt="" />
                <p className='mb-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, harum! Lorem ipsum dolor sit. </p>
                <div className='container mx-auto h-auto row row-cols-1 row-cols-md-2  row-cols-lg-3'>
                    {
                        drs.map(dr => <Doctor doctor={dr}></Doctor>)
                    }
                </div>

                <div>
                    <Link to='/doctors'><button className="primary-btn text-light border px-3 py-2 rounded">See Other Dcotors  <i className='fa-solid fa-arrow-right ms-1'></i></button></Link>
                </div>

            </div>
        </div>
    );
};

export default DoctorsSection;