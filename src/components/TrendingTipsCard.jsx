import React from 'react';

const TrendingTipsCard = ({ tip }) => {
    const { _id, title, description, author } = tip;
    return (
        <div>
            <div>
                <div className=''>
                    <div className="tip-card bg-white rounded-xl p-6 relative shadow-lg inset-0 m-2">
                        <span className="category-badge bg-blue-100 text-blue-800 absolute -right-5 px-2 py-1 rounded-full -top-2">Productivity</span>
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                                <i className="fas fa-bolt"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">{title}</h4>
                                <p className="text-xs text-gray-500">{author}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">{description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center text-yellow-400">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <span className="text-gray-600 text-sm ml-1">(4.7)</span>
                            </div>
                            <button className="read-more-btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingTipsCard;