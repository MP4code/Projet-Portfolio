
import React from 'react';
import Navbar from './Navbar';
import './style/index.css';
import AboutMe from './component/AboutMe';
import Competences from './component/Competences';
import Home from './Home';
import Projets from './component/Projets';
import Footer from './Footer';


function App() {
    return (
        <div className="App">
            <Navbar />

            <section id="home" className="section">
                <Home />
            </section>
            <section id="about" className="section">
                <AboutMe />
            </section>
            <section id="competences" className="section">
                <Competences />
            </section>
            <section id="projets" className="section">
                <Projets />
            </section>
            <Footer />
        </div>
    );
}

export default App;
