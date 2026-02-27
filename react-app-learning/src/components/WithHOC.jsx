import React, { useState } from 'react'

const WithHOC = (WrapedComponent) => {
    const newComponent = ({props}) => {
        // logic for reusing the component below start
        const [count, setCount] = useState(0);
        const increment = () => {
            setCount(count + 1);
        }
        const decrement = () => {
            setCount(count - 1);
        }
         // logic for reusing the component end
        return <WrapedComponent {...props} count={count} increment={increment} decrement={decrement}  />
    }
    return newComponent;
};

export default WithHOC;
