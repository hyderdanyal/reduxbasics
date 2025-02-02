import * as actionTypes from "../actions/actionTypes"
import {updateObject} from "../utility"

//action creators
export const increment = () =>{
    return{
        type:actionTypes.INCREMENT
    }
}
export const decrement = () =>{
    return{
        type:actionTypes.DECREMENT
    }
}
export const add = (value) =>{
    return{
        type:actionTypes.ADD,
        value:value
    }
}
export const subtract = (value) =>{
    return{
        type:actionTypes.SUBTRACT,
        value:value
    }
}

