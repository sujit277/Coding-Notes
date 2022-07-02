import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { increment,decrement } from "../Redux/Features/counterFeature";

const Counter = () => {
    let dispatch = useDispatch();

    let counterState = useSelector((state) => {
        return state["counter"];
    });

    let {count} = counterState;

    let clickIncr = () => {
        dispatch(increment());
    };

    let clickDecr = () => {
        dispatch(decrement());
    };

    return (
        <>
            <div style={{textAlign:"center"}}>
                <h1>Counter Increment</h1>
                <h1 style={{ fontSize: "60px" }}>Count : {count}</h1>
                <button onClick={clickIncr} className="btn btn-success mx-4 mt-5">Increment</button>
                <button onClick={clickDecr} className="btn btn-danger mt-5">Decrement</button>
            </div>
        </>
    );
}

export default Counter;