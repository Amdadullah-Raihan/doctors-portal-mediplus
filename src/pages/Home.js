import React from 'react';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import Statistics from '../components/Statistics';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Statistics></Statistics>
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default Home;