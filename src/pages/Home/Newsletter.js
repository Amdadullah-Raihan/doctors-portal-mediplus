import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='newsletter-section  d-flex justify-content-center align-items-center py-5'>
            <div className="container row row-cols-1 row-cols-md-2 my-5">
                <div className='text-lg-start'>
                    <h4>Sign up for newsletter</h4>
                    <p>Subscribe to our newsletter to get allour news in your inbox. We would like to remind you about the importance of preventative care.</p>
                </div>
                <div className=''>
                    <input className='p-3  border border-none rounded ' type="text" name="" id="" placeholder='Your Email Address' />
                    <button className='py-3 px-4 border border-none  rounded primary-bg text-light fw-bold'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;