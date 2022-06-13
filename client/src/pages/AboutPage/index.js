import React, { useEffect, useState } from 'react'
import { TechStackDisplay } from '../../components'
import axios from 'axios'
import { Card, Row, Col } from 'react-bootstrap'
import '../../styles/App.css'
export const AboutPage = ({ techstacksList }) => {

    return (
        <>
            <h1 className='display-3 pb-5'>About</h1>

            <div className='row mb-5 pb-5 row-cols-1 row-cols-md-2 g-4'>
                <div className='col'>
                    <img className='flexImg' src='https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?cs=srgb&dl=pexels-kevin-ku-577585.jpg&fm=jpg' />
                </div>
                <div className='col'>
                    <Card className='shadow border-white glassPanel text-start'>
                        <Card.Text className='p-3'>
                            I have always had an interest in computers - in what they can do and the possibilities that they offer. Whilst I
                            had dabbled with coding throughout the years it was only in 2020 that I decided to take the plunge, at which
                            point I absolutely loved it. The more I delved into coding the more I became fascinated with the way problems
                            could be solved and lives made better by it.
                            <br/><br/>
                            My first foray into programming was just before the pandemic
                            started, I had watched a 4.5 hour video on python for beginners, after which I clicked that it was something I
                            wanted to do full time. From there I read a number of books like “Automate the boring stuff” and “Python
                            Crash Course”. 
                            <br/><br/>
                            Eventually I started building my own projects, googling anything I was uncertain about and
                            posting on forums for best practice. In my free time I enjoy playing video games such as Warframe, watching
                            or reading sci-fi stories, and watching documentaries or comedy shows on Netflix.
                        </Card.Text>
                    </Card>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-md-2 g-2'>
                <TechStackDisplay techStack={techstacksList} />
            </div>
        </>
    )
}
