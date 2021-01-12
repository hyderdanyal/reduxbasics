import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
// import reducer from "./store/reducer"
import counterReducer from "./store/reducers/counterReducer"
import resultReducer from "./store/reducers/resultReducer"
import {Provider} from "react-redux"
import thunk from "redux-thunk"

//Middleware
const logger = store =>{
    //another unnamed function
    return next =>{
      //another function that returns action dispatched
      return action =>{
        console.log('[Middleware] dispatching', action);
        const result = next(action)   //let the action to the reducer
        console.log('[Middleware] next state',store.getState());
        return result;
      }
    }
  }
  

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    ctr:counterReducer,
    res:resultReducer
})

const store = createStore(rootReducer,composeEnhancer(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
