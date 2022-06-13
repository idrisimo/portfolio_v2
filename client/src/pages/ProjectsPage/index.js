import React, { useEffect, useState } from 'react'
import {ProjectCard} from '../../components'
import axios from 'axios'

export const ProjectsPage = ({techstacksList}) => {
    const [projects, setProjects] = useState([])
    const [updatedProjects, setUpdatedProjects] = useState([])



    const getProjectBadge = (projects, techstacksList) => {

        let newProjects = projects
        projects.map((project) => {

            for (let n = 0; n < project['technology'].length; n++) {
                const techNum = parseInt(project['technology'][n])
                project['technology'][n] = techstacksList[techNum-1]
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


    useEffect(()=>{
        getProjectData()
    },[])
    useEffect(()=>{
        getProjectBadge(projects, techstacksList)

    },[projects])


    return (
        <>
        <h2 className='display-3 py-5'>Projects</h2>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
            {updatedProjects.map(project => (
                <ProjectCard key={project['title']} project={project}/>
            ))}
        </div>
        </>
    )
    
}

