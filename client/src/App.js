import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { PortfolioPage, RedditProjectPage } from './pages';
import './styles/App.css';

import earthImage from './assets/images/spacetoearth.jpg'

function App() {

  return (
    <div className="App" style={
      {
        backgroundPosition: 'center',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `linear-gradient(to bottom, #212529 1%, rgba(0,0,0,0) 99%), url(${earthImage})`
      }}>

      <NavBar />
      <main className='container'>
        <Routes>
          <Route path='/' element={<PortfolioPage />} />
          <Route path='/reddit' element={<RedditProjectPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
