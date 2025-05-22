import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const GardenerDetails = () => {

    const [gardeners, setGardeners] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:3000/gardeners')
            .then(res => res.json())
            .then(data => setGardeners(data))
    }, [])

    const matchedGardener = gardeners.find(gardener => gardener._id == id);


    return (
        <div className='my-20'>
            <img className='w-1/2' src={matchedGardener?.photourl} alt="" />
            <h1>{matchedGardener?.name}</h1>
            <h1>{matchedGardener?.email}</h1>
        </div>
    );
};

export default GardenerDetails;