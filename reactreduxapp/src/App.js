import React, {useEffect} from 'react';
import './App.css';
import SuperHero from './MySuperHero';
import {getSuperHero} from './store/actions/Superhero';


function App() {
  useEffect (() => {
    getSuperHero()
  }, []);
  return (
    <div className="App">
      <SuperHero />
    </div>
  );
}

export default App;
