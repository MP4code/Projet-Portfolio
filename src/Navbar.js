// src/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import "./style/navbar.css";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,

} from '@ant-design/icons';
import { Drawer } from 'antd';
import { Button } from 'antd/es/radio';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const [collapsed, setCollapsed] = useState(false);


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
            <Drawer
                title="Basic Drawer"
                placement="left"
                closable={true}
                onClose={() => setCollapsed(false)}
                open={collapsed}
                key="left"
            >
                <nav className={`${scroll ? 'scroll' : ''}`}>
                    <Button type="primary">Primary Button</Button>
                    <ul>
                        <li>
                            <Link to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setCollapsed(false)}>
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setCollapsed(false)}>
                                A Propos
                            </Link>
                        </li>
                        <li>
                            <Link to="competences" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setCollapsed(false)}>
                                Mes compétences
                            </Link>
                        </li>
                        <li>
                            <Link to="projets" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setCollapsed(false)}>
                                Mes Projets
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Drawer>
            <div className='hamburgerMenu'>
                <MenuUnfoldOutlined onClick={() => setCollapsed(true)} />
            </div>
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
