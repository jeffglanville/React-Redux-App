import { FETCHING_SUPERHERO_START, FETCHING_SUPERHERO_SUCCESS, FETCHING_SUPERHERO_FAILURE } from '../actions/Superhero';

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
            };
        case FETCHING_SUPERHERO_SUCCESS:
            console.log(action.payload)
        return {
            ...state,
            isFetching: false,
            SuperHero: action.payload,
        };
        case FETCHING_SUPERHERO_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: "No Superhero Found for search results!"
            }
        default:
            return state;
    }
};