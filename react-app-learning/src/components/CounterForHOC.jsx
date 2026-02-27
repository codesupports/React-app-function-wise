import React from 'react'
import WithHOC from './WithHOC';

const CounterForHOC = ({ count, increment, decrement }) => {

    return (
        <div>
            <h1>HOC Component Example: ⬇</h1>
            <h3>Counter : {count}</h3>
            <hr />
            <button onClick={() => decrement()}>Decrement</button>
            &nbsp;
            <button onClick={() => increment()}>Increment</button>
        </div>
    )
}

export default WithHOC(CounterForHOC);
