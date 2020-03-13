import React from 'react';
import { connect } from 'react-redux';
import {getSuperHero} from '../store/actions/Superhero';

const superHero = ({ getSuperHero, isFetching, error }) => {
    if (isFetching) {
        return<h2>Fetching your Super Hero:P</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return(
        <div>
            <h2>Super Hero: </h2>
            {superHero.map((hero) => {
                return (
                    <div>
                    <p>{hero.author}</p>
                    <p>{hero.en}</p>
                    <p>{hero.numberOfVotes}</p>
                    <p>{hero.rating}</p>
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

export default connect(mapStateToProps, {getSuperHero})(superHero);