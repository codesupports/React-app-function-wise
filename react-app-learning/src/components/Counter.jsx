import React from 'react'
import useCounterCustomHooks from '../customHooks/useCounterCustomHooks' // import custom hooks

const Counter = () => {

   const {count, increment, deccrement}=  useCounterCustomHooks(2)

    return (
        <>
        <h2>Counter Component with custom hooks:⬇️</h2>
        <div className="counter-container">
            <div>
                <button onClick={increment}>+</button>
            </div>
            <div>
                Count: {count}
            </div>
            <div>
                <button onClick={deccrement}>-</button>
            </div>
        </div>
        </>
    )
}

export default Counter
