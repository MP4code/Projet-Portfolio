import React from 'react'
import aboutmeImg from "../style/img/dried-pink-peony-flower-clear-vase-reflected-mirror.jpg";
import "../style/index.css"
const AboutMe = () => {
    const redirectTo = () => {
        window.open('https://www.linkedin.com/in/marina-philogene/', '_blank');
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
                    <button onClick={redirectTo} className="btnLinkedin" type="button">linkedin.com/in/marina-philogene/</button>
                </div>
                <div className='aboutMecontentImg'>
                    <img className="aboutmeImg" src={aboutmeImg} alt='Mirroir et un vase à fleur' />
                </div>

            </div>

        </div >
    )
}

export default AboutMe