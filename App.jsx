import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [타이머, change] = useState(0);


  return (
    <>
      <div>
      <h1>{타이머}</h1>
      <button onClick={ () => { change(타이머+1) } }>+1</button>
      <button onClick={ () => { change(타이머-1) } }>-1</button>
      </div>
     </>
  )
}

export default App
