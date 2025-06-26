import React from 'react';
import TrendingTipsCard from './TrendingTipsCard';

const TrendingTips = ({ tips }) => {

    return (
        <div className='container mx-auto mb-20'>
            <div className='text-center lg:w-1/2 mx-auto'>
                <h1 className='text-5xl text-center font-bold mb-2'><span className="bg-gradient-to-r from-black to-green-500 bg-clip-text text-5xl font-extrabold text-transparent">Trending </span>Tips</h1>
                <p className='italic'>Discover the top trending gardening tips shared by passionate plant lovers—boost growth, fight pests naturally, and keep your greens thriving with smart seasonal tricks.</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10 lg:mx-0 mx-4'>
                {
                    tips.map(tip => <TrendingTipsCard
                        tip={tip}
                        key={tip._id}
                    ></TrendingTipsCard>)
                }
            </div>
        </div>

    );
};

export default TrendingTips;