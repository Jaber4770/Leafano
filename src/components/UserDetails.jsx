import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const getData = async () => {
    try {
        const res = await axios.get('https://leafano-server.vercel.app/users');
        return res.data;
    } catch (err) {
        console.error('Failed to fetch users:', err);
        return [];
    }
};

const UserDetails = () => {

    const { id } = useParams();
    const [initUser, setInitUser] = useState([]);
    // console.log(initUser);

    const matchedUser = initUser.find(int => int._id === id);
    // console.log(matchedUser);


    useEffect(() => {
        const fetchUsers = async () => {
            const initUserData = await getData();
            setInitUser(initUserData);
            // console.log(initUserData);
        };

        fetchUsers();
    }, []);




    return (
        <div className='container mx-auto'>
            <div className='lg:w-2/3 mx-auto'>
                <div className='mb-20'>
                    <div className='w-full'>
                        <img className='rounded-b-lg h-[450px] w-full' src={matchedUser?.coverPhoto} alt="" />
                    </div>
                    <div className='flex pb-10 relative gap-5 items-center lg:ps-20 lg:mx-0 mx-4'>
                        <img className='w-42 absolute rounded-full' src={matchedUser?.profilePhoto} alt="" />
                        <div className='ps-52'>
                            <h1 className='text-2xl font-semibold'>{matchedUser?.name}</h1>

                        </div>
                    </div>
                    <div className='mt-20 border-green-500 border-2 rounded-sm grid lg:grid-cols-2 gap-4 px-2 py-1 lg:mx-0 mx-4'>
                        {/* <p>Age: {matchedUser?.name}</p> */}
                        <p><span className='font-bold'>Staus:</span> {matchedUser?.status}</p>
                        <p><span className='font-bold'>Bio:</span> {matchedUser?.bio}</p>
                        <h1><span className='font-bold'>Location:</span> {matchedUser?.location}</h1>
                        {/* <p>Status: {matchedUser?.status}</p> */}
                    </div>
                    <div className='mt-5'>
                        {/* <Link to={`/updateProfile/${id}`} className="btn w-full text-white text-[20px] bg-green-500">Update Profile</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;