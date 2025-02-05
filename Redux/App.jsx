import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { change, decrement, increment } from './counterSlice'


function App() {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch();

  return (
    <>
      <p><span onClick={()=>{dispatch(increment())}}>+</span>{count}<span onClick={()=>{dispatch(decrement())}}>-</span></p>
    </>
  )
}

export default App
