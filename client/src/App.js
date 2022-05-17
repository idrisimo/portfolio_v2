import React, { useRef, useEffect } from 'react';

import { HeroImage, NavBar, SpacemanImage } from './components';
import { AboutPage, ProjectsPage } from './pages';
import './styles/App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import moonImage from './assets/images/moonImageReversed.jpg'
import earthImage from './assets/images/spacetoearth.jpg'


function App() {
  const ref = useRef()
  const scrollCheck = (e) => {
    let element = e.target
    console.log(window.scrollY)
  }

  return (
    <div className="App">

      <Parallax pages={4} ref={ref}>

        <NavBar />
        <ParallaxLayer offset={0} factor={2} style={
          {
            backgroundImage: `linear-gradient(to bottom, #212529, rgba(0,0,0,0)),url(${moonImage})`,
            backgroundSize: 'cover',
          }
        }></ParallaxLayer>
        <ParallaxLayer offset={2} factor={2} style={
          {
            backgroundImage: `linear-gradient(to bottom, #010101 30%, rgba(0,0,0,0) 70%),url(${earthImage})`,
            backgroundSize: 'cover',
          }
        }></ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.4, end: 2.5 }} style={{ textAlign: 'right',  width: '10%', height:'10%'}}>
          <SpacemanImage />
        </ParallaxLayer>


        <ParallaxLayer offset={0.1} speed={0.05}>
          <section className='text-light' id='Landing'>
            <HeroImage />
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={1.1} speed={0.5}>
          <section className='text-light' id='About'>
            <AboutPage/>
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={2.1} speed={0.5}>
          <section className='text-light container' id='Projects'>
            <ProjectsPage/>
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={3.1} speed={0.5}>
          <section className='text-light' id='Contact'>
            <h2>Contact</h2>
          </section>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
