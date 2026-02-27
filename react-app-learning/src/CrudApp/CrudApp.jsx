
import React, { useState, useContext } from 'react'
import { use } from 'react';
import { UserContext } from '../ContextAPI/ContextAPI'; // Importing UserContext to access the context values

const CrudApp = () => {
    const {theame, data, setData} = useContext(UserContext) // Accessing theame and data from Context API

    console.log('theame', theame)
    console.log('data', data)

    const dummyData = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
    ];
    const [users, setUsers] = useState(dummyData)
    const [showUserFields, setShowUserFields] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isediting, setIsEditing] = useState(false)
    const [editItemId, setEditItemId] = useState(-1)
    const [addUser, setAddUser] = useState(false)
    const handleDelete = (id) => {
        const filteredData = users.filter((user) => {
            return user.id !== id
        })
        // console.log(filteredData)
        setUsers(filteredData)
    }

    const addUserBtn = () => {
        setShowUserFields(true)
        setAddUser(true)
    }
    const addNewUser = () => {
        setShowUserFields(true)
        const newUser = {
            id: users.length + 1,
            name: name,
            email: email
        }
        setUsers([...users, newUser])
        setName('')
        setEmail('')
        setAddUser(true)
    }
    const handleEdit = (id) => {
        setShowUserFields(true)
        setIsEditing(true)
        const userToEdit = users.find((user) => {
            return user.id === id
        })
        setName(userToEdit.name)
        setEmail(userToEdit.email)
        setEditItemId(id)
    }
const updateUser = (id)=>{
    const updatedUsers = users.map((user) => {
        if (user.id === id) {
            return { ...user, name: name, email: email }
        }   else {  
            return user
        }    })
        setUsers(updatedUsers)
        setIsEditing(false)
        setName('')
        setEmail('')
}
    return (
        <div className='crud-table'>
            <h1>CrudApp</h1>
            <h3 style={{color:'red'}}>Here is the Context API data - Theme: {theame}</h3>
            {
                isediting ? 
                <button onClick={() => updateUser(editItemId)}>Update</button> : 
                (addUser ? <button onClick={() => addNewUser()}>Add User</button> :<button onClick={() => addUserBtn()}>Add New User</button>)
            }

            {
                showUserFields && (
                    <div>
                        <input type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
                        <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>)
            }

            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {
                        users.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button onClick={() => handleEdit(user.id)}>✎ Edit</button>
                                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </thead>
            </table>
        </div>
    )
}

export default CrudApp
