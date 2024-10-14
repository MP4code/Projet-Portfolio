import React from 'react'
import "../style/index.css";
import educationImg from "../style/img/high-angle-coffee-cup-books.jpg";
const Education = () => {
    return (
        <div>
            <div className='educationContainer'>
                <div className='educationContentImg'>
                    <img className="educationImg" src={educationImg} alt='tasse à café' />
                </div>
                <div className='educationContent'>
                    <h2 className='educationTitle'>Education</h2>
                    <div className='educations'>
                        <h3 className='date'></h3>
                        <h4>Diplome</h4>
                        <p>ecole</p>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Education