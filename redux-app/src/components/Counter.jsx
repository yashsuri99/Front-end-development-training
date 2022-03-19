import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../actions/creators";

const Counter = () => {
    const ref = useRef();
    const dispatch = useDispatch();

    const { value } = useSelector((state) => state.counter);

    const dec = () => {
        dispatch(decrement(+ref.current.value));
    };
    const inc = () => {
        dispatch(increment(+ref.current.value));
    };

    return (
        <div id="counter-wrapper">
            <input type="number" id="qty" ref={ref} />
            <button onClick={dec}>-</button>
            <span id="counter">{value}</span>
            <button onClick={inc}>+</button>
        </div>
    );
};

export default Counter;
