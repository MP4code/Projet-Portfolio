// src/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import "./style/navbar.css";


const Navbar = () => {
    const [scroll, setScroll] = useState(false);


    // Gérer la modification de la classe au scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>

            <nav className={`navbar ${scroll ? 'scroll' : ''}`}>

                <ul>
                    <li>
                        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
                            A Propos
                        </Link>
                    </li>
                    <li>
                        <Link to="competences" spy={true} smooth={true} offset={-70} duration={500}>
                            Mes compétences
                        </Link>
                    </li>
                    <li>
                        <Link to="projets" spy={true} smooth={true} offset={-70} duration={500}>
                            Mes Projets
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
