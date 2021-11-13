import React, { useState, useEffect } from 'react';
import db from '../firebase/config';

const Main = () => {

    const [aboutInfos, setAboutInfos] = useState([]);

    useEffect(() => {
        db.collection("about").onSnapshot((snapshot) =>
            setAboutInfos(snapshot.docs.map((doc) => doc.data()))
        );
    }, [])

    return (
        <div className="aboutmeMain">
            {aboutInfos.map((about, index) => (
                <>
                    <img 
                        key={about.index}
                        src={about.myImage} 
                        alt="my Image" 
                        className="myImage" 
                    />
                    <span>
                        <p className="aboutmeText">
                            {about.text1}
                            <div>
                                <b>{about.text2}</b> {/* bold text */}
                            </div>
                            {about.text3}
                        </p>
                    </span>
                </>
            ))}
        </div>
    );
};

export default Main;