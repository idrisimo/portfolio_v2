import React, { useEffect, useState } from 'react'
import { TechStackDisplay } from '../../components'
import axios from 'axios'

export const AboutPage = () => {

    const [techstacksList, setTechstackList] = useState([])

    const getTechStack = async () => {
        try {
            const url = 'https://idrissilva-portfolio-v2.herokuapp.com/techstack'
            const resp = await axios.get(url)
            setTechstackList(resp.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        getTechStack()
    },[])

    return (
        <>
        <h2>About</h2>

        <div className='row'>
            <div className='col'>
                <img src='#'/>
            </div>
            <div className='col'>
                <p>
                    A Full stack engineer with a passion for all things tech.
                </p>
            </div>
        </div>
        <div className='row'>
        <TechStackDisplay techStack={techstacksList}/>
        </div>
        </>
    )
}
