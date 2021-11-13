import React, { useState, useEffect } from 'react';
import NavSec from '../home/NavSec';
import Reveal from 'react-reveal/Reveal';
import PageInfo from '../faqs/PageInfo';
import Footer from '../footer/Footer';
import db from '../firebase/config';

const Faqs = () => {

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        db.collection("faqs").onSnapshot((snapshot) =>
            setFaqs(snapshot.docs.map((doc) => doc.data()))
        );
    }, [])

    return (
        <>
            <Reveal effect="animNav" duration="750">
                <NavSec />
            </Reveal>
            <Reveal effect="fadeInUp" duration="1250">
                <PageInfo />
            </Reveal>
            <div className="faqs">
                {faqs.map((post, index) => {
                    return(
                        <div key={post.index} className="faqsMenu">
                            <h3>{post.textHead}</h3>
                            <p>{post.textBody}</p>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </>
    );
};

export default Faqs;