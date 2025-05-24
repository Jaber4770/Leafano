import React from 'react';

const UpdateProfile = () => {

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        console.log('profile is being update');
    }




    return (
        <div className='lg:w-2/3 mx-auto mt-4'>
            <h1 className='text-3xl font-semibold text-center'>Update your profile</h1>
            <div className='border-2 border-green-500 lg:mx-0 mx-4 rounded-sm p-5 pb-2 my-10'>
                <form onSubmit={handleUpdateProfile}>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className='text-green-500 font-semibold' htmlFor="">Age:</label><br />
                            <input required type="number" placeholder='You must be 10+' className='border-1 w-full px-2 py-2 rounded-sm border-green-500' />
                        </div>
                        <div>
                            <label className='text-green-500 font-semibold' htmlFor="">Gender:</label><br />
                            <select
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
                                name="gender"
                                className="select select-bordered w-full focus:outline-none border-green-500"
                                required
                            >
                                <option disabled value="">Select gender</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        <div>
                            <label className='text-green-500 font-semibold' htmlFor="">Experience:</label><br />
                            <input required type="text" placeholder='write your experience shortly...' className='border-1 w-full px-2 py-2 rounded-sm border-green-500' />
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