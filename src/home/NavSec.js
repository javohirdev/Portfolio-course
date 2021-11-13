import React, { useState, useEffect } from 'react';
import{
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavSec = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;

        if(offset > 200) {
            setScrolled(true);
        } else{
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let x = ['navbar'];
    if(scrolled) {
        x.push('fixed');
    }

    return(
        <>
            <Navbar className={x.join(" ")} light expand="md">
                <Link to="/" className="navbar-brand">
                    <b>Javohir</b>Dev
                </Link>

                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/portfolio">Portfolio</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/setup">Setup</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about-me">About me</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/FAQs" className="active">FAQs</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default NavSec;