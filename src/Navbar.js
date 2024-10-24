// src/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import "./style/navbar.css";
import {
    MenuUnfoldOutlined,

} from '@ant-design/icons';
import { Drawer } from 'antd';
import 'antd/dist/reset.css';


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
                placement="left"
                closable={true}
                onClose={() => setCollapsed(false)}
                open={collapsed}
                key="left"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', }}
            >
                <nav className={`${scroll ? 'scroll' : ''}`}>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ padding: '16px', borderBottom: '1px solid #f0f0f0' }}>
                            <Link to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setCollapsed(false)} style={{ color: "black", fontSize: "20px" }}>
                                Accueil
                            </Link>
                        </li>
                        <li style={{ padding: '16px', borderBottom: '1px solid #f0f0f0' }}>
                            <Link to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setCollapsed(false)} style={{ color: "black", fontSize: "20px", textShadow: "2px 2px 10px white" }}>
                                A Propos
                            </Link>
                        </li>
                        <li style={{ padding: '16px', borderBottom: '1px solid #f0f0f0' }}>
                            <Link to="competences" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setCollapsed(false)} style={{ color: "black", fontSize: "20px" }}>
                                Mes compétences
                            </Link>
                        </li>
                        <li style={{ padding: '16px', borderBottom: '1px solid #f0f0f0' }}>
                            <Link to="projets" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setCollapsed(false)} style={{ color: "black", fontSize: "20px" }}>
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
                        <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
                            A Propos
                        </Link>
                    </li>
                    <li>
                        <Link to="competences" spy={true} smooth={true} offset={-50} duration={500}>
                            Mes compétences
                        </Link>
                    </li>
                    <li>
                        <Link to="projets" spy={true} smooth={true} offset={-50} duration={500}>
                            Mes Projets
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
