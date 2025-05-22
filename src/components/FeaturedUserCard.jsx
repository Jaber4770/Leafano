import React from 'react';

const FeaturedUserCard = ({ initData }) => {
    const { name, profilePhoto, coverPhoto, bio, location, status } = initData;
    return (
            <div className="card bg-base-100 shadow-sm h-full">
                <div className='relative'>
                    <figure>
                        <img
                            className='rounded-t-lg'
                            src={coverPhoto}
                            alt="Shoes" />
                    </figure>


                    <div className="avatar absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                            <img src={profilePhoto} />
                        </div>
                    </div>
                </div>
                
                <div className="card-body mt-8">
                    <h2 className="card-title">{name}</h2>
                    <p>Bio: {bio}</p>
                    <div>
                        <p>Location: {location}</p>
                        <p>Status: {status}</p>
                        <p></p>
                    </div>
                    {/* <div className="card-actions">
                    { <button className="btn bg-gradient-to-r from-emerald-600 from-10% via-green-500 via-40% to-emerald-600 to-90% text-white w-full">Details</button> }
                    </div> */}
                </div>
            </div>
    );
};

export default FeaturedUserCard;