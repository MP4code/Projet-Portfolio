// src/App.js
import React from 'react';
import Navbar from './Navbar';
import './style/index.css';
import monImage from './style/img/home.png'
import AboutMe from './component/AboutMe';
import Education from './component/Education';
function App() {
    return (
        <div className="App">
            <Navbar />
            <section id="home" className="section">
                <h1 className='name'>Marina Philogène</h1>
                <div className='backgroundDecor'></div>
                <div className='homeTitleDeco'>
                    <ul>
                        <li> PORTFOLIO</li>
                        <li> PORTFOLIO</li>
                        <li> PORTFOLIO</li>
                        <li> PORTFOLIO</li>
                    </ul>
                </div>
                <img className="homeImage" src={monImage} alt='tasse de café' />
                <h2 className='homeTitle'>PORTFOLIO</h2>


                <div className='helloHome autocollant'>
                    Hello
                </div>
                <div className='scrollAutocollant autocollant'>
                    scroll
                </div>
            </section>
            <section id="about" className="section">
                <AboutMe />
            </section>
            <section id="education" className="section">
                <Education />
            </section>
            <section id="projets" className="section">
                <h2>Mes Projets</h2>
            </section>
        </div>
    );
}

export default App;
