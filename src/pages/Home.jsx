import React, { useEffect, useState } from 'react';
import Slider from '../components/Slider';
import FeaturedGardeners from '../components/FeaturedGardeners';
import { useLoaderData } from 'react-router';
import TrendingTips from '../components/TrendingTips';

const Home = () => {
    const [tips, setTips] = useState([]);
    const initialGardenersData = useLoaderData();

    useEffect(() => {
        fetch('http://localhost:3000/topTrendingTips')
            .then(res => res.json())
            .then(result => {
                setTips(result)
        })
    },[])

    return (
        <div>
            <Slider></Slider>
            <FeaturedGardeners initialGardenersData={initialGardenersData}></FeaturedGardeners>
            <TrendingTips tips={tips}></TrendingTips>
        </div>
    );
};

export default Home;