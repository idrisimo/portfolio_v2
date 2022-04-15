import React from 'react';
import { HeroImage, NavBar } from './components';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <section id='Landing'>
        <HeroImage/>
      </section>
      <section id='About'>

      </section>
      <section id='Projects'>

      </section>
      <section id='Contact'>

      </section>
    </div>
  );
}

export default App;
