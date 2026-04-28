import React from 'react'
import { useState } from 'react'

/*const App = () => {
  const [num, setNum] = React.useState(0)
  const [user, setUser] = React.useState('Sunny Tolani')
  const changeNum = () => {
    setNum(num + 1)
    setUser('Akriti Richharia ')
  }

  return (
    <div>
      <h1>Value of Number is {num} <br /> Value of User is {user}</h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App */

const App = () => {
  const [num, setNum] = useState(0)
  

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Increase</button>
      <button onClick={() => setNum(num - 1)}>Decrease</button>
      <button onClick={() => setNum(num * 5)}>Jump By Five</button>
    </div>
  )
}

export default App
