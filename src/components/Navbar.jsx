import React from 'react';
import { Link, NavLink } from 'react-router';
import "./Navbar.css";

const Navbar = () => {

    const links = <>
        <li className='pe-2'><NavLink to='/'>Home</NavLink></li>
        <li className='pe-2'><NavLink to='/browsetips'>Browse Tips</NavLink></li>
        <li className='pe-2'><NavLink to='/mytips'>My Tips</NavLink></li>
        <li className='pe-2'><NavLink to='/exploregardeners'>Explore Gargeners</NavLink></li>
        <li className='pe-2'><NavLink to='/sharetips'>Share Tips</NavLink></li>
    </>

    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="font-bold text-2xl flex justify-center items-center font-poetsen">
                        <img className='w-14' src="https://i.ibb.co/ycBTCJMb/logo.png" alt="" />
                        Leafano
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <Link to="/login" className="btn">Login</Link>
                        <Link to="/signup" className="btn">SignUp</Link>
                    </div>
                    <div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button">
                                <div className="relative group avatar avatar-online">
                                    <div className="w-12 rounded-full">
                                        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" alt="Profile" />
                                    </div>
                                    {/* Tooltip below */}
                                    <div className="absolute top-full mt-2 px-3 py-1 text-sm opacity-0 group-hover:opacity-100 duration-300 whitespace-nowrap z-10 pointer-events-none">
                                        userName
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content mt-3 menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><span>User Name</span></li>
                                <Link to='/login' className="btn">Logout</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;