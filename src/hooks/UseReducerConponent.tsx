import { useState , useEffect, useReducer} from "react";

const initialState = {
    counter : 100
}

type ACTION_TYPE =
    | {type : "increment"; payload : number;}
    | {type : "decrement"}

function counterReducer (state : typeof initialState,action : ACTION_TYPE){
    switch(action.type){
        case "increment":
            return {
                ...state,
                counter : state.counter + action.payload
            }
        case "decrement":
            return {
                ...state,
                counter : state.counter - 1
            }
        default:
            return state;
    }
}

const UseReducerComponent = ()=>{
    const [state, dispatch] = useReducer(counterReducer,initialState)
    return <div>
        <h1>UseReducer with TypeScript</h1>
        <div>{state.counter}</div>
        <button onClick={()=> dispatch({type : "increment",payload : 1})} >Increase</button>
        <button onClick={()=> dispatch({type : "decrement"})} >Decrement</button>
    </div>
}

export default UseReducerComponent;