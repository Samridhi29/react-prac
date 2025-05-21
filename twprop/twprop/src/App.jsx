import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 class='bg-green-400 text-black p-4 rounded-4xl mb-4' >Tailwind Test</h1>
    <Card user="Hello Bachchoo"/>
    <Card/>
    </>
  )
}

export default App
