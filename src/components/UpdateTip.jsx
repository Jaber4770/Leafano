import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';

const UpdateTip = () => {
    const { id } = useParams();
    const [tipDetails, setTipsDetails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://leafano-server.vercel.app/gardenersTips')
            .then(res => res.json())
            .then(data => setTipsDetails(data))
            .catch(err => console.error("Failed to load tip details:", err));
    }, []);

    const matchedPost = tipDetails.find(tip => tip._id == id);

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updateTip = Object.fromEntries(formData.entries());

        fetch(`https://leafano-server.vercel.app/gardenersTips/${id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateTip)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Update Done!",
                        icon: "success",
                        timer: 1000,
                        showConfirmButton: false
                    });
                    navigate('/mytips')
                }
            })
            .catch(err => {
                Swal.fire("Update Failed", "Please try again", "error");
                console.error(err);
            });
    };

    return (
        <div className="container mx-auto my-10 px-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">
                Update <span className="text-green-600">Tip</span>
            </h1>

            <div className="lg:w-3/4 mx-auto">
                <form onSubmit={handleUpdate} className="space-y-6">
                    <div>
                        <label className="block font-semibold mb-1">Name</label>
                        <input
                            defaultValue={matchedPost?.name}
                            name="name"
                            required
                            placeholder="Name"
                            className="w-full border-2 border-green-500 rounded-md px-3 py-2 focus:outline-none"
                            type="text"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Title</label>
                        <input
                            defaultValue={matchedPost?.title}
                            name="title"
                            required
                            placeholder="Title"
                            className="w-full border-2 border-green-500 rounded-md px-3 py-2 focus:outline-none"
                            type="text"
                        />
                    </div>

                    <div className="grid lg:grid-cols-4 gap-4">
                        <div>
                            <label className="block font-semibold mb-1">Difficulty Level</label>
                            <input
                                defaultValue={matchedPost?.difficultyLevel}
                                name="difficultyLevel"
                                required
                                className="w-full border-2 border-green-500 rounded-md px-3 py-2 focus:outline-none"
                                placeholder="Difficulty Level"
                                list="difficulty"
                            />
                            <datalist id="difficulty">
                                <option value="Easy" />
                                <option value="Medium" />
                                <option value="Hard" />
                            </datalist>
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Category</label>
                            <input
                                defaultValue={matchedPost?.category}
                                name="category"
                                required
                                className="w-full border-2 border-green-500 rounded-md px-3 py-2 focus:outline-none"
                                placeholder="Category"
                                list="category"
                            />
                            <datalist id="category">
                                <option value="Composting" />
                                <option value="Plant Care" />
                                <option value="Vertical Gardening" />
                            </datalist>
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Privacy</label>
                            <input
                                defaultValue={matchedPost?.privacy}
                                name="privacy"
                                required
                                className="w-full border-2 border-green-500 rounded-md px-3 py-2 focus:outline-none"
                                placeholder="Privacy"
                                list="privacy"
                            />
                            <datalist id="privacy">
                                <option value="Public" />
                                <option value="Private" />
                            </datalist>
                        </div>

                        <div>
                            <label className="block font-semibold mb-1">Plant Type / Topic</label>
                            <input
                                defaultValue={matchedPost?.plantType}
                                name="plantType"
                                required
                                placeholder="Plant Type or Topic"
                                className="w-full border-2 border-green-500 rounded-md px-3 py-2 focus:outline-none"
                                type="text"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Share Your Tip</label>
                        <textarea
                            defaultValue={matchedPost?.postBody}
                            name="postBody"
                            required
                            rows="5"
                            placeholder="Write your tip here..."
                            className="w-full border-2 border-green-500 rounded-md px-3 py-2 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Photo URL</label>
                        <div className="relative flex items-center border-2 border-green-500 rounded-md px-3 py-2">
                            <svg
                                className="h-5 w-5 mr-2 opacity-60"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                            </svg>
                            <input
                                className="flex-1 focus:outline-none"
                                type="url"
                                defaultValue={matchedPost?.photo}
                                name="photo"
                                required
                                placeholder="Photo URL"
                                title="Must be a valid URL"
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <input
                            type="submit"
                            value="Update"
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-2 rounded-md text-xl cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTip;
