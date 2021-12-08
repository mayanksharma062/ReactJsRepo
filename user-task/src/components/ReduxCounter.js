import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { incNumber, deccNumber, numberBadha } from '../action/index'
import { decrement, increment, numberBadha } from '../redux/counter';


function ReduxCounter() {
    // const state = useSelector(state => state.changeTheNumber);
    const count = useSelector(state => state.counter.count)
    const number = useSelector(state => state.counter.number)
    const dispatch = useDispatch();

    return (
        <div>
            Steps: <input type="number" name="number" id="number" onChange={(e)=>dispatch(numberBadha(e.target.value))} placeholder="Enter Number Of Steps" />
            {/* <button onClick={(e)=>dispatch(numberBadha())}>Get It</button> */}
            <div>
            <button onClick={() => dispatch(increment())}>Increment by {number}</button>
            Counter: {count}
            <button onClick={() => dispatch(decrement())}>Decrement by {number}</button>
            </div>
        </div>
    )
}

export default ReduxCounter;


