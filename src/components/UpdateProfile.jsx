import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

const UpdateProfile = () => {
    const { id } = useParams();


    const [garderners, setGarderners] = useState([]);

    useEffect(() => {
        const fetchGardener = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/gardeners/${id}`);
                setGarderners(response.data);
                setformData({
                    name: response.data.name,
                    email: response.data.email,
                    photo: response.data.photourl,
                }); // Set form data from the fetched profile
            } catch (error) {
                console.error("Error fetching gardener:", error);
            }
        };
        fetchGardener();
    }, [id]); // Include id as dependency


    // console.log(garderners);



    const [formData, setformData] = useState({
        name: '',
        photo: '',
        email: '',
        age: "",
        bio: '',
        gender: '',
        location: '',
        status: ''
    });


    const handleChange = (
        e
    ) => {
        const { name, value } = e.target;
        setformData((prev) => ({
            ...prev,
            [name]: value
        }));
    };




    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/gardeners/${id}`, formData);
            if (response.data.modifiedCount) {
                Swal.fire({
                    title: "Profile update done!",
                    icon: "success",
                    timer: 1000,
                });
            } else {
                Swal.fire({
                    title: "No changes were made.",
                    icon: "info",
                    timer: 1000,
                });
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            Swal.fire({
                title: "Error!",
                text: error.message,
                icon: "error",
            });
        }
    };



    //  (garderners);

    return (
        <div className='lg:w-2/3 mx-auto mt-4'>
            <h1 className='text-3xl font-semibold text-center'>Update your profile</h1>
            <div className='border-2 border-green-500 lg:mx-0 mx-4 rounded-sm p-5 pb-2 my-10'>
                <form onSubmit={handleUpdateProfile}>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className='text-green-500 font-semibold' htmlFor="">Name:</label><br />
                            <input onChange={handleChange} name='name' required type="text" value={formData.name} placeholder='Name' className='border-1 w-full px-2 py-2 rounded-sm border-green-500' />
                        </div>
                        <div>
                            <label className='text-green-500 font-semibold' htmlFor="">Email:</label><br />
                            <input required type="email" onChange={handleChange} name='email' value={formData.email} placeholder='Email' className='border-1 w-full px-2 py-2 rounded-sm border-green-500' />
                        </div>
                        <div>
                            <label className='text-green-500 font-semibold' htmlFor="">Age:</label><br />
                            <input required type="number" onChange={handleChange} name='age' value={formData.age} placeholder='You must be 10+' className='border-1 w-full px-2 py-2 rounded-sm border-green-500' />
                        </div>
                        <div>
                            <label className='text-green-500 font-semibold' htmlFor="">Photo:</label><br />
                            <input required type="text" onChange={handleChange} name='photo' value={formData.photo} placeholder='your photo url' className='border-1 w-full px-2 py-2 rounded-sm border-green-500' />
                        </div>
                        <div>
                            <label className='text-green-500 font-semibold' htmlFor="">Location:</label><br />
                            <input required type="text" onChange={handleChange} name='location' value={formData.location} placeholder='Location' className='border-1 w-full px-2 py-2 rounded-sm border-green-500' />
                        </div>
                        <div>
                            <label className='text-green-500 font-semibold' htmlFor="">Gender:</label><br />
                            <select
                                value={formData.gender}
                                onChange={handleChange}
                                name="gender"
                                className="select select-bordered w-full focus:outline-none border-green-500"
                                required
                            >
                                <option disabled value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label className='text-green-500 font-semibold' htmlFor="">Staus:</label><br />
                            <select
                                onChange={handleChange}
                                value={formData.status}
                                name="status"
                                className="select select-bordered w-full focus:outline-none border-green-500"
                                required
                            >
                                <option disabled value="">Select gender</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <div>
                            <label className='text-green-500 font-semibold' htmlFor="">Bio:</label><br />
                            <input required type="text" onChange={handleChange} value={formData.bio} name='bio' placeholder='write your experience shortly...' className='border-1 w-full px-2 py-2 rounded-sm border-green-500' />
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <input type="submit" value="Update" className='btn bg-green-500 rounded-sm px-5 text-white text-2xl' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;