import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './Component/Comp1'
import Comp2 from './Component/Comp2'
import Like from './Component/like'
import Info from './Component/info'
import image from './photos/sai.jpg'

function App() {

  return (
    <>
    <Info name="Sai Praneeth" class="B.tech" phone="9985264647" age="19" image={image}></Info>
    <Like></Like>
      <Comp1 name="abc" age="50"/>
      <Comp1 name="Anu" age="52"/>
      <Comp1 name="sais" age="18"/>
      <Comp1 name="sabari" age="17"/>
      <Comp1 name="sasas " age="17"/>
      <Comp1 name="sri" age="17"/>
      <Comp2></Comp2>
      
    </>
  );
}

export default App
