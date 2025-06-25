import React from 'react';

const Terms = () => {
    return (
        <div className="px-4 sm:px-8 lg:px-32 py-12 bg-base-100 text-base-content">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
                    Terms & Conditions
                </h1>

                <p className="mb-4">
                    Welcome to Leafano! By accessing or using our website, you agree to be bound by the following terms and conditions. Please read them carefully.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2">1. Use of Website</h2>
                <p className="mb-4">
                    Leafano provides gardening tips, resources, and information for personal use. You agree not to misuse the content or attempt to disrupt the site.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2">2. Intellectual Property</h2>
                <p className="mb-4">
                    All content on Leafano, including text, graphics, logos, and images, is our property or licensed to us. You may not reuse any content without permission.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2">3. User Conduct</h2>
                <p className="mb-4">
                    Users must not post offensive, harmful, or misleading content. We reserve the right to remove content or ban users who violate our rules.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2">4. External Links</h2>
                <p className="mb-4">
                    Leafano may link to third-party websites. We are not responsible for their content or practices.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2">5. Limitation of Liability</h2>
                <p className="mb-4">
                    We do our best to provide accurate information, but we are not liable for any damages resulting from the use of our content.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2">6. Changes to Terms</h2>
                <p className="mb-4">
                    Leafano may update these terms at any time. We encourage you to review this page periodically.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-6 mb-2">7. Contact</h2>
                <p>
                    If you have any questions about these terms, feel free to contact us at <a className="text-green-700 underline" href="mailto:support@leafano.com">support@leafano.com</a>.
                </p>

                <p className="mt-10 text-sm text-gray-500 text-center">
                    Last updated: June 25, 2025
                </p>
            </div>
        </div>
      );
};

export default Terms;