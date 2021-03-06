import React from 'react'
import Card from 'react-bootstrap/Card'
import { Accordion, Button } from 'react-bootstrap'
import '../../styles/App.css'
export const ProjectCard = ({ project }) => {

    return (
        
            <Accordion flush className=' d-flex justify-content-center'>
                <Card  className='shadow w-100 text-dark rounded-0 '>
                    <Card.Img className='projectCardImage img-thumbnail' variant="top" src={project['s3_image_path']} alt="Project Card Image" />
                    <Card.Body >
                        
                        <Accordion.Header>
                            <Card.Title>{project['title']}</Card.Title>
                        </Accordion.Header>
                        <Accordion.Body className='' >
                            <Card.Text>{project['overview']}</Card.Text>
                            {project['technology'].map(tech => (
                                <img key={tech['tech_name']} src={tech['sm_badge_url']} alt={`${tech['tech_name']} badge small`} />
                            ))}
                        </Accordion.Body>
                        
                    </Card.Body>
                    <Card.Footer>
                        {project['project_link'] ?
                            <Button className='btn-secondary mx-2 shadow' href={project['project_link']} target="_blank" rel="noopener noreferrer">Project</Button> : ''}

                        <Button className='btn-dark mx-2 shadow' href={project['github_link']} target="_blank" rel="noopener noreferrer">Github</Button>
                    </Card.Footer>
                </Card>
            </Accordion>
       
    )

}
