import { use } from 'react';
import { Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';
import "./Navbar.css";
import Switcher from './Switcher';

const Navbar = () => {

    const { signOutUser, user,  } = use(AuthContext);

    const links = <>
        <li className='pe-2'><NavLink to='/'>Home</NavLink></li>
        <li className='pe-2'><NavLink to='/browsetips'>Browse Tips</NavLink></li>
        <li className='pe-2'><NavLink to='/mytips'>My Tips</NavLink></li>
        <li className='pe-2'><NavLink to='/exploregardeners'>Explore Gargeners</NavLink></li>
        <li className='pe-2'><NavLink to='/sharetips'>Share Tips</NavLink></li>
    </>

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logout successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .then(error => {
                alert(error.message);
            })
    }

    //  (user);



    return (
        <div className='bg-base-100 shadow-sm sticky top-0 z-50'>
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
                    <Link to="/" className="font-bold text-2xl flex text-green-500 justify-center items-center font-poetsen">
                        <img className='w-14' src="https://i.ibb.co/ycBTCJMb/logo.png" alt="" />
                        Leafano
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-5">
                    {
                        user ?
                            <div>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button">
                                        <div className="relative group avatar avatar-online">
                                            <div className="w-12 rounded-full">
                                                <img src={user?.photoURL} alt="Profile" />
                                            </div>
                                            {/* Tooltip below */}
                                            <div className="absolute left-1/2 -translate-x-1/2 mt-14 px-2 py-1 text-[16px] text-xs opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                                                <span className=''>{user?.displayName}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content mt-3 menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li><span>{user?.displayName}</span></li>
                                        <div className='space-y-2'>

                                            <button onClick={handleLogOut} to='/login' className="btn w-full">Logout</button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            :
                            <div className='flex lg:gap-5 gap-2'>
                                <Link to="/login" className="btn bg-green-500 text-white">Login</Link>
                                <Link to="/signup" className="btn bg-green-500 text-white">SignUp</Link>
                            </div>
                    }
                    <div>
                        <Switcher />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;