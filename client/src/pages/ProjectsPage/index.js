import React, { useEffect, useState } from 'react'
import {ProjectCard} from '../../components'
import axios from 'axios'

export const ProjectsPage = () => {
    const [projectDetailsList, setProjectDetailsList] = useState([])
    const [repos, setRepos] = useState([])
    const [projects, setProjects] = useState([])

    const handleProjectData = () => {
        setProjectDetailsList([{'id':0, 'title': 'Project 1', 'project_overview':'This is a test', 'url': 'google.com', 'tech_stack': ['test1', 'test2']}, {'id':1, 'title': 'Project 2', 'project_overview':'This is a test', 'url': 'google.com', 'tech_stack': ['test1', 'test2']}])
    }

    useEffect(()=>{handleProjectData()},[])

    const getProjectData = async () => {
        try {
            const url = 'https://idrissilva-portfolio.netlify.app/'
            const resp = await axios.get(url)
            setProjects(resp.data)
            console.log(resp.data)
        } catch (err) {
            console.log(err)
        }
    }

    const searchRepos = async () => {
        try {
            const url = 'https://api.github.com/users/idrisimo/repos'
            const resp = await axios.get(url)
            setRepos(resp.data)
            console.log(resp.data)
        } catch (err) {
            console.log(err)
        }
    }

    // useEffect(()=>{searchRepos()},[])
    useEffect(()=>{
        getProjectData()
    },[])


    return (
        <>
        <h2>Projects</h2>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
            {/* {projectDetailsList.map(projectDetails => (
                <ProjectCard key={projectDetails['id']} project={projectDetails}/>
            ))} */}
            {projects.map(project => (
                <ProjectCard key={project['title']} project={project}/>
            ))}
        </div>
        </>
    )
    
}

