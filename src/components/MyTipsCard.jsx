import React from 'react';
import { Link } from 'react-router';

const MyTipsCard = ({tip}) => {
    const { title, name, privacy, photo, _id, category } = tip;
    return (
        <div className='w-2/3 mx-auto'>
            <div className='border-2 border-green-500 ps-2 rounded-sm'>
                <div>
                    <h1 className='text-3xl my-2'>{title}</h1>
                    <h3 className='font-bold text-2xl flex gap-2 items-center'><img className='w-8' src="https://i.ibb.co/6RrQTYBg/user-icon-in-flat-style-person-icon-client-symbol-vector.jpg" alt="" />{name}</h3>
                </div>
                <div className='flex gap-5 my-2'>
                    <p className='px-2 py-1 bg-gray-300 rounded-full'>{privacy}</p>
                    <p className='px-2 py-1 bg-gray-300 rounded-full'>{category}</p>
                </div>
                <div className='pb-2'>
                    <img className='w-[60%] mx-auto my-2 rounded-sm' src={photo} alt="" />
                    <Link to={`/mytipsdetails/${_id}`} className='btn bg-gradient-to-r from-emerald-600 from-10% via-green-500 via-40% to-emerald-600 to-90% text-white w-full'>Read</Link>
                </div>
            </div>
        </div>
    );
};

export default MyTipsCard;