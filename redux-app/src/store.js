import { combineReducers, createStore, applyMiddleware } from "redux";
import counterReducer from "./reducers/counter";
import chatboxReducer from "./reducers/chatbox";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    counter: counterReducer,
    chat: chatboxReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
