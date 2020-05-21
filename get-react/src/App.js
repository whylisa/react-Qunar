import React, { useMemo, useState ,useRef}from 'react';
import './App.css';
function About({age}) {
  console.log('foese')
  return (
  <div>{age}</div>
  )
}
let id = 0
function App() {
  const [states,setStates] = useState(20)
  const doubles = useMemo(() => {
     return states * 2
  },[states])
  const dataRef = useRef(null)
  const onBtm = () => {
    console.log(dataRef.current.dataset.dd)
    
  }
  return (
    <>
    <button type="button" onClick={() => {
      setStates(states-1)
      onBtm()
    }}>-1{doubles}</button>
    <input ref={dataRef} data-dd={1} type="input" /> 
       <About age={states}></About>
       </>
  )
}

export default App;
