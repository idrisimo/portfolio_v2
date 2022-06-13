import React, { useState } from 'react'
import '../../styles/App.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
export const ContactPage = () => {

    return (
        <>
            <h1 className='display-3 pb-5'>Contact</h1>
            <Card className='shadow border-white glassPanel'>
                <Row xs={3} md={3} className="g-2 p-5">
                    <Col className='' id='email'>
                        <a href='mailto:idrissilva@hotmail.com?subject=Portfolio query' target="_blank" rel="noopener noreferrer">
                            <Card.Img className='flexImg' alt='email logo' src='https://www.freepnglogos.com/uploads/email-logo-png-13.png' />
                            <p className='text-dark font-weight-bold'>idrissilva@hotmail.com</p>
                        </a>
                    </Col>
                    <Col className='' id='github'>
                        <a href="https://github.com/idrisimo" target="_blank" rel="noopener noreferrer">
                            <Card.Img className='flexImg' alt='github logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                        </a>
                    </Col>
                    <Col className='' id='linkedin'>
                        <a href="https://linkedin.com/in/idris-silva" target="_blank" rel="noopener noreferrer">
                            <Card.Img className='flexImg' alt='linkedin logo' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
                        </a>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
