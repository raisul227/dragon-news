import React from 'react';
import { FaFacebook, FaTwitter, } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='text-center d-flex flex-column align-items-center justify-content-center' style={{ background: '#f4f4f4', height: '80px' }}>
            <p className='mt-2'> &copy; Copyright all right reserved</p>
            <div>
                <FaFacebook className='me-2' style={{ fontSize: '20px' }}></FaFacebook>

                <FaTwitter style={{ fontSize: '20px' }}></FaTwitter>
            </div>
        </div>
    );
};

export default Footer;