import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button'
// import bgImage from '../../assets/images/nasa.jpg'

export const HeroImage = () => {
    
    return (
        // <div style={{backgroundImage: `linear-gradient(to bottom, #212529, rgba(255,255,255,0.5)),url(${bgImage})`}}  className='jumbotron'>
        //     <div className='container text-light text-start'>
        // <div style={{backgroundImage: `linear-gradient(to bottom, #212529, rgba(255,255,255,0.0)),url(${bgImage})`}} className='jumbotron'>
        <div>
            <div className='container text-light text-start'>
                <h1 className='display-3 pt-5'>Idris Silva</h1>
                <p className='lead'>Software Developer</p>
                <hr></hr>
                <Button className='mx-2 shadow' href='https://idrissilva-portfolio-v2.s3.eu-west-2.amazonaws.com/Idris_Silva_fp_cv.pdf' target="_blank" rel="noopener noreferrer" >Resume</Button>
            </div>
        </div>
    )
}
