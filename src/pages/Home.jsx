import React from 'react';
import Slider from '../components/Slider';
import FeaturedGardeners from '../components/FeaturedGardeners';
import { useLoaderData } from 'react-router';

const Home = () => {

    const initialGardenersData = useLoaderData();

    return (
        <div>
            <Slider></Slider>
            <FeaturedGardeners initialGardenersData={initialGardenersData}></FeaturedGardeners>
        </div>
    );
};

export default Home;