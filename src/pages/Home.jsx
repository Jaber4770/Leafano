import { useEffect, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { useLoaderData } from 'react-router';
import FAQ from '../components/FAQ';
import FeaturedGardeners from '../components/FeaturedGardeners';
import GardeningHelp from '../components/GardeningHelp';
import Slider from '../components/Slider';
import TrendingTips from '../components/TrendingTips';

const Home = () => {
    const [tips, setTips] = useState([]);
    const initialGardenersData = useLoaderData();

    useEffect(() => {
        fetch('https://leafano-server-jaber-ahmeds-projects-9e1e71cf.vercel.app/topTrendingTips')
            .then(res => res.json())
            .then(result => {
                setTips(result)
            })
    }, [])

    return (
        <div>
            <Slider></Slider>
            <Slide direction='up' cascade triggerOnce>
                <FeaturedGardeners initialGardenersData={initialGardenersData}></FeaturedGardeners>
            </Slide>
            <Slide direction='up' cascade triggerOnce>
                <TrendingTips tips={tips}></TrendingTips>
            </Slide>
            <Slide direction='up' cascade triggerOnce>
                <GardeningHelp></GardeningHelp>
            </Slide>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;