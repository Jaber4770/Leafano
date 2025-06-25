import axios from 'axios';
import { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import FAQ from '../components/FAQ';
import FeaturedGardeners from '../components/FeaturedGardeners';
import GardeningHelp from '../components/GardeningHelp';
import Slider from '../components/Slider';
import TrendingTips from '../components/TrendingTips';
import DonationSection from '../components/DonationSection';

const getData = async () => {
    try {
        const res = await axios.get('http://localhost:3000/users');
        return res.data;
    } catch (err) {
        console.error('Failed to fetch users:', err);
        return [];
    }
};

const Home = () => {
    const [tips, setTips] = useState([]);
    const [initUser, setInitUser] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const initUserData = await getData();
            setInitUser(initUserData);
            // console.log(initUserData);
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/gardenersTips')
            .then(res => res.json())
            .then(result => {
                setTips(result);
            })
            .catch(err => console.error('Failed to load tips:', err));
    }, []);



    return (
        <div>
            <Slider />
            <Slide direction='up' cascade triggerOnce>
                <FeaturedGardeners initialGardenersData={initUser} />
            </Slide>
            <Slide direction='up' cascade triggerOnce>
                <TrendingTips tips={tips} />
            </Slide>
            <Slide direction='up' cascade triggerOnce>
                <GardeningHelp />
            </Slide>
            <Slide direction='up' cascade triggerOnce>
                <DonationSection></DonationSection>
            </Slide>
            <FAQ />
        </div>
    );
};

export default Home;
