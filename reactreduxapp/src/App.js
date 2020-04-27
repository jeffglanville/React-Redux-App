import React, {useEffect} from 'react';
import './App.css';
import SuperHero from './MySuperHero';
import {getSuperHero} from './store/actions/Superhero';


function App() {
  useEffect (() => {
    getSuperHero()
  }, []);
  console.log(SuperHero)
  console.log(getSuperHero)
  return (
    <div className="App">
      <h1>Superhero Info: </h1>
      <SuperHero />
    </div>
  );
}

export default App;
