import React, { useRef, useEffect, useState } from 'react';
import { Navbar, Container, Nav, Spinner } from 'react-bootstrap/'
import { HeroImage,} from '../../components';
import { AboutPage, ContactPage, ProjectsPage } from '../../pages';
import '../../styles/App.css';

// import earthImage from '../../assets/images/spacetoearth.jpg'

import {Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useAxios from '../../hooks/useAxios';


export const PortfolioPage = () => {

    const [techstacksList, setTechstackList] = useState([])
  const { response, loading, error } = useAxios({
    method: 'get',
    url: 'https://idrissilva-portfolio-v2.herokuapp.com/techstack/'
  })

  const getTechStack = () => {
    if (response !== null) {
      setTechstackList(response)
    }
  }

  useEffect(() => {
    getTechStack()
  }, [response])

  return (
        <ParallaxProvider>
          <section className='text-light' id='Landing'>
            <Parallax speed={-30}>
              <HeroImage />
            </Parallax>
          </section>

          <section className='text-light' id='About' >
            <Parallax speed={20}>
              {loading ? <Spinner animation='border' /> : <AboutPage techstacksList={techstacksList} />}
            </Parallax>
          </section>

          <section className='text-light' id='Projects' >
            <Parallax speed={20}>
              {loading ? <Spinner animation='border' /> : <ProjectsPage techstacksList={techstacksList} />}
            </Parallax>
          </section>

          <section className='text-light' id='Contact' >
            <Parallax speed={20}>
              <ContactPage />
            </Parallax>
          </section>
        </ParallaxProvider>
  );


}
