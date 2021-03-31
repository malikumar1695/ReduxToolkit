import React from 'react';
import { useAppDispatch, useAppSelector } from '../../ReduxHooks';
import { decrement, increment, incrementByAmount } from './counterSlice';
import classes from './Counter.module.css';

const Counter = () => {
    const count = useAppSelector(state => state.counterReducer.value);
    const dispatch = useAppDispatch();

    //  dispatch(incrementByAmount(8))

    return (
        <div className={classes.counter}>
            <p> counter value  {count}</p>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment 5</button>

        </div>
    )
}

export default Counter;