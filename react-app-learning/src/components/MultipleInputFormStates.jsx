import React, { useState } from 'react'
import axios from 'axios'

const MultipleInputFormStates = () => {
    const [details, setDetails] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setDetails((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(details)
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/posts', details);
            console.log(res.data)
            setResponse(res.data)
        }
        catch (err) {
            console.log(err)
        }

    }
    console.log(response)
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className='form-control'>

                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="number" name="phone" id="phone" onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <textarea name='address' onChange={(e) => handleChange(e)}></textarea>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
            {
                response ?
                    <>
                        <h4>Response Here when post api success: </h4>
                        <ul>
                            <li>NAME: {response?.name}</li>
                            <li>EMAIL: {response?.email}</li>
                            <li>PHONE: {response?.phone}</li>
                            <li>ADDRESS: {response?.address}</li>
                        </ul>
                    </> : ""
            }
        </>
    )
}

export default MultipleInputFormStates
