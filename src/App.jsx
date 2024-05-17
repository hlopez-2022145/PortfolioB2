import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(100)

  function aumentar(){
    setCount2(count2 + 100)
  }

  function sumar8() {
    setCount(count + 8)
    if(count >= 200){
      setCount(count)
    }else{
      if((count + 8) > 200){
        setCount(200)
      }
    }
  }
 
  function restar8() {
    setCount(count - 8)
    if(count <= -200){
      setCount(count)
    }else{
      if((count - 8) < -200){
        setCount(-200)
      }
    }
  }

  function sumar1(){
    setCount(count + 1)
    if(count >= 200){
      setCount(count)
    }else{
      if((count + 1) > 200){
        setCount(200)
      }
    }
  }

  function restar1(){
    setCount(count - 1)
    if(count <= -200){
      setCount(count)
    }else{
      if((count - 1) < -200){
        setCount(-200)
      }
    }
  }

  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="alinear">
        <button class="btn" onClick={() => sumar8()}>
          Suma +8
        </button>
        <button class="btn" onClick={() => sumar1()}>
          Suma +1
        </button>
        <h3 id='count'>
          Count is {count}
        </h3>
        <button class="btn" onClick={() => restar1()}>
          Resta -1
        </button>
        <button class="btn" onClick={() => restar8()}>
          Resta -8
        </button>
        </div>
      </div>
      <p className="read-the-docs">
        Hernán Misael López Pérez
      </p>
    </>
  )
}

export default App