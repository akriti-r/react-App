import React from 'react'
import axios from 'axios';
const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    setData(response.data);
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx){
          return <h3>Hello {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
