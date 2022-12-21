import React from 'react';
import AdditionalInfo from '../components/AdditionalInfo';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import ReadyToHelp from '../components/ReadyToHelp';
import ServiceSection from '../components/ServiceSection';
import Statistics from '../components/Statistics';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AdditionalInfo></AdditionalInfo>
            <ReadyToHelp></ReadyToHelp>
            <Statistics></Statistics>
            <ServiceSection></ServiceSection>
            
        </div>
    );
};

export default Home;