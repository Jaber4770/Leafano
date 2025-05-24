import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const GardenerDetails = () => {

    const [gardeners, setGardeners] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('https://leafano-server-jaber-ahmeds-projects-9e1e71cf.vercel.app/gardeners')
            .then(res => res.json())
            .then(data => setGardeners(data))
    }, [])

    const matchedGardener = gardeners.find(gardener => gardener._id == id);


    return (
        <div className='lg:w-2/3 mx-auto'>
            <div className='mb-20'>
                <div className='w-full'>
                    <img className='rounded-b-lg' src="https://i.ibb.co/qYQqzCh4/Generated-image-2.png" alt="" />
                </div>
                <div className='flex relative gap-5 items-center lg:ps-20 lg:mx-0 mx-4'>
                    <img className='w-42 absolute rounded-full' src={matchedGardener?.photourl} alt="" />
                    <div className='ps-52'>
                        <h1 className='text-2xl font-semibold'>{matchedGardener?.name}</h1>
                        <p>Total shared tips: </p>
                    </div>
                </div>
                <div className='mt-20 border-green-500 border-2 rounded-sm grid lg:grid-cols-2 gap-4 px-2 py-1 lg:mx-0 mx-4'>
                    <p>Age: </p>
                    <p>Gender: </p>
                    <p>Staus: </p>
                    <p>Experience: </p>
                    <p>Image: </p>
                    <h1>Email: {matchedGardener?.email}</h1>
                </div>
            </div>
        </div>
    );
};

export default GardenerDetails;