
import { useState } from 'react'

const useCounterCustomHooks = (val) => {
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count + val)
    }
    const deccrement = ()=>{
        setCount(count - val)
    }


    return {count, increment, deccrement}
}

export default useCounterCustomHooks
