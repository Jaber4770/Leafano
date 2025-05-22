import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="relative border-t-2 border-base-300 overflow-hidden">
            {/* Background Image Layer */}
            <div className='absolute inset-0 bg-[url("https://i.ibb.co/f5hK11X/486588-PH5-G5-D-847.jpg")] bg-contain bg-right bg-center bg-no-repeat opacity-40 z-0'></div>

            {/* Footer Content */}
            <footer className="footer footer-horizontal footer-center text-base-content rounded p-10 container mx-auto relative z-10">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>

                <nav>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        {/* Social Icons */}
                        <FaFacebook />
                        <FaYoutube />
                        <FaXTwitter />
                        <FaLinkedin />
                    </div>
                </nav>

                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
