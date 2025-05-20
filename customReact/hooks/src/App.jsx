import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  //let counter=15
  const addVal=()=>{
    if(counter>20){
      setCounter(counter=20)
    }
    setCounter(counter+1);
    console.log("clicked",counter);
  } 
  const remVal=()=>{
    if(counter<0){
      setCounter(counter=0)
    }
    setCounter(counter-1);
    console.log("clicked",counter);
  } 
  return (
    <>
    <h1>Hellowww</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addVal}>Add value</button><br/>
    <button onClick={remVal}>Remove value</button>

    </>
  )
}

export default App
