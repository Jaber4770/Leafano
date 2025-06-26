import React, { useState } from 'react';
import Swal from 'sweetalert2';

const GetHelpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        issue: '',
        description: '',
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Handle form submission logic (e.g., POST to backend or Firebase)
        // console.log('Form Submitted:', formData);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        // Reset form
        setFormData({ name: '', email: '', issue: '', description: '' });
    };

    return (
        <div className="min-h-screen bg-base-200 py-10 px-4 sm:px-8 lg:px-32">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
                    Get Help from Expert Gardeners
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Full Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Email Address</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Issue Topic</span>
                        </label>
                        <input
                            type="text"
                            name="issue"
                            value={formData.issue}
                            onChange={handleChange}
                            required
                            placeholder="e.g., Pest control, soil issues"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Detailed Description</span>
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            placeholder="Describe your gardening issue in detail..."
                            className="textarea textarea-bordered w-full min-h-[120px]"
                        ></textarea>
                    </div>

                    <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white w-full">
                        Submit Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GetHelpForm;
