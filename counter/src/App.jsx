import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  // const [counte, setCounte] = useState(1000)
const addValue=()=>{
  // console.log("value added",Math.random())
  // counter+=1
  setCounter(counter+1)
  // console.log("clicked",Math.random(),counter)
}
const removeValue=()=>{
  setCounter(counter-1)
}
  return (
    <>
      <h1>sharma ji is doing something</h1>
      <h2>counter value:{counter}</h2>
      <button
      onClick={addValue}> Add value</button>
      <br/>
      <button
      onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
