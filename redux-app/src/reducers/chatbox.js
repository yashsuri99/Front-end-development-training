import { CHAT_INPUT } from "../actions/constants";

const chatboxReducer = (state = { chatMessage: "" }, action) => {
    switch (action.type) {
        case CHAT_INPUT:
            return {
                ...state,
                chatMessage: action.payload.value,
            };
        default:
            return state;
    }
};

export default chatboxReducer;
