import React from 'react';
import NavSec from '../home/NavSec';
import Reveal from 'react-reveal/Reveal';
import PageInfo from './PageInfo';
import Faqs from './Faqs';
import Footer from '../footer/Footer';

const FaqMain = () => {
    return(
        <>
            <Reveal effect="animNav" duration="750">
                <NavSec />
            </Reveal>
            <Reveal effect="fadeInUp" duration="1250">
                <PageInfo />
            </Reveal>
            <Reveal effect="portfolioAnim" duration="1800">
                <Faqs />
            </Reveal>
            <Footer />
        </>
    )
}

export default FaqMain;