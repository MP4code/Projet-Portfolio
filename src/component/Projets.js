import React from 'react'
import "../style/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Realisations from "./Realisations";

const Projets = () => {


    return (
        <div>
            <div className='projetsContainer'>
                {Realisations.map((projet) => (
                    <div className='projetsCard' key={projet.id}>
                        <div className='projetsContent'>
                            <img src={projet.image} alt={projet.title} className='projetsContent_img' />
                            <h3 className='projetsTitle'>{projet.title}</h3>
                            <button onClick={() => window.open(projet.githubLink, '_blank')} className="button" type="button">
                                <FontAwesomeIcon icon={faGithub} />
                            </button>
                        </div>
                        <div className='projetsContentInfos'>
                            <div className='description'>
                                <p>{projet.description}</p>
                            </div>
                            <div className='badgeContainer'>
                                {projet.skills.map((tag, i) => (
                                    <p key={i} className='tag'>{tag}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="decoProjets">
                <div className='decoProjets'>
                    <ul>
                        <li> PROJETS</li>
                        <li> PROJETS</li>
                        <li> PROJETS</li>
                        <li> PROJETS</li>
                    </ul>
                </div>

            </div>

        </div >
    )
}

export default Projets