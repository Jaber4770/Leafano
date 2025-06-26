import React from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';


const TrendingTipsCard = ({ tip }) => {
    const { _id, title, postBody, name, photo, category, like } = tip;

    return (
        <Link to={`/mytipsdetails/${_id}`}>
            <div className='w-2/4 lg:w-full'>
                <div className="tip-card bg-white rounded-xl p-6 relative  hover:scale-105 transition duration-300 hover:shadow-lg shadow-sm inset-0 m-2 h-52 hover:bg-green-200">
                    <span className="category-badge bg-green-100 text-green-800 absolute lg:-right-5 right-0 px-2 py-1 rounded-full lg:-top-2">{category}</span>
                    <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full  flex items-center justify-center text-white mr-3">
                            <img className='rounded-full' src={photo} alt="" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">
                                {title?.length > 40 ? title.slice(0, 35) + '...' : title}
                            </h4>
                            <p className="text-xs text-gray-500">{name}</p>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-4 overflow-hidden first-letter:text-2xl first-letter:font-semibold first-letter:text-green-500">
                        {postBody?.length > 100 ? postBody.slice(0, 65) + '...' : postBody}
                    </p>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center text-yellow-400">
                            <span className="text-gray-600 text-sm ml-1 flex justify-center items-center gap-2">
                                <BiSolidLike className='text-2xl' />
                                <span className='text-2xl'> {like}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TrendingTipsCard;