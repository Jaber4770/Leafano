import React from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import { Link, useParams } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const MyTipsDetails = ({ mytips }) => {
    const { id } = useParams();
    // const [mytips, setMytips] = useState([]);
    // const { user } = use(AuthContext);

/*     useEffect(() => {
        fetch(`http://localhost:3000/gardenersTips?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMytips(data);
            })
    }, []) */

    const matchedPost = mytips.find(tip => tip._id == id);




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
                    <div className='flex items-center justify-around gap-5 bg-gray-100 rounded-sm mt-5 py-2'>
                        <div className='flex items-center gap-5'>
                            <div className='flex items-center gap-3'>
                                <BiSolidLike className='text-3xl' /><span className='text-3xl'>0</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaEye className='text-3xl'></FaEye><span className='text-3xl'>0</span>
                            </div>
                        </div>
                        <div>
                            <Link to='/mytips' className='btn bg-gradient-to-r from-emerald-600 from-10% via-green-500 via-40% to-emerald-600 to-90% text-white'>Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTipsDetails;