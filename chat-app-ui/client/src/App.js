import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [state, setState] = useState('')
  
  useEffect(() => {
    axios.get('/api/cytham')
    .then(result => {
      console.log(result)
      setState(result.data)
    })
  },[])
  return (
    <div className="App">
      {state.genre}
    </div>
  );
}

export default App;
