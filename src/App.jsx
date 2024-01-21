import { useState } from 'react'
import './App.css'
import { colorAtom } from './assets/store/state'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'

function App() {

  return (
    <>
    <RecoilRoot>
       <Buttons></Buttons>
       <BackgroundRenderer></BackgroundRenderer>
    </RecoilRoot>
     
     
    </>
  )
}

function Buttons(){

  const setColor = useSetRecoilState(colorAtom)
  console.log("Button")

  return <div>
      <button onClick={()=>{
        setColor("red")
      }}>Red</button>

      <button onClick={()=>{
        setColor("green")
      }}>Green</button>

<button onClick={()=>{
        setColor("orange")
      }}>Orange</button>

<button onClick={()=>{
        setColor("black")
      }}>Black</button>

<button onClick={()=>{
        setColor("blue")
      }}>Blue</button>

<button onClick={()=>{
        setColor("white")
      }}>Default</button>
  </div>
}

function BackgroundRenderer(){
  const color = useRecoilValue(colorAtom)
  document.body.style.backgroundColor = color
  console.log("Color")
}


export default App
