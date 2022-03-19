import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chat_input } from "../actions/creators";

const ChatBox = () => {
    const ref = useRef();
    const dispatch = useDispatch();

    const chat = useSelector((state) => state.chat.chatMessage);

    const onChangeHandler = () => {
        dispatch(chat_input(ref.current.value));
    };

    return (
        <div id="chatbox-wrapper">
            <label htmlFor="chat-message">Message</label>
            <textarea
                id="chat-message"
                onChange={onChangeHandler}
                ref={ref}
            ></textarea>
            You typed: <span id="chat-confirmation">{chat}</span>
        </div>
    );
};

export default ChatBox;
