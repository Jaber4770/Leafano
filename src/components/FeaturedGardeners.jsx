import FeaturedUserCard from './FeaturedUserCard';


const FeaturedGardeners = ({ initialGardenersData }) => {
    (initialGardenersData);
    return (
        <div className='container mx-auto my-20'>
            <div className='text-center lg:w-1/2 mx-auto'>
                <h1 className='lg:text-5xl text-4xl text-center font-bold mb-2'>
                    <span className="bg-gradient-to-r from-green-500 to-black bg-clip-text font-extrabold text-transparent">Featured</span> Gardeners</h1>
                <p className='italic'>Meet our featured gardeners — a vibrant group of plant lovers actively sharing expert tips, inspiring green spaces, and cultivating community connections.</p>
            </div>
            <div className='grid lg:grid-cols-4 mt-10 gap-5 lg:mx-0 mx-4'>
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