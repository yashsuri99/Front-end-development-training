import { LOADING, LOADED, ERROR, NEXT_PAGE } from "./constants";
import { getWorkshops } from "../services/workshops";

const loading = () => {
    return {
        type: LOADING,
    };
};

const loaded = (workshops) => {
    return {
        type: LOADED,
        payload: {
            workshops,
        },
    };
};

const error = (error) => {
    return {
        type: ERROR,
        payload: {
            error,
        },
    };
};

const nextPage = () => {
    return {
        type: NEXT_PAGE,
    };
};

// "thunk" -> a function that returns a function
const loadWorkshops = (page) => {
    return async (dispatch) => {
        // action 1 : { type: 'LOADING' }
        dispatch(loading());

        try {
            const workshops = await getWorkshops(page);
            // action 2 : { type: 'LOADED', payload: { workshops: workshops }  }
            dispatch(loaded(workshops));
        } catch (errorObj) {
            // action 3: { type: 'ERROR', payload: { error: error } }
            dispatch(error(errorObj));
        }
    };
};

export { loading, loaded, error, nextPage, loadWorkshops };
