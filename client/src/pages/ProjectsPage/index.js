import React, { useEffect, useState, useRef } from 'react'
import { ProjectCard } from '../../components'
import axios from 'axios'
import { Button, Carousel, Row, Col, Container } from 'react-bootstrap'

export const ProjectsPage = ({ techstacksList }) => {
    const [projects, setProjects] = useState([])
    const [updatedProjects, setUpdatedProjects] = useState([])



    const getProjectBadge = (projects, techstacksList) => {

        let newProjects = projects
        projects.map((project) => {

            for (let n = 0; n < project['technology'].length; n++) {
                const techNum = parseInt(project['technology'][n])
                project['technology'][n] = techstacksList[techNum - 1]
            }

            return project
        })
        setUpdatedProjects(newProjects)
    }

    const getProjectData = async () => {
        try {
            const url = 'https://idrissilva-portfolio-v2.herokuapp.com/projects/'
            // const url = 'http://127.0.0.1:8000/projects/'
            const resp = await axios.get(url)
            // console.log(resp.data)
            const projectData = resp.data
            setProjects(projectData)
            // getProjectBadge(projects, techstacksList)
            // set
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getProjectData()
    }, [])
    useEffect(() => {
        getProjectBadge(projects, techstacksList)

    }, [projects])


    const ref = useRef(null);

    const onPrevClick = () => {
        ref.current.prev();
    };
    const onNextClick = () => {
        ref.current.next();
    };

    return (
        <>
            <h2 className='display-3 py-5'>Projects</h2>

            <Row className='g-0'>
                <Col xs={2} className='d-flex align-items-stretch rounded-start '>
                    <Button className='ms-auto rounded-0 rounded-start' variant='light' onClick={onPrevClick}>
                    {'<'}
                    </Button>
                </Col>
                <Col xs={8} >
                    <Carousel controls={false} ref={ref} indicators={false} className='w-100' variant='dark'>
                        {updatedProjects.map(project => (
                            <Carousel.Item>
                                <ProjectCard key={project['title']} project={project} />
                            </Carousel.Item>

                        ))}
                    </Carousel>
                </Col>
                <Col xs={2} className='d-flex align-items-stretch'>
                    <Button className='me-auto rounded-0 rounded-end' variant='light' onClick={onNextClick}>
                        {'>'}
                    </Button>
                </Col>
            </Row>

            {/* <div className='row row-cols-1 row-cols-md-3 g-4'>
            {updatedProjects.map(project => (
                <ProjectCard key={project['title']} project={project}/>
            ))}
        </div> */}
        </>
    )

}

