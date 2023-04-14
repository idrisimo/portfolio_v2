import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap/'
import { HeroImage, } from '../../components';
import { AboutPage, ContactPage, ProjectsPage } from '../../pages';
import '../../styles/App.css';
import earthImage from '../../assets/images/spacetoearth.jpg'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
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
    <div style={
      {
        backgroundPosition: 'center',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `linear-gradient(to bottom, #212529 10%, rgba(0,0,0,0) 75%, rgba(255,255,255,1) 99%), url(${earthImage})`
      }}>

      <ParallaxProvider>
        <section className='text-light container' id='Landing'>
          <Parallax speed={-30}>
            <HeroImage />
          </Parallax>
        </section>

        <section className='text-light container' id='About' >
          <Parallax speed={20}>
            {loading ? <Spinner animation='border' /> : <><div>
              {error && (
                <div>
                  <h1>{error.message}: Please try again later. </h1>
                </div>
              )}</div> <AboutPage techstacksList={techstacksList} /></>}
          </Parallax>
        </section>

        <section className='text-light container' id='Projects' >
          <Parallax speed={20}>
            {loading ? <Spinner animation='border' /> : <><div>
              {error && (
                <div>
                  <h1>{error.message}: Please try again later. </h1>
                </div>
              )}</div>  <ProjectsPage techstacksList={techstacksList} /></>}
          </Parallax>
        </section>

        <section className='text-light container' id='Contact' >
          <Parallax speed={20}>
            <ContactPage />
          </Parallax>
        </section>
      </ParallaxProvider>
    </div>
  );


}
