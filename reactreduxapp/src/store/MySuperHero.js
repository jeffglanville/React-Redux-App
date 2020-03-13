import React from 'react';
import { connect } from 'react-redux';
import {getSuperHero} from '../store/actions/Superhero';

const SuperHero = ({ getSuperHero, SuperHero, isFetching, error }) => {
    if (isFetching) {
        return<h2>Fetching your Super Hero:P</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return(
        <div>
            <h2>Super Hero: </h2>
            {SuperHero.map((hero) => {
                return (
                    <div>
                        <p>Name: {hero.name}</p>
                        <p>Intelligence: {hero.powerstats.intelligence}</p>
                        <p>Strength: {hero.powerstats.strength}</p>
                        <p>Speed: {hero.powerstats.speed}</p>
                        <p>Durability: {hero.powerstats.durability}</p>
                        <p>Power: {hero.powerstats.power}</p>
                        <p>Combat: {hero.powerstats.combat}</p>
                        <p>Gender: {hero.appearance.gender}</p>
                        <p>Race: {hero.appearance.race}</p>
                        <p>Relatives: {hero.connections.relatives}</p>
                    </div>
                )
            })}
            <button onClick={getSuperHero}>Click for a Different Quote</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        superhero: state.superhero,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getSuperHero})(SuperHero);