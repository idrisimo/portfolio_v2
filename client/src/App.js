import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';
import { PortfolioPage, RedditProjectPage } from './pages';
import './styles/App.css';



function App() {

  return (
    <div className="App" >

      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<PortfolioPage />} />
          <Route path='/reddit' element={<RedditProjectPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
