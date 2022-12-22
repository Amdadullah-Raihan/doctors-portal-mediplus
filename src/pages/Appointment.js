import React from 'react';
import './Appointment.css'

const Appointment = () => {
    return (
        <div className='container p-3 my-5 '>
            <div className='row row-cols-1 row-cols-lg-2 mx-auto'>
                <div className='row row-cols-1 shadow mx-auto'>
                    <div className='row row-cols-1 row-cols-lg-2 g-3 p-2 mb-3'>
                        <input className='px-3 py-2 border ' type="text" name="" id="" placeholder='Name' />
                        <input className='px-3 py-2 border ' type="text" name="" id="" placeholder='Name' />
                        <input className='px-3 py-2 border ' type="text" name="" id="" placeholder='Name' />
                        <input className='px-3 py-2 border ' type="text" name="" id="" placeholder='Name' />
                        <input className='px-3 py-2 border ' type="text" name="" id="" placeholder='Name' />
                        <input className='px-3 py-2 border ' type="text" name="" id="" placeholder='Name' />

                    </div>
                    <div className='d-flex flex-column'>
                        <textarea name="" placeholder='Write your message here' id="" cols="30" rows="5"></textarea>
                        <button className=' border text-light primary-bg py-3'>Book An Appointment</button>
                    </div>
                </div>
                <div className='primary-bg shadow p-4 time-table-container'>
                    <table  className='w-100'>
                        {/* <caption className='text-light fs-3 text-start'>Working Hours</caption> */}
                        <h3 className='text-start'>Working Hours</h3>
                        <tr>
                            <td>Saturday</td>
                            <td> 7am-9pm</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td> 8am-10pm</td>
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td> 9am-11pm</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td> 8am-10pm</td>
                        </tr>
                        <tr>
                            <td>Wednessday</td>
                            <td> 11am-9pm</td>
                        </tr>
                        <tr>
                            <td>Thusday</td>
                            <td> 6am-4pm</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td> 9am-10pm</td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>

    );
};

export default Appointment;