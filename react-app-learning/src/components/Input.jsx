import React from 'react'
import useInputCustomHooks from '../customHooks/useInputCustomHooks'

const Input = () => {

    const [getValue, handleInput] = useInputCustomHooks()

    return (
        <div>
            <h2>Input Component with custom hooks:⬇️</h2>
            <input
                className='input-component'
                type='text'
                value={getValue}
                onChange={(e) => handleInput(e.target.value)}
            />
            <p>Value of input here: <b>{getValue}</b></p>

            {/* <input
                className='input-component'
                type='text'
                value={getValue}
                onChange={(e) => handleInput(e.target.value)}
            />
            <button 
            class="button-black" 
            onClick={(e) => handleInput(e.target.value)}>Add</button>
            <p>Value of input here: <b>{getValue}</b></p> */}

        </div>
    )
}

export default Input
