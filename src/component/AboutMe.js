import React from 'react'
import aboutmeImg from "../style/img/dried-pink-peony-flower-clear-vase-reflected-mirror.jpg";
import "../style/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";



const AboutMe = () => {
    const redirectTo = () => {
        window.open('https://www.linkedin.com/in/marina-philogene/', '_blank');
    };
    const redirectToCV = () => {
        window.open('/cvMarinaPhilogene2024.pdf', '_blank');
    };


    return (
        <div>
            <div className='aboutMeContainer'>
                <div className='aboutMecontent'>

                    <h2 className='aboutMeTitle'>Salut,</h2>
                    <h3>Moi c'est Marina!</h3>

                    <div className='aboutmeText' >
                        <p> J'ai tout juste 29 ans. Actuellement, je vis à Blagnac.
                            Je me passionne pour de nombreuses choses, on peux dire que je suis une personne polyvalente.
                            Je puise mon inspiration dans les choses et les personnes que j'apprécie pour mes créations.
                            Je suis curieuse et j'aime découvrir de nouvelles expériences. Bien que parfois timide, je
                            compense par mon humour.
                            Le développement web me fascine, et j'adore les designs que l'on peut créer. Chaque jour,
                            je découvre de nouvelles choses, et je suis ravie de savoir que l'apprentissage ne cessera
                            jamais, tant il y a à explorer dans ce domaine.
                        </p>
                    </div>

                    <div className='buttonContainer'>

                        <button onClick={redirectTo} className="button" type="button">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            linkedin.com
                        </button>

                        <button onClick={redirectToCV} className="button" type="button">
                            <FontAwesomeIcon icon={faFile} />
                            Voir mon cv
                        </button>
                    </div>
                </div>
                <div className='aboutMecontentImg'>
                    <motion.img
                        src={aboutmeImg}
                        alt='Mirroir et un vase à fleur'
                        whileHover={{ scale: 0.8, borderRadius: "50%" }}
                        transition={{ scale: { duration: 0.5 }, borderRadius: { duration: 0.8 } }}
                        className="aboutmeImg"
                    />
                </div>

            </div>

        </div >
    )
}

export default AboutMe