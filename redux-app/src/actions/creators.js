import { INCREMENT, DECREMENT, CHAT_INPUT } from "./constants";

const increment = (value) => {
    return {
        type: INCREMENT,
        payload: {
            value,
        },
    };
};

const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: {
            value,
        },
    };
};

const chat_input = (value) => {
    return {
        type: CHAT_INPUT,
        payload: {
            value,
        },
    };
};

export { increment, decrement, chat_input };
