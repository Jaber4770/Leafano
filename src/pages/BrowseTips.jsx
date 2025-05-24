import { useEffect, useState } from 'react';
import BrowseTipsCard from '../components/BrowseTipsCard';

const BrowseTips = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch('https://leafano-server-jaber-ahmeds-projects-9e1e71cf.vercel.app/gardenersTips')
            .then(res => res.json())
            .then(data => setTips(data))
    }, [])



    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-center text-3xl font-semibold mb-3 text-shadow-lg'>Browse Tips</h1>
            <div className='lg:w-2/3 mx-auto'>
                <div className='flex gap-5 lg:mx-0 mx-4'>
                    <li className='list-none'><p>Category</p></li>
                    <li className='list-none'><p>Privacy</p></li>
                    <li className='list-none'><p>Plant Type</p></li>
                    <li className='list-none'><p>Difficulty Lavel</p></li>
                </div>
                {/* dynamic part */}
                <div className='grid grid-cols-1 gap-5 lg:mx-0 mx-4'>
                    {
                        tips.map(tip => <BrowseTipsCard
                            key={tip._id}
                            tip={tip}></BrowseTipsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrowseTips;