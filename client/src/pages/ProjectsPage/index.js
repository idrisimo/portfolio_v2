import React, { useEffect, useState } from 'react'
import {ProjectCard} from '../../components'
export const ProjectsPage = () => {
    const [projectDetailsList, setProjectDetailsList] = useState([])

    const handleProjectData = () => {
        setProjectDetailsList([{'id':0, 'title': 'Project 1', 'project_overview':'This is a test', 'url': 'google.com', 'tech_stack': ['test1', 'test2']}, {'id':1, 'title': 'Project 2', 'project_overview':'This is a test', 'url': 'google.com', 'tech_stack': ['test1', 'test2']}])
    }

    useEffect(()=>{handleProjectData()},[])
    return (
        <>
        <h2>Projects</h2>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
            {projectDetailsList.map(projectDetails => (
                <ProjectCard key={projectDetails['id']} project={projectDetails}/>
            ))}
        </div>
        </>
    )
    
}

