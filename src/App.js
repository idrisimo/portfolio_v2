import React, { useRef } from 'react';
import { HeroImage, NavBar } from './components';
import './styles/App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import moonImage from './assets/images/moonImageReversed.jpg'
import earthImage from './assets/images/spacetoearth.jpg'
import spacemanImage from './assets/images/astronaut.png'

function App() {
  const ref = useRef()
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

        <ParallaxLayer sticky={{ start: 0.2, end: 3.5 }} style={{ textAlign: 'right', }}>
          <img src={spacemanImage} style={{width:'100px'}} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.1} speed={2.5} onClick={() => ref.current.scrollTo(3)}>
          <section className='text-light' id='Landing'>
            <h2>Landing</h2>
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={1.1}>
          <section className='text-light' id='About'>
            <h2>About</h2>
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={2.1}>
          <section className='text-light' id='Projects'>
            <h2>Projects</h2>
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={3.1}>
          <section className='text-light' id='Contact'>
            <h2>Contact</h2>
          </section>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
