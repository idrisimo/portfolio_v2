import React from 'react'
import Card from 'react-bootstrap/Card'
import { Accordion, Button } from 'react-bootstrap'
import '../../styles/App.css'
export const ProjectCard = ({ project }) => {


    return (
        <div className='col'>
            <Accordion flush>
                <Card className='shadow h-100 text-dark'>
                    <Card.Img className='' variant="top" src={project['s3_image_path']} alt="Image not found" />
                    <Card.Body>
                        <Accordion.Header>
                            <Card.Title>{project['title']}</Card.Title>
                        </Accordion.Header>
                        <Accordion.Body >
                            <Card.Text>{project['overview']}</Card.Text>
                            {project['technology'].map(tech=>(
                                <img key={tech['tech_name']} src={tech['sm_badge_url']}/>
                            ))}
                        </Accordion.Body>
                    </Card.Body>
                    <Card.Footer>
                        <Button className='btn-secondary mx-2 shadow' href={project['project_link']}>Project</Button>
                        <Button className='btn-dark mx-2 shadow' href={project['github_link']}>Github</Button>
                    </Card.Footer>
                </Card>
            </Accordion>
        </div>
    )

}
