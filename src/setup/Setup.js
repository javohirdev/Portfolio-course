import React from 'react';
import NavSec from '../home/NavSec';
import PageInfo from './PageInfo';
import Reveal from 'react-reveal/Reveal';
import SetupMain from './SetupMain';
import Footer from '../footer/Footer';

const Setup = () => {
    return (
        <>
            <Reveal effect="animNav" duration="750">
                <NavSec />
            </Reveal>
            <Reveal effect="fadeInUp" duration="1250">
                <PageInfo />
            </Reveal>
            <SetupMain />
            <Footer />
        </>
    );
};

export default Setup;