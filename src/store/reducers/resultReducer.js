import * as actionTypes from "../actions/actionTypes"
import {updateObject} from "../utility"

const initialState = {
    
    results:[]
}

const deleteResult = (state,action) =>{
    
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return(state,{results: updatedArray})
}

const resultReducer = (state=initialState,action) =>{
    switch(action.type) {
        
        case actionTypes.STORE_RESULT:
            return(state,{results: state.results.concat({id:new Date(), value:action.result})})
            // return{
            //    ...state,
            //    results: state.results.concat({id:new Date(), value:action.result})
            // }  
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // // newArray.splice(id,1)
            // const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            // return(state,{results: updatedArray})
            // return{
            //     ...state,
            //     results: updatedArray
            // }
            return deleteResult(state,action);
        default:
            return state;
        
    }
    
};

export default resultReducer;