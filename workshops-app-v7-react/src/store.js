import { combineReducers, createStore, applyMiddleware } from "redux";
import workshopsReducer from "./reducers/workshops";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

/*
    "big state" -> {
        workshopsList: {
            status: LOADING,
            workshops: [],
            error: null,
            page: 1
        }
    }
*/
const rootReducer = combineReducers({
    workshopsList: workshopsReducer,
});
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
