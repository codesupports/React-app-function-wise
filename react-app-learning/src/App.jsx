import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { UserProvider } from './ContextAPI/ContextAPI'

function App() {

  return (
    <>
    <UserProvider>
      <div>
        <Home />
      </div>
    </UserProvider>
      
    </>
  )
}

export default App
