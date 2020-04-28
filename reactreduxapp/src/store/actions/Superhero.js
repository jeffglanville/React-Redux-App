import axios from 'axios';

export const FETCHING_SUPERHERO_START = "FETCHING_SUPERHERO_START";
export const FETCHING_SUPERHERO_SUCCESS = "FETCHING_SUPERHERO_SUCCESS";
export const FETCHING_SUPERHERO_FAILURE = "FETCHING_SUPERHERO_FAILURE";

export const getSuperHero = () => dispatch => {
        dispatch ({ type: FETCHING_SUPERHERO_START});
        axios.get(`https://superheroapi.com/api/10221162178461894/search/id`)
        .then( res => {
            dispatch({type:FETCHING_SUPERHERO_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            dispatch({type:FETCHING_SUPERHERO_FAILURE, payload:err})
        })
    return null;
}