import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button'

export const HeroImage = () => {
    
    return (
        <div>
            <div className='text-light text-start'>
                <h1 className='display-3 pt-5'>Idris Silva</h1>
                <p className='lead'>Software Developer</p>
                <hr></hr>
                <Button className='mx-2 shadow btn-secondary' href='https://idrissilva-portfolio-v2.s3.eu-west-2.amazonaws.com/Idris+Silva+IT+CV+v4.pdf' target="_blank" rel="noopener noreferrer"> Take a look at my CV</Button>
            </div>
        </div>
    )
}
