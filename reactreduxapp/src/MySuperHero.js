import React from 'react';
import { connect } from 'react-redux';
import {getSuperHero} from './store/actions/Superhero';
import './MySuperHero.css';


const SuperHero = ({ getSuperHero, SuperHero}) => {

    return(
        <div className="superhero-wrapper">
            <h1>Super Hero: </h1>
            {SuperHero.map((hero) => {
                return (
                    <div className="superhero">
                        <p>Name: {hero.name}</p>
                        <p>Intelligence: {hero.powerstats.intelligence}</p>
                        <p>Strength: {hero.powerstats.strength}</p>
                        <p>Speed: {hero.powerstats.speed}</p>
                        <p>Durability: {hero.powerstats.durability}</p>
                        <p>Power: {hero.powerstats.power}</p>
                        <p>Combat: {hero.powerstats.combat}</p>
                        <p>Race: {hero.appearance.race}</p>
                    </div>
                )
            })}
            <button onClick={getSuperHero}>Click for a Different Hero</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        SuperHero: state.SuperHero,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getSuperHero})(SuperHero);