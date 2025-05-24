import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyTipsCard = ({ tip }) => {
    const { title, name, privacy, photo, _id, category } = tip;

    const handleDeleteTips = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('delete');
                // delete
                fetch(`https://leafano-server-jaber-ahmeds-projects-9e1e71cf.vercel.app/gardenersTips/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tip has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    return (
        <div className='lg:w-2/3 mx-auto mt-2'>
            <div className='border-2 border-green-500 px-2 rounded-sm'>
                <div>
                    <h1 className='text-3xl my-2 whitespace-normal break-words'>{title}</h1>
                    <h3 className='font-bold text-2xl flex gap-2 items-center'><img className='w-8' src="https://i.ibb.co/6RrQTYBg/user-icon-in-flat-style-person-icon-client-symbol-vector.jpg" alt="" />{name}</h3>
                </div>
                <div className='flex gap-5 my-2'>
                    <p className='px-2 py-1 bg-gray-300 rounded-full'>{privacy}</p>
                    <p className='px-2 py-1 bg-gray-300 rounded-full'>{category}</p>
                </div>
                <div className='pb-2'>
                    <img className='w-[60%] mx-auto my-2 rounded-sm' src={photo} alt="" />
                    <div className='flex gap-5'>
                        <Link to={`/mytipsdetails/${_id}`} className='btn bg-gradient-to-r from-emerald-600 from-10% via-green-500 via-40% to-emerald-600 to-90% text-white flex-1 text-[20px]'>Read</Link>
                        <Link to={`/updateTip/${_id}`} className='btn bg-green-500 text-white flex-1 text-[20px]'>Update</Link>
                        <button onClick={handleDeleteTips} className='btn bg-warning text-white flex-1 text-[20px]'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTipsCard;