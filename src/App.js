
import React from 'react';
import Navbar from './component/Navbar';
import './style/index.css';
import AboutMe from './component/AboutMe';
import Competences from './component/Competences';
import Home from './component/Home';
import Projets from './component/Projets';
import Footer from './component/Footer';
import { ConfigProvider } from 'antd';


function App() {
    return (
        <ConfigProvider theme={{ token: { colorPrimary: 'red' } }}>
            <div className="App">
                <Navbar />
                <main>
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
                </main>
                <Footer />
            </div>
        </ConfigProvider>

    );
}

export default App;
