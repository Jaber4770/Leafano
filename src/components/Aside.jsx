import { HomeIcon, ListOrderedIcon, PlusCircleIcon, LayoutDashboardIcon, MenuIcon, XIcon } from 'lucide-react';
import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';

const Aside = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user,  } = use(AuthContext);
    const toggleSidebar = () => setIsOpen(!isOpen);
    // console.log(user);
    return (
        <>
            {/* Mobile toggle button */}
            <div className="lg:hidden p-4 bg-green-100 flex justify-between items-center">
                {/* <h2 className="text-xl font-bold">Leafano</h2> */}
                <button onClick={toggleSidebar}>
                    {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`bg-green-50 p-4 space-y-4 lg:fixed h-screen z-50 w-64
                    ${isOpen ? 'block' : 'hidden'}
                    fixed top-0 left-0 lg:block transition-all duration-300 ease-in-out`}
            >
                <h2 className="text-xl font-bold mb-6">Leafano</h2>

                <div className='hidden md:block'>
                    <img src={user?.photoURL} alt="" className='rounded-full'/>
                    <h1 className='text-2xl font-bold'>{user?.displayName}</h1>
                </div>


                <nav className="flex flex-col space-y-2">
                    <NavLink
                        to="/"
                        className="hover:bg-green-500 hover:text-white font-bold p-2 rounded flex items-center gap-2"
                        onClick={() => setIsOpen(false)}
                    >
                        <HomeIcon className="w-5 h-5" /> Home
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className="hover:bg-green-500 hover:text-white font-bold p-2 rounded flex items-center gap-2"
                        onClick={() => setIsOpen(false)}
                    >
                        <LayoutDashboardIcon className="w-5 h-5" /> Dashboard
                    </NavLink>
                    <NavLink
                        to="/dashboard/sharetips"
                        className="hover:bg-green-500 hover:text-white font-bold p-2 rounded flex items-center gap-2"
                        onClick={() => setIsOpen(false)}
                    >
                        <PlusCircleIcon className="w-5 h-5" /> Add Tip
                    </NavLink>
                    <NavLink
                        to="/dashboard/mytips"
                        className="hover:bg-green-500 hover:text-white font-bold p-2 rounded flex items-center gap-2"
                        onClick={() => setIsOpen(false)}
                    >
                        <ListOrderedIcon className="w-5 h-5" /> My Tips
                    </NavLink>
                </nav>
            </aside>
        </>
    );
};

export default Aside;
