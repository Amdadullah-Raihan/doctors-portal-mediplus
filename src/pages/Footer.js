import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className=' primary-bg d-flex align-items-center text-light p-5 footer-section'>

            <div className='container text-center row'>
                <div className='col'>
                    <h3 className='text-start'>About Us</h3>
                    <hr className='w-25 '/>
                    <p className='text-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut fugiat sint soluta iusto est in ad porro assumenda quo nihil minima impedit tempore ex, repellat unde, nemo ullam praesentium inventore.</p>
                    <div className='text-start'>
                        <i className='fa fa-facebook mx-3 fs-2'></i>
                        <i className='fa fa-youtube mx-3 fs-2'></i>
                        <i className='fa fa-twitter mx-3 fs-2'></i>
                        <i className='fa fa-instagram mx-3 fs-2'></i>

                    </div>
                </div>
                <div className='col quick-links'>
                    <h3 className='text-start'>Quick Links</h3>
                    <hr className='w-25 ' />

                    <div className='row row-cols-2 d-flex justify-content-between quick-links'>
                        <div className='text-start my-3'>
                            <i className='fa-solid fa-caret-right'></i>
                            <Link className='quick-link' to='/'> Home</Link>
                        </div>
                        <div className='text-start my-3'>
                            <i className='fa-solid fa-caret-right'></i>
                            <Link className='quick-link' to='/'> Docotors</Link>
                        </div>
                        <div className='text-start my-3'>
                            <i className='fa-solid fa-caret-right'></i>
                            <Link className='quick-link' to='/'> Services</Link>
                        </div>
                        <div className='text-start my-3'>
                            <i className='fa-solid fa-caret-right'></i>
                            <Link className='quick-link' to='/'> Appointments</Link>
                        </div>
                        <div className='text-start my-3'>
                            <i className='fa-solid fa-caret-right'></i>
                            <Link className='quick-link' to='/'> Our Cases</Link>
                        </div>
                        <div className='text-start my-3'>
                            <i className='fa-solid fa-caret-right'></i>
                            <Link className='quick-link' to='/'>FAQ</Link>
                        </div>
                        <div className='text-start my-3'>
                            <i className='fa-solid fa-caret-right'></i>
                            <Link className='quick-link' to='/'> Consulting</Link>
                        </div>
                        <div className='text-start my-3'>
                            <i className='fa-solid fa-caret-right'></i>
                            <Link className='quick-link' to='/'> Contact Us</Link>
                        </div>


                    </div>
                </div>
                <div className='col'>
                    <h3 className='text-start'>Newsletter</h3>
                    <hr className='w-25 ' />
                    <p>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                    <div className='footer-news-letter border d-flex'>
                        <input type="text" className='w-100 border border-none h-auto p-2 primary-bg' name="" id="" placeholder='Your Email Adsress' />
                        <i className='fa fa-send p-3 primary-color bg-light'></i>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;