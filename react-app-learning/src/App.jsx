import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Input from './components/Input'
import Navbar from './Navbar/Navbar'
import MultipleInputFormStates from './components/MultipleInputFormStates'
import InsertHyephenAfterFourChar from './components/InsertHyephenAfterFourChar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Counter />
        <Input />
        <Navbar />
        <MultipleInputFormStates />
        <InsertHyephenAfterFourChar/>
      </div>
    </>
  )
}

export default App
