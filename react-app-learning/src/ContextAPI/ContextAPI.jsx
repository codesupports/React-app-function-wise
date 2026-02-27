import React, { Children, createContext } from 'react'

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {

    const [data, setData] = React.useState({name:'raj', age: 25})

  return (
    <UserContext.Provider value={{theame: 'dark', data, setData}}>
        {children}
    </UserContext.Provider>
    )   
}

