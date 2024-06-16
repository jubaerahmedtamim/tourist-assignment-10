import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <aside>
                <p className='text-lg'>Green Excursion Center</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <Link to='#'><FaTwitter></FaTwitter></Link>
                    <Link to='#'><FaYoutube></FaYoutube></Link>
                    <Link to='#'><FaFacebook></FaFacebook></Link>
                </div>
            </nav>
            <aside>
                <p>Copyright © 2024 - All right reserved by Green Excursion Center</p>
            </aside>
        </footer>
    );
};

export default Footer;