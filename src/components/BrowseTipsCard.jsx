import React from 'react';
import { Link } from 'react-router-dom'; // Corrected import path

const BrowseTipsCard = ({ tip }) => {
    const { title, name, privacy, photo, _id, category } = tip;

    return (
        <div className="h-full">
            <div className="border-2 border-green-500 ps-2 rounded-sm h-full flex flex-col justify-between">

                {/* Content Section */}
                <div>
                    <h1 className="text-2xl my-2 whitespace-normal break-words">{title}</h1>

                    <h3 className="font-bold text-[16px] flex gap-2 items-center">
                        <img
                            className="w-8 rounded-full"
                            src="https://i.ibb.co/6RrQTYBg/user-icon-in-flat-style-person-icon-client-symbol-vector.jpg"
                            alt="User"
                        />
                        {name}
                    </h3>

                    <div className="flex gap-5 my-2 flex-wrap">
                        <p className="px-2 py-1 bg-gray-200 rounded-full text-sm">{privacy}</p>
                        <p className="px-2 py-1 bg-gray-200 rounded-full text-sm">{category}</p>
                    </div>

                    <div className="pb-2">
                        <img className="w-[90%] mx-auto my-2 rounded-sm" src={photo} alt={title} />
                    </div>
                </div>

                {/* Button Section */}
                <div className="mt-2 mb-1">
                    <Link
                        to={`/tipsDetails/${_id}`}
                        className="btn bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 text-white w-full"
                    >
                        Read
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BrowseTipsCard;
