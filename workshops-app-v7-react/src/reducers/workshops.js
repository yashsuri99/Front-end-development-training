import { LOADING, LOADED, ERROR, NEXT_PAGE } from "../actions/constants";

const initialState = {
    status: LOADING,
    workshops: [],
    error: null,
    page: 1,
};

const workshopsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                status: LOADING,
            };
        case LOADED:
            return {
                ...state,
                status: LOADED,
                workshops: action.payload.workshops,
            };
        case ERROR:
            return {
                ...state,
                status: ERROR,
                workshops: action.payload.error,
            };
        case NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1,
            };
        default:
            return state;
    }
};

export default workshopsReducer;
