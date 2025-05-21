import React from 'react';
import FeaturedUserCard from './FeaturedUserCard';


const FeaturedGardeners = ({ initialGardenersData }) => {
    console.log(initialGardenersData);
    return (
        <div className='container mx-auto my-20'>
            <div className='text-center w-1/2 mx-auto'>
                <h1 className='text-5xl text-center font-bold'>Featured Gardeners</h1>
                <p className='italic'>Meet our featured gardeners — a vibrant group of plant lovers actively sharing expert tips, inspiring green spaces, and cultivating community connections.</p>
            </div>
            <div className='grid grid-cols-3 mt-10 gap-5'>
                {
                    initialGardenersData.map(initData => <FeaturedUserCard
                        key={initData._id}
                        initData={initData}
                    ></FeaturedUserCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedGardeners;