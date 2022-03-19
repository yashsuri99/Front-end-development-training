import { INCREMENT, DECREMENT } from "../actions/constants";

const counterReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + action.payload.value,
            };
        case DECREMENT:
            return {
                ...state,
                value: state.value - action.payload.value,
            };
        default:
            return state;
    }
};

export default counterReducer;
