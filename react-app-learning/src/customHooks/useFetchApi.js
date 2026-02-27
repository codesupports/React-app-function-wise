import { useEffect, useState } from "react"

const useFetchApi = (url)=>{

    const [data, setData] = useState(null)  

    // const fetchData = fetch(url)
    // .then((response)=> response.json())
    // .then((result)=> setData(result))
    // .catch((error)=> console.log(error))

    const fetchData = async ()=>{
        try{
            const response = await fetch(url)
            const result = await response.json()
            setData(result)
        } catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [url])
    return [data]
}

export default useFetchApi