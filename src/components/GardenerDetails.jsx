import { use, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const GardenerDetails = () => {
    const { user } = use(AuthContext);
    const [gardeners, setGardeners] = useState([]);
    const { id } = useParams();
    const [mytips, setMytips] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/gardeners')
            .then(res => res.json())
            .then(data => setGardeners(data))
    }, [])

    const matchedGardener = gardeners.find(gardener => gardener._id == id);

    useEffect(() => {
        fetch(`http://localhost:3000/gardenersTips?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                (data);
                setMytips(data);
            })
    }, [])


    // console.log(user.email);

    return (
        <div className='lg:w-2/3 mx-auto'>
            <div className='mb-20'>
                <div className='w-full'>
                    <img className='rounded-b-lg h-[450px] w-full' src="https://i.ibb.co/qYQqzCh4/Generated-image-2.png" alt="" />
                </div>
                <div className='flex relative gap-5 items-center lg:ps-20 lg:mx-0 mx-4'>
                    <img className='w-42 absolute rounded-full' src={matchedGardener?.photourl} alt="" />
                    <div className='ps-52'>
                        <h1 className='text-2xl font-semibold'>{matchedGardener?.name}</h1>
                        <p>Total shared tips: {mytips.length}</p>
                    </div>
                </div>
                <div className='mt-20 border-green-500 border-2 rounded-sm grid lg:grid-cols-2 gap-4 px-2 py-1 lg:mx-0 mx-4'>
                    <p>Age: {matchedGardener?.name}</p>
                    <p>Gender: {matchedGardener?.gender}</p>
                    <p>Staus: {matchedGardener?.status}</p>
                    <p>Experience: {matchedGardener?.bio}</p>
                    <h1>Email: {matchedGardener?.email}</h1>
                </div>
                <div className='mt-5'>
                    <Link to={`/updateProfile/${id}`} className="btn w-full text-white text-[20px] bg-green-500">Update Profile</Link>
                </div>
            </div>
        </div>
    );
};

export default GardenerDetails;