import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter_actions";
import { intialState } from "./counter_state";

const counter_Reducer = createReducer(intialState, on(increment, (state) => {
    return {
        ...state,
        counter: state.counter + 1
    }
}), on(decrement, (state) => {
    return {
        ...state,
        counter: state.counter - 1
    }
}), on(reset, (state) => {
    return {
        ...state,
        counter: 0
    }
}))


export function counterReducer(state: any, action: any) {
    return counter_Reducer(state, action);
}