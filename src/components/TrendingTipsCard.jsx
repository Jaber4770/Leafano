import React from 'react';
import { FaStar } from "react-icons/fa";


const TrendingTipsCard = ({ tip }) => {
    const { _id, title, description, author, profilePhoto, category, rating } = tip;
    return (
        <div>
            <div>
                <div className=''>
                    <div className="tip-card bg-white rounded-xl p-6 relative shadow-lg inset-0 m-2">
                        <span className="category-badge bg-green-100 text-green-800 absolute lg:-right-5 right-0 px-2 py-1 rounded-full lg:-top-2">{category}</span>
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                                <img className='rounded-full' src={profilePhoto} alt="" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">{title}</h4>
                                <p className="text-xs text-gray-500">{author}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4 first-letter:text-2xl first-letter:font-semibold first-letter:text-green-500">{description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center text-yellow-400">
                                <span className="text-gray-600 text-sm ml-1 flex justify-center items-center gap-2"><FaStar className="text-black"/> {rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingTipsCard;