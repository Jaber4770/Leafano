import React from "react";

const DonationSection = () => {
    return (
        <section className="py-5 px-4 sm:px-8 lg:px-16 rounded-2xl shadow-md mb-20">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-green-700 mb-4">Support Leafano 🌱</h2>
                <p className="text-gray-600 mb-6">
                    Love what we’re doing? Help us grow and keep sharing gardening tips with the world.
                    Your donation helps us improve content, maintain servers, and reach more green thumbs!
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                    <a
                        href="https://www.buymeacoffee.com/yourname"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success btn-outline"
                    >
                        Buy Me a Coffee ☕
                    </a>

                    <a
                        href="https://paypal.me/yourpaypal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn text-white bg-[#22c55e]"
                    >
                        Donate via PayPal 💸
                    </a>
                </div>

                <p className="mt-6 text-sm text-gray-500">
                    Every small donation helps. Thank you for supporting Leafano! 🌼
                </p>
            </div>
        </section>
    );
};

export default DonationSection;
