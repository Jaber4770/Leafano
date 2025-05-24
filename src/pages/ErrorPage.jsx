import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ message = "Something went wrong!" }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-base-200">

            {/* Error Image */}
            <img
                src="https://i.ibb.co/vCdRLmQR/icon-tech-error-404-icon-isolated-png.webp" // You can replace this with your own image
                alt="Error"
                className="w-64 mb-6"
            />

            {/* Alert Box */}
            <div className="alert alert-error shadow-lg flex items-center gap-4 max-w-md w-full mb-4 bg-green-500 border-green-600 text-white">
                <AlertTriangle className="w-6 h-6" />
                <div>
                    <h3 className="font-bold">Error</h3>
                    <p className="text-sm">{message}</p>
                </div>
            </div>

            {/* Go Home Button */}
            <Link to="/" className="btn bg-green-500 text-white">
                Go Home
            </Link>
        </div>
    );
};

export default ErrorPage;
