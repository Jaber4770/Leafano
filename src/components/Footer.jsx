import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router';
import "./Navbar.css";

const Footer = () => {
    const links = <>
        <li className='pe-2'><NavLink className='px-3 py-2' to='/'>Home</NavLink></li>
        <li className='pe-2'><NavLink className='px-3 py-2' to='/browsetips'>Browse Tips</NavLink></li>
        <li className='pe-2'><NavLink className='px-3 py-2' to='/mytips'>My Tips</NavLink></li>
        <li className='pe-2'><NavLink className='px-3 py-2' to='/exploregardeners'>Explore Gargeners</NavLink></li>
        <li className='pe-2'><NavLink className='px-3 py-2' to='/sharetips'>Share Tips</NavLink></li>
        <li className='pe-2'><NavLink className='px-3 py-2' to='/terms'>Terms</NavLink></li>
    </>
    return (
        <div className="relative border-t-2 border-base-300 overflow-hidden">
            {/* Background Image Layer */}
            <div className='absolute inset-0 bg-[url("https://i.ibb.co/f5hK11X/486588-PH5-G5-D-847.jpg")] bg-contain bg-right bg-no-repeat opacity-20 z-0'></div>

            {/* Footer Content */}
            <footer className="footer footer-horizontal footer-center text-base-content rounded p-10 container mx-auto relative z-10">
                <nav className="grid grid-flow-col gap-4 list-none">
                    {links}
                </nav>
                <div className="grid grid-flow-col gap-5 text-2xl">
                    {/* Social Icons */}
                    <Link to='/'><FaFacebook className='text-green-600 cursor-pointer' /></Link>
                    <Link to='/'><FaYoutube className='text-green-600 cursor-pointer' /></Link>
                    <Link to='/'><FaXTwitter className='text-green-600 cursor-pointer' /></Link>
                    <Link to='/'><FaLinkedin className='text-green-600 cursor-pointer' /></Link>
                </div>
                <div>
                    <address className="not-italic text-sm leading-relaxed">
                        <strong>Leafano.</strong><br />
                        123 Bloom Lane,<br />
                        Garden City, FL 32789,<br />
                        United States<br />
                        Phone: <a href="tel:+15551234567" className="text-green-600 hover:underline">+1 (555) 123-4567</a><br />
                        Email: <a href="mailto:support@greenrootsgardening.com" className="text-green-600 hover:underline">support@leafano.com</a>
                    </address>
                </div>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by <span className='font-bold text-green-500 underline italic'>Leafano</span></p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
