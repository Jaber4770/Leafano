import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

const TipsDetails = () => {
    const [tipDetails, setTipsDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:3000/gardenersTips')
        .then(res => res.json())
        .then(data => setTipsDetails(data))
    },[])

    const matchedPost = tipDetails.find(tip => tip._id == id);
    console.log(matchedPost);


    return (
        <div className='container mx-auto w-2/3 my-10'>
            <div className='border-2 border-green-500 ps-2 rounded-sm'>
                <div>
                    <h1 className='text-3xl my-2'>{matchedPost?.title}</h1>
                    <h3 className='font-bold text-2xl flex gap-2 items-center'><img className='w-8' src="https://i.ibb.co/6RrQTYBg/user-icon-in-flat-style-person-icon-client-symbol-vector.jpg" alt="" />{matchedPost?.name}</h3>
                </div>
                <div className='flex gap-5 my-2'>
                    <p className='px-2 py-1 bg-gray-300 rounded-full'>{matchedPost?.category}</p>
                    <p className='px-2 py-1 bg-gray-300 rounded-full'>{matchedPost?.privacy}</p>
                    <p className='px-2 py-1 bg-gray-300 rounded-full'>{matchedPost?.plantType}</p>
                    <p className='px-2 py-1 bg-gray-300 rounded-full'>{matchedPost?.difficultyLevel}</p>
                </div>
                <div className='pb-2'>
                    <img className='w-[60%] mx-auto my-2 rounded-sm' src={matchedPost?.photo} alt="" />
                    <p>{matchedPost?.postBody}</p>
                    <Link to='/browsetips' className='btn mt-4 bg-gradient-to-r from-emerald-600 from-10% via-green-500 via-40% to-emerald-600 to-90% text-white w-full'>Go Back</Link>
                </div>
            </div>
        </div>
    );
};

export default TipsDetails;