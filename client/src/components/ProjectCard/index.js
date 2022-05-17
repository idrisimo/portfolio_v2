import React from 'react'
import Card from 'react-bootstrap/Card'
import { Accordion, Button } from 'react-bootstrap'
import moonImage from '../../assets/images/moonImage.jpg'

export const ProjectCard = ({ project }) => {


    return (
        <div className='col'>
            <Accordion flush>
                <Card className='shadow h-100 text-dark'>
                    <Card.Img variant="top" src={moonImage} alt="Image not found" />
                    <Card.Body>
                        <Accordion.Header>
                            <Card.Title>{project['title']}</Card.Title>
                        </Accordion.Header>
                        <Accordion.Body >
                            <Card.Text>{project['project_overview']}</Card.Text>
                            <Card.Text>{project['tech_stack']}</Card.Text>
                        </Accordion.Body>
                    </Card.Body>
                </Card>

            </Accordion>
            {/* <Accordion flush>
                
                    <Accordion.Header>
                    <div className="card shadow h-100 text-dark">
                        <img src="..." className="card-img-top" alt="..."></img>
                        <div className='card-header'>
                            <h5 className="card-title">{project['title']}</h5>
                        </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="card-body">
                            <p className="card-text">{project['project_overview']}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </Accordion.Body>

                </Accordion> */}

            {/* <div className="card shadow h-100 text-dark">
                <img src="..." className="card-img-top" alt="..."></img>
                <div className='card-header'>
                    <h5 className="card-title">{project['title']}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{project['project_overview']}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
        </div>
    )

}
