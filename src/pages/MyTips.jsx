import React, { useEffect, useState } from 'react';
import MyTipsCard from '../components/MyTipsCard';

const MyTips = () => {

    const [myTips, setMyTips] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/gardenersTips')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyTips(data);
            })
    }, [])



    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-3xl font-semibold text-center'>My Tips</h1>
            <div>

            </div>
            {
                myTips.map(tip => <MyTipsCard
                    tip={tip}
                    key={tip._id}></MyTipsCard>)
            }
        </div>
    );
};

export default MyTips;