// src/App.js
import React from 'react';
import Navbar from './Navbar';
import './style/index.css';
import monImage from './style/img/home.png'
function App() {
    return (
        <div className="App">
            <Navbar />
            <section id="home" className="section">
                <div className='backgroundDecor'></div>
                <img className="homeImage" src={monImage} alt='tasse de café' />
                <h2 className='homeTitle'>PORTFOLIO</h2>

                <div className='helloAutocollant'>
                    Hello
                </div>
            </section>
            <section id="about" className="section">
                <h2>A propos</h2>
            </section>
            <section id="education" className="section">
                <h2>Education</h2>
            </section>
            <section id="projets" className="section">
                <h2>Mes Projets</h2>
            </section>
        </div>
    );
}

export default App;
