import * as actionTypes from "./actionTypes"

//action creators
export const saveResult = (result) =>{
    return{
        type:actionTypes.STORE_RESULT,
        result:result
    }
}
export const storeResult = (result) =>{
    return (dispatch,getState) => {
        setTimeout(()=>{
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(result))
        },2000);
    }
}
export const deleteResult = (id) =>{
    return{
        type:actionTypes.DELETE_RESULT,
        resultElId:id
    }
}