import React, { memo, useState  }from 'react';
import './App.css';
const About = memo(function About({age}) {
  console.log('foese')
  return (
  <div>{age}</div>
  )
})
let id = 0
function App() {
  const [states,setStates] = useState(20)
   id += 1
   if(id === 1) {
     useState('1l')
   }
  return (
    <>
    <button type="button" onClick={() => {
      setStates(states-1)
    }}>-1</button>
       <About age={states}></About>
       </>
  )
}

export default App;
