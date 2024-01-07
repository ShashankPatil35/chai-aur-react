import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 15;
   let [counter,setCounter] = useState(15)
  let addValue = ()=>{
   // console.log("value added",Math.random())
   counter = counter + 1;
   if(counter>20){
    setCounter(20);
  }else{
    setCounter(counter);
  }
//   console.log("clicked",Math.random());
  }
  let removeValue = () =>{
    counter = counter - 1;
    if(counter<1){
      setCounter(0);
    }else{
      setCounter(counter);
    }
   
  }
  return (
    <>
     <h1>chai aur react!</h1>
     <h2>Counter Value: {counter}</h2>
     <button
     onClick={addValue}
     >Add value</button>
     <br />
     <button
     onClick={removeValue}
     >Remove Value</button>
    </>
  )
}

export default App
