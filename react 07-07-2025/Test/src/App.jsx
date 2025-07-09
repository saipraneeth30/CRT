import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './assets/component.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>
        Hello sai
      </p>
      <p> This is second paragraph</p>
      <Comp></Comp>
    </>
  )
}

export default App
