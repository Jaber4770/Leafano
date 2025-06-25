import React from "react";

const NewsletterSection = () => {
    return (
        <section className=" py-12 px-4 sm:px-8 lg:px-16 rounded-2xl shadow-md my-10 border border-green-100">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-green-700 mb-4">
                    Join the Leafano Newsletter 🌿
                </h2>
                <p className="text-gray-600 mb-6">
                    Get gardening tips, seasonal reminders, and updates straight to your inbox.
                </p>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const email = e.target.email.value;
                        // You can send `email` to your backend or external service here
                        alert(`Thanks for subscribing, ${email}! 🌼`);
                        e.target.reset();
                    }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your email address"
                        className="input input-bordered w-full max-w-sm"
                    />
                    <button type="submit" className="btn bg-[#22c55e] text-white">
                        Subscribe
                    </button>
                </form>

                <p className="mt-4 text-sm text-gray-400">
                    We respect your privacy. No spam, ever.
                </p>
            </div>
        </section>
    );
};

export default NewsletterSection;
