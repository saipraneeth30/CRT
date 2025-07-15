import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './assets/component.jsx'
import CallDaddy from './Bahubali/Mahendra_bahubali.jsx'
import CallDevasena from './Bahubali/Amarendra_bahubali.jsx'
import CallAmma from './Kanchana/Ragava.jsx'
import CallRagava from './Kanchana/amma.jsx'
import Kanchana from './Kanchana/kanchana.jsx'
import Togost from './Kanchana/maradhal.jsx'
import Btn from './Button/B.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CallAmma></CallAmma>
      <CallRagava></CallRagava>
      <Kanchana></Kanchana>
      <Togost></Togost>
      <Btn></Btn>
    </>
  )
}

export default App
