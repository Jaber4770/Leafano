import React from 'react';
import { Link } from 'react-router';

const GardeningHelp = () => {
    return (
        <div className='my-20'>
            <div className='bg-[url("https://extension.okstate.edu/articles/images/beginning_gardener_banner.jpg")] h-[600px] bg-cover bg-center flex lg:items-center lg:pt-0 pt-20'>
                <div className='container mx-auto'>
                    <h1 className='lg:text-5xl text-3xl font-bold'>Need Help For Gardening? <br /> Please Contact Us</h1>
                    <Link to="/" className="px-5 mt-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-green-600 inline-block">
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-green-600 group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white font-bold">Meet Expert</span>
                    </Link>
                    

                </div>
            </div>
        </div>
    );
};

export default GardeningHelp;