import { useEffect, useState } from 'react';
import Gardener from '../components/Gardener';

const ExploreGardeners = () => {

    const [garderners, setGarderners] = useState([]);

    useEffect(() => {
        fetch('https://leafano-server.vercel.app/gardeners')
            .then(res => res.json())
            .then(data => {
                (data);
                setGarderners(data);
            })
    }, [])




    return (
        <div className='container mx-auto'>
            <div className='text-center my-10'>
                <h1 className='text-5xl font-bold pb-3 bg-gradient-to-r from-black to-green-500 bg-clip-text text-transparent'>Explore Gardenars</h1>
                <p className='italic'>Discover passionate gardeners from our community—connect, learn, and grow together. 🌿</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 mb-10 lg:mx-0 mx-4'>
                {
                    garderners.map(gardener => <Gardener
                        key={gardener._id}
                        gardener={gardener}></Gardener>)
                }
            </div>
        </div>
    );
};

export default ExploreGardeners;