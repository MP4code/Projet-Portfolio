import React from 'react';
import "./style/index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <footer>
            <div className='decoFooter'>
            </div>
            <div className='footerContainer'>
                <h3 className='footerTitle'>"Ensemble, faisons de grandes choses."</h3>
                <div className='footerContent'>
                    <FontAwesomeIcon icon={faLocationDot} className='faIcon' size='lg' />
                    <p>Blagnac,31700</p>
                </div>
                <div className='footerContent'>
                    <FontAwesomeIcon icon={faEnvelope} className='faIcon' size='lg' />
                    <p>marina.philogene@gmail.com</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer