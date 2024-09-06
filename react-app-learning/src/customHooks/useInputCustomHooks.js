import {useState} from 'react'

const useInputCustomHooks = () => {


    const [getValue, setGetValue] = useState("")

    const handleInput = (val) => {
        setGetValue(val)
    }

    return [getValue, handleInput]
}

export default useInputCustomHooks
