import React from 'react';
import Aside from '../components/Aside';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
        <div className='flex'>
            <div className='lg:w-64 md:w-64 w-24'>
                <Aside></Aside>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;