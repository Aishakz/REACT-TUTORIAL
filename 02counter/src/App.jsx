import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter]= useState(15)

   const addValue = () =>{
    // Counter = Counter+1
    setCounter(Counter+1)
   }

   
if(Counter>=15){
    if(Counter==20){
        Counter = ""
    }
  } 

   
   const removeValue = () => {
    setCounter(Counter-1)
   }

  return (
    <>
     <h1>Chai or React</h1>
     <h1>Counter Value: {Counter}</h1>

     <button
     onClick={addValue}
     >Add value {Counter}</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value {Counter}</button>
     <p>footer:{Counter}</p>
    </>
  )
}

export default App
