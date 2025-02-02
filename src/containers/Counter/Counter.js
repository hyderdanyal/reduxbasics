import React, { Component } from 'react';
import {connect} from 'react-redux'
// import * as actionTypes from "../../store/actions/actions"
import * as actionCreators from "../../store/actions/index"

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddValue}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractValue}  />
                <hr />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                
                    <ul>
                    {this.props.storedResults.map(strResult =>(
                        <li 
                        key={strResult.id}
                        onClick={()=>this.props.onDeleteResult(strResult.id)}>
                            {strResult.value}
                            </li>
                    ))}
                </ul>
    
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        // ctr:state.counter,
        // storedResults: state.results
        ctr:state.ctr.counter,
        storedResults: state.res.results
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        // onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        // onDecrementCounter: () =>dispatch({type: 'DECREMENT'}),
        // onAddValue: () =>dispatch({type: actionTypes.ADD, value: 5}),
        // onSubtractValue: () =>dispatch({type: 'SUBTRACT', value: 5}),
        // onStoreResult: (result) => dispatch({type:actionTypes.STORE_RESULT, result:result}),
        // onDeleteResult: (id) => dispatch({type:actionTypes.DELETE_RESULT, resultElId:id})
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () =>dispatch(actionCreators.decrement()),
        onAddValue: () =>dispatch(actionCreators.add(5)),
        onSubtractValue: () =>dispatch(actionCreators.subtract(5)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);