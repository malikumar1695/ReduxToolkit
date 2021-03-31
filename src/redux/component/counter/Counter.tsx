import React from 'react';
import { useAppDispatch, useAppSelector } from '../../ReduxHooks';
import { decrement, increment, incrementByAmount } from './counterSlice';

const Counter = () => {
    const count = useAppSelector(state => state.counterReducer.value);
    const dispatch = useAppDispatch();

    //  dispatch(incrementByAmount(8))

    return (
        <div>
            <p> counter value  {count}</p>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment 5</button>

        </div>
    )
}

export default Counter;