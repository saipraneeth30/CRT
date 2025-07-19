import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import About from '../pages/About'
import Navigation from '../pages/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hooooo</h1>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<h1>Not a correct root</h1>}></Route>
      </Routes>
      <Navigation></Navigation>
    </>
  )
}

export default App
