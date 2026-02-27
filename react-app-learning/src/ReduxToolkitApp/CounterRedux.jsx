import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/CounterSlice';

const CounterRedux = () => {
  const count = useSelector ((state)=>state.counter.value)
  const dispatch = useDispatch();

  return (
    <div>
      Counter Redux Toolkit <br/>
      <p>Count: {count}</p>
      <button onClick={()=> dispatch(increment(100))}>Increment</button>&nbsp;
      <button onClick={()=> dispatch(decrement())}>Decrement</button> <br/>
      <button onClick={()=> dispatch(incrementByAmount(50))}>Increment By Amount</button>
    
      
    </div>
  )
}

export default CounterRedux
