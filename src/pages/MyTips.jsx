import React, { use, useEffect, useState } from 'react';
import MyTipsCard from '../components/MyTipsCard';
import { AuthContext } from '../Contexts/AuthContext';

const MyTips = () => {

    // const [myTips, setMyTips] = useState([]);

/*     useEffect(() => {
        fetch('http://localhost:3000/gardenersTips')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyTips(data);
            })
    }, []) */

    // const { id } = useParams();
    const [mytips, setMytips] = useState([]);
    const { user } = use(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:3000/gardenersTips?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMytips(data);
            })
    }, [])

    // const matchedPost = mytips.find(tip => tip._id == id);



    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-3xl font-semibold text-center'>My Tips</h1>
            <div>

            </div>
            {
                mytips.map(tip => <MyTipsCard
                    tip={tip}
                    key={tip._id}></MyTipsCard>)
            }
        </div>
    );
};

export default MyTips;