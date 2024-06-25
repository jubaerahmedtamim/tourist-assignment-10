import React from 'react';
import SwiperSlider from '../Components/SwiperSlider/SwiperSlider';
import SpotSection from '../Components/SpotSection';
import CountriesSection from '../Components/CountriesSection';


const Home = () => {
    return (
        <div>
            <SwiperSlider></SwiperSlider>
            <SpotSection></SpotSection>
            <CountriesSection></CountriesSection>
        </div>
    );
};

export default Home;