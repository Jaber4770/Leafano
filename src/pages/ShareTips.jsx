import { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';

const ShareTips = () => {
    const { user } = use(AuthContext);
    const [gardeners, setGardeners] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:3000/gardeners')
            .then(res => res.json())
            .then(data => setGardeners(data));
    }, []);

    const matchedGardener = gardeners.find(g => g._id === id);

    const handleShareTip = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const tip = Object.fromEntries(formData.entries());

        fetch('http://localhost:3000/gardenersTips', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(tip),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You have shared your tip successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            });
    };

    return (
        <div className="container mx-auto my-10 px-4 lg:px-0">
            <h1 className="text-3xl lg:text-5xl font-bold text-center text-green-700 mb-6">
                Share Your Best Gardening <span className="text-green-500">Hacks</span> & <span className="text-green-500">Advice</span>
            </h1>

            <div className="rounded-lg shadow-md p-8 lg:w-3/4 mx-auto space-y-6">
                <form onSubmit={handleShareTip} className="space-y-6">

                    {/* Title */}
                    <div>
                        <label className="font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter tip title"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Row: Difficulty, Category, Privacy, Plant Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <label className="font-medium">Difficulty Level</label>
                            <input
                                type="text"
                                name="difficultyLevel"
                                list="difficulty"
                                required
                                placeholder="Easy, Medium, Hard"
                                className="input input-bordered w-full"
                            />
                            <datalist id="difficulty">
                                <option value="Easy" />
                                <option value="Medium" />
                                <option value="Hard" />
                            </datalist>
                        </div>

                        <div>
                            <label className="font-medium">Category</label>
                            <input
                                type="text"
                                name="category"
                                list="category"
                                required
                                placeholder="e.g., Composting"
                                className="input input-bordered w-full"
                            />
                            <datalist id="category">
                                <option value="Composting" />
                                <option value="Plant Care" />
                                <option value="Vertical Gardening" />
                            </datalist>
                        </div>

                        <div>
                            <label className="font-medium">Privacy</label>
                            <input
                                type="text"
                                name="privacy"
                                list="privacy"
                                required
                                placeholder="Public or Private"
                                className="input input-bordered w-full"
                            />
                            <datalist id="privacy">
                                <option value="Public" />
                                <option value="Private" />
                            </datalist>
                        </div>

                        <div>
                            <label className="font-medium">Plant Type / Topic</label>
                            <input
                                type="text"
                                name="plantType"
                                required
                                placeholder="e.g., Tomato, Herbs"
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>

                    {/* Tip Body */}
                    <div>
                        <label className="font-medium">Share Your Tip</label>
                        <textarea
                            name="postBody"
                            required
                            rows="5"
                            placeholder="Describe your tip in detail..."
                            className="textarea textarea-bordered w-full"
                        />
                    </div>

                    {/* Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={matchedGardener?.name || user?.displayName || ''}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div>
                            <label className="font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={user?.email || ''}
                                readOnly
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="font-medium">Photo URL</label>
                        <input
                            type="url"
                            name="photo"
                            required
                            placeholder="https://example.com/photo.jpg"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-4">
                        <input
                            type="submit"
                            value="Post"
                            className="btn bg-green-600 hover:bg-green-700 text-white px-10 text-lg"
                        />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ShareTips;
