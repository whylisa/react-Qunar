import React, {createContext, useState,useContext} from 'react';
import './App.css';
const BatterContext = createContext(100)
const OnlineContext = createContext()

function Leaf() {
  const  contextType = useContext(BatterContext)
  console.log(contextType) 
  return (
         <h1> Battery: {contextType}</h1>
  )
}
function Middle() {
  return (
    <Leaf />
  )
}
function App() {
  const [battery,setBattery] = useState(60)
  return (
    <BatterContext.Provider value={battery}>
      <button type="button" onClick={()=> {
        // let a = battery -1
        setBattery(battery -1)
      }}>
      -1
      </button>
        <Middle></Middle>
      </BatterContext.Provider>
  );
}

export default App;
