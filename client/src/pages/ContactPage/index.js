import React, { useState } from 'react'


export const ContactPage = () => {

    return (
        <>
        <h1 className='display-3 pb-5'>Contact</h1>
            <div className='row mb-5 pb-5 shadow' style={{ backgroundColor: 'rgba(255, 255, 255, .30)', backdropFilter: 'blur(5px)' }}>
                <div className='col' id='email'>
                    <a href='mailto:idrissilva@hotmail.com?subject=Portfolio query' target="_blank" rel="noopener noreferrer">
                        <img width="200" height="200" alt='email logo' src='https://www.freepnglogos.com/uploads/email-logo-png-13.png' />
                        <p className='text-dark font-weight-bold lead'>idrissilva@hotmail.com</p>
                    </a>
                </div>
                <div className='col' id='github'>
                    <a href="https://github.com/idrisimo" target="_blank" rel="noopener noreferrer">
                        <img width="200" height="200" alt='github logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                    </a>
                </div>
                <div className='col' id='linkedin'>
                    <a href="https://linkedin.com/in/idris-silva" target="_blank" rel="noopener noreferrer">
                        <img width="200" height="200" alt='linkedin logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
                    </a>
                </div>
            </div>

        </>
    )
}
