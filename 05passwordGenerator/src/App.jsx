import { useEffect, useState,useRef } from 'react'

import './App.css'
import { useCallback } from 'react';

function App() {
  const [Length, setLength] = useState(8);
  const [numberAllowed,setNumerAllowed] = useState(false);
  const [charAllowed,setcharAllowed] = useState(false);
  const [password,setPassword] = useState("")
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*-_+=[]{}~`"
    for (let i = 1; i < Length; i++) {
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[Length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
      passwordGenerator()
  },[Length,numberAllowed,charAllowed,setPassword])

  return (
    <>
    {/* <h1 className='text-4xl text-center text-white'>password Generator</h1> */}
    {/* <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 my-10 text-orange-500 bg-gray-700'>

      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
         type="text"
         value={password}
         className='outline-none w-full py-2 px-3'
         placeholder='password '
         readOnly
         />
      </div>
    </div> */}
    <div className='w-full max-w-md mx-auto p-6 shadow-md rounded-lg my-10 text-gray-900 bg-gray-700'>

<h1 className='text-white text-2xl font-semibold text-center mb-4'>Secure Password Generator</h1>

<div className='flex flex-col items-center shadow rounded-lg overflow-hidden mb-4'>
  <label htmlFor="password" className='sr-only'>Generated Password</label>
  <input
    type="text"
    id="password"
    value={password}
    className='outline-none w-full py-2 px-3'
    placeholder='Your secure password'
    readOnly
    ref={passwordRef}
  />
</div>
<button className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 
 focus:outline-none focus:shadow-outline-blue active:bg-blue-700'
 onClick={copyPasswordToClipBoard}
 
 >
 Copy
</button>

   <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max={100}
      value={Length}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
       />
       <label className='text-white'>Length: {Length}</label>
    </div>
    <div className='text-white flex items-center gap-x-1'>
   <input 
   type="checkbox"
   defaultChecked={numberAllowed}
   id="numberInput"
   onChange={()=>{
    setNumerAllowed((prev)=>!prev);
   }}
   />
   <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className='text-white flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={charAllowed}
      id="characterInput"
      onChange={()=>{
        setcharAllowed((prev)=>!prev);
      }}
      />
      <label htmlFor="characterInput">character</label>

    </div>
   </div>


</div>

    
    </>
  )
}

export default App
