import React from 'react'
import "../style/index.css";
import logoOpen from "../style/img/openclassrooms1.png"
const Competences = () => {
    const mesCompetences = [
        { id: 1, title: 'HTML' },
        { id: 2, title: 'CSS' },
        { id: 3, title: 'JavaScript' },
        { id: 4, title: 'React.js' },
        { id: 5, title: 'Node.js' },
        { id: 6, title: 'Git et GitHub' },
        { id: 7, title: 'Responsive Design' },
        { id: 8, title: 'SEO' },
        { id: 9, title: 'Redux' },
        { id: 10, title: 'Gestion de Projet' },
    ];

    return (
        <div>
            <div className="formationContainer">
                <h2>Formation Développement : Intégrateur Web</h2>
                <p>openclassrooms</p>
            </div>

            <div className="competencesContainer">
                {mesCompetences.map((mesCompetences) => (
                    <div key={mesCompetences.id} className="competenceItem">
                        <h3 className='competencesTitle'>{mesCompetences.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Competences