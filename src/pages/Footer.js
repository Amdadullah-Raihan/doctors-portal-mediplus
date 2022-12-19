import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-section bg-primary text-light p-5 row '>

            <div className='col m-2  '>
                <div className='col'>
                    <h3>About us</h3>
                    <p className='text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, voluptatem vero. Nihil odio necessitatibus ipsum quos alias quasi deleniti eum asperiores magni quia unde sequi, dicta repudiandae ad quod vitae!</p>
                </div>
                <div className='col'>
                    <i className='fa fa-facebook border border-light border-rounded m-2 '></i>
                    <i className='fa fa-twitter border-light border-rounded m-2 ' ></i>
                    <i className='fa fa-google border-light border-rounded m-2 ' ></i>
                    <i className='fa fa-youtube border-light border-rounded m-2 ' ></i>
                </div>
            </div>
            <div className='col'>
                <div>
                    <h3>Quick Links</h3>
                </div>
                <div className='row row-cols-2'>
                    <p>
                        <i className='fa fa-home text-light'></i>
                        Home
                    </p>
                    <p>
                        <i className='fa fa-home text-light'></i>
                        Home
                    </p>
                    <p>
                        <i className='fa fa-home text-light'></i>
                        Home
                    </p>
                    <p>
                        <i className='fa fa-home text-light'></i>
                        Home
                    </p>
                    <p>
                        <i className='fa fa-home text-light'></i>
                        Home
                    </p>
                    <p>
                        <i className='fa fa-home text-light'></i>
                        Home
                    </p>
                    <p>
                        <i className='fa fa-home text-light'></i>
                        Home
                    </p>
                    <p>
                        <i className='fa fa-home text-light'></i>
                        Home
                    </p>
                    <p>
                        <i className='fa fa-home text-light'></i>
                        Home
                    </p>
                    <p>
                        <i className='fa fa-home text-light'></i>
                        Home
                    </p>
                    <p>
                        <i className='fa fa-home text-light'></i>
                        Home
                    </p>
                    <p>
                        <i className='fa fa-home text-light'></i>
                        Home
                    </p>
                </div>
            </div>
            <div className='col'>
                <div>
                    <h3>Newsletter</h3>
                </div>
                <div>
                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et sit amet magnam ea quas, accusamus nemo ipsum voluptatum provident eius obcaecati perspiciatis, consequuntur quam molestiae rem sunt fuga architecto?
                    </p>
                    <input className='bg-primary border-light border text-light' placeholder='Enter your email here' type="text" name="" id="" />
                    <i className='fa fa-send text-primary bg-light p-2'></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;