import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import Diagnosis from './Diagnosis/Diagnosis';
import DoctorsSection from './DoctorsSection';
import EmergencyContact from './EmergencyContact';
import Hero from '../../pages/Hero/Hero';
import ReadyToHelp from './ReadyToHelp';
import ServiceSection from './ServiceSection';
import Statistics from './Statistics';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AdditionalInfo></AdditionalInfo>
            <ReadyToHelp></ReadyToHelp>
            <Statistics></Statistics>
            <ServiceSection></ServiceSection>
            <EmergencyContact></EmergencyContact>
            <Diagnosis></Diagnosis>
            <DoctorsSection></DoctorsSection>
        </div>
    );
};

export default Home;