import React from 'react';
import { connect } from 'react-redux';
import {getSuperHero} from './store/actions/Superhero';
import './MySuperHero.css';


const SuperHero = ({ getSuperHero, SuperHero}) => {

    return(
        <div>
            <div className="big">
                <h1>Super Hero: </h1>
                {SuperHero.map((hero) => {
                    return (
                        <div>
                            <div className="superhero-wrapper">
                                <p>Name: {hero.name}</p>
                                <p>Intelligence: {hero.powerstats.intelligence}</p>
                                <p>Strength: {hero.powerstats.strength}</p>
                                <p>Speed: {hero.powerstats.speed}</p>
                                <p>Durability: {hero.powerstats.durability}</p>
                                <p>Power: {hero.powerstats.power}</p>
                                <p>Combat: {hero.powerstats.combat}</p>
                                <p>Race: {hero.appearance.race}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
                <button onClick={getSuperHero}>Click for a list of heros</button>
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