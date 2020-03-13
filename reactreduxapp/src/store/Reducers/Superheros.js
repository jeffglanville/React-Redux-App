import { FETCHING_SUPERHERO_START, FETCHING_SUPERHERO_SUCCESS } from '../actions/Superhero';

const initialState = {
    superhero: [],
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
        return {
            ...state,
            isFetching: false,
            superhero: action.payload,
            error: ""
        };
        default:
            return state;
    }
};