import React, { useState, useEffect } from 'react';
import db from '../firebase/config';
import {
    Container, Row, Col
} from 'reactstrap';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const SetupMain = () => {

    const [setups, setSetups] = useState([]);

    useEffect(() => {
        db.collection("setup").onSnapshot((snapshot) =>
            setSetups(snapshot.docs.map((doc) => doc.data()))
        );
    }, [])

    return (
        <div className="setupMain">
            {setups.map((setup) => (
                <div className="setupImage">
                    <img src={setup.image} alt="Setup image" />
                </div>
            ))}
            <Container>
                <Row>
                    <Col md="8">
                        <div className="mySetup">
                            <span className="laptopSpecs">
                                <ul>
                                    <a href="https://www.asus.com/Laptops/For-Home/Everyday-use/ASUS-X509/" target="_blank">
                                        <h2>ASUS X509F</h2> <ArrowUpwardIcon />
                                    </a>
                                    <li>
                                        Intel Core I7-8th Gen
                                    </li>
                                    <li>
                                        8GB RAM
                                    </li>
                                    <li>
                                        HDD 1TB
                                    </li>
                                    <li>
                                        Display FHD 15.6”
                                    </li>
                                    <li>
                                        NVIDIA® MX250 2GB
                                    </li>
                                </ul>
                            </span>
                            <span className="laptopSpecs">
                                <ul>
                                    <a href="https://www.asus.com/Laptops/For-Home/Everyday-use/ASUS-E502/" target="_blank">
                                        <h2>ASUS E502S</h2> <ArrowUpwardIcon />
                                    </a>
                                    <li>
                                        Intel Celeron N3050
                                    </li>
                                    <li>
                                        RAM 4GB
                                    </li>
                                    <li>
                                        SSD 480 GB
                                    </li>
                                    <li>
                                        Display HD 15.6”
                                    </li>
                                    <li>
                                    Intel HD Graphics
                                    </li>
                                </ul>
                            </span>
                            <span className="keyboardSpecs">
                                <ul>
                                    <h2>Keyboard & Mouse</h2>
                                    <li>
                                        Rapoo multi-wireless keyboard, mouse
                                    </li>
                                    <li>
                                        AVTECH
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SetupMain;