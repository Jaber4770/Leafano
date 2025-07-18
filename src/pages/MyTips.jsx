import { use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import MyTipsCard from '../components/MyTipsCard';
import { AuthContext } from '../Contexts/AuthContext';

const MyTips = () => {

    const [mytips, setMytips] = useState([]);
    const { user } = use(AuthContext);
    // const location = useLocation();
    const navigate = useNavigate();

    if (!user.email) {
        navigate('/login');
    }

    useEffect(() => {
        fetch(`https://leafano-server.vercel.app/gardenersTips?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                (data);
                setMytips(data);
            })
    }, [])


    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-3xl font-semibold text-center'>My Tips</h1>
            <div>

            </div>
            <div className='space-y-4 lg:mx-0 mx-4'>
                {
                    mytips.map(tip => <MyTipsCard
                        tip={tip}
                        key={tip._id}></MyTipsCard>)
                }
            </div>
        </div>
    );
};

export default MyTips;