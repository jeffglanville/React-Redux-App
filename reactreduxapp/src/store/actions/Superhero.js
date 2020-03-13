import axios from 'axios';

export const FETCHING_SUPERHERO_START = "FETCHING_SUPERHERO_START";
export const FETCHING_SUPERHERO_SUCCESS = "FETCHING_SUPERHERO_SUCCESS";
export const FETCHING_SUPERHERO_FAILURE = "FETCHING_SUPERHERO_FAILURE";

export function getSuperHero() {

    return (dispatch) => {
        dispatch({FETCHING_SUPERHERO_START});
        axios.get('https://superheroapi.com/api/10221162178461894/search/1')
        .then( res => {
            dispatch({type:FETCHING_SUPERHERO_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type:FETCHING_SUPERHERO_FAILURE, payload:err})
        })
    }

    // dispatch({ type: FETCHING_QUOTE_START });

    // axios.get('https://programming-quotes-api.herokuapp.com/quotes')
    //     .then(res => dispatch({ type:FETCHING_QUOTE_SUCCESS, payload: res.data.results}))
    //     .catch(err => {
    //         console.log("err", err);

    //     dispatch({
    //         type: FETCHING_QUOTE_FAILURE,
    //         payload: err
    //     });
    // });
}