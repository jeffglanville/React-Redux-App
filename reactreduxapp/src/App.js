import React, {useEffect} from 'react';
import './App.css';
import SuperHero from './MySuperHero';
import {getSuperHero} from './store/actions/Superhero';
import MySuperHero from './MySuperHero';


function App() {
  useEffect (() => {
    getSuperHero()
  }, []);
  return (
    <div className="App">
      <h1>Superhero Info: </h1>
      <SuperHero />
      <MySuperHero />
    </div>
  );
}

export default App;
