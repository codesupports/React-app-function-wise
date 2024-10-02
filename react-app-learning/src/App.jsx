import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Input from './components/Input'
import Navbar from './Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Counter />
        <Input />
        <Navbar />
      </div>
    </>
  )
}

export default App
