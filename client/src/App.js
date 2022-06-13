import React, { useRef, useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap/'
import { HeroImage, NavBar, SpacemanImage } from './components';
import { AboutPage, ContactPage, ProjectsPage } from './pages';
import './styles/App.css';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import moonImage from './assets/images/moonImageReversed.jpg'
import earthImage from './assets/images/spacetoearth.jpg'

import axios from 'axios'
import { ParallaxBanner, Parallax, ParallaxProvider } from 'react-scroll-parallax';

function App() {
  const ref = useRef()
  const [techstacksList, setTechstackList] = useState([])

  const getTechStack = async () => {
    try {
      const url = 'https://idrissilva-portfolio-v2.herokuapp.com/techstack/'
      const resp = await axios.get(url)
      setTechstackList(resp.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTechStack()
  }, [])



  // const scroll = (to) => {
  //   if (ref.current) {
  //     ref.current.scrollTo(to)
  //   }
  // }

  // const snapScroll = () => {
  //   console.log('scrolling')
  //   const scrollTopVal = document.documentElement.scrollTop
  //   let lastScrollTop = 0;
  //   console.log(scrollTopVal, "/", lastScrollTop)
  //   if (scrollTopVal > lastScrollTop) {
  //     // scroll(ref.current + 1)
  //     console.log('downscroll')
  //   } else {
  //     // scroll(ref.current - 1)
  //     console.log('upscroll')
  //   }
  //   lastScrollTop = scrollTopVal <= 0 ? 0 : scrollTopVal
  //   setY(window.scrollY)
  // }

  return (
    <div className="App" style={
      {
        backgroundPosition: 'center',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `linear-gradient(to bottom, #212529 1%, rgba(0,0,0,0) 99%), url(${earthImage})`
      }}>
      <header>
        <NavBar />
      </header>
      <main className='container'>
        <ParallaxProvider>
          <section className='text-light' id='Landing'>
            <Parallax speed={-30}>
              <HeroImage />
            </Parallax>
          </section>


          <section className='text-light' id='About' >
            <Parallax speed={30}>
              <AboutPage techstacksList={techstacksList} />
            </Parallax>
          </section>


          <section className='text-light' id='Projects' >
            <Parallax speed={30}>
              <ProjectsPage techstacksList={techstacksList} />
            </Parallax>
          </section>


          <section className='text-light' id='Contact' >
            <Parallax speed={30}>
              <ContactPage />
            </Parallax>
          </section>

        </ParallaxProvider>
      </main>
    </div>
  );
}

export default App;
