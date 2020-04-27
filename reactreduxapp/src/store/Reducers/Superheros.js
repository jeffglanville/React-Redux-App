import { FETCHING_SUPERHERO_START, FETCHING_SUPERHERO_SUCCESS } from '../actions/Superhero';

const initialState = {
    SuperHero: [],
    isFetching: false,
    error: " "
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_SUPERHERO_START:
            return {
                ...state,
                isFetching: true,
                error: " "
            };
        case FETCHING_SUPERHERO_SUCCESS:
            console.log(action.payload)
        return {
            ...state,
            isFetching: false,
            SuperHero: action.payload,
            error: ""
        };
        default:
            return state;
    }
};