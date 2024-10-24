import React from 'react';
import monImage from './style/img/home.png';
import './style/index.css';
import monLogo from "./style/img/logo.png";
import Animate from "react-smooth";
const Home = () => {
    const steps = [{
        style: {
            opacity: 0,
        },
        duration: 400,
    }, {
        style: {
            opacity: 1,
            transform: 'translate(0, 0)',
        },
        duration: 1000,
    }, {
        style: {
            transform: 'translate(0, 100px)',
        },
        duration: 1200,
    }];
    return (
        <div>
            <img src={monLogo} alt='logo' className='monLogo' />
            <div className='backgroundDecor'></div>
            <div className='homeContainer'>
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

                <Animate steps={steps}>
                    <div className='scrollAutocollant autocollant'>
                        scroll
                    </div>
                </Animate>
            </div>

        </div>
    )
}

export default Home