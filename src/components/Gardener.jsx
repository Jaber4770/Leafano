import React from 'react';
import { Link } from 'react-router';

const Gardener = ({ gardener }) => {
    const {_id, name,photourl,email} = gardener;
    return (
        <div className="card bg-base-100 shadow-sm h-full">
            <div className='relative'>
                <figure>
                    <img
                        className='rounded-t-lg w-1/2 object-contain h-64'
                        src={photourl}
                        alt="Gardener's profile photo" />
                </figure>

                <div className="avatar absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                        <img src={photourl} />
                    </div>
                </div>
            </div>

            <div className="card-body mt-8">
                <h2 className="card-title">{name}</h2>
                <p>Bio: {email}</p>
                <div>
                    <p>Email: {email}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/gardenerDetails/${_id}`} className="btn bg-gradient-to-r from-emerald-600 from-10% via-green-500 via-40% to-emerald-600 to-90% text-white w-full">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Gardener;