import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [genshin, setGenshin] = useState([])
  const [genshinName, setGenshinName] = useState('')
  const [genshinRegion, setGenshinRegion] = useState('')
  
  const handleGenshinName = (e) => {
    setGenshinName(e.target.value)
  }

  const handleGenshinRegion = (e) => {
    setGenshinRegion(e.target.value)
  }
  const submitGenshin = () => {
    axios.post('/genshin', {
      character: genshinName,
      region: genshinRegion
    })
    .then((res) => {
      console.log(res)
      axios.get('/genshin')
      .then(result => {
        console.log(result)
        setGenshin(result.data)
      })
    })
  }

  useEffect(() => {
    axios.get('/genshin')
    .then(result => {
      console.log(result)
      setGenshin(result.data)
    })
    // axios.get('/api/cytham')
    // .then(result => {
    //   console.log(result)
    //   setState(result.data)
    // })
  },[])
  return (
    <div className="App">
      <div>
        <input
          value={genshinName}
          onChange={handleGenshinName}
        ></input>
        <select value={genshinRegion} onChange={handleGenshinRegion}>
          <option value='Mondstadt'>Mondstadt</option>
          <option value='Liyue'>Liyue</option>
          <option value='Inazuma'>Inazuma</option>
          <option value='Sumeru'>Sumeru</option>
        </select>
        <button onClick={submitGenshin}>Submit</button>
      </div>
      <div>{genshin.map((data) => 
        <div>{data.character} - {data.region}</div>
      )}</div>
    </div>
  );
}

export default App;
