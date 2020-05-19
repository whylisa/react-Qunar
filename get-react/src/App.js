import React, {createContext, useState} from 'react';
import './App.css';
const BatterContext = createContext()
const OnlineContext = createContext()

function Leaf() {
  return (
    <BatterContext.Consumer>

        {
          battery => (
            <OnlineContext.Consumer>
              {
                (online) => <h1> Battery: {battery},Online: {String(online)}</h1>
              }
            </OnlineContext.Consumer>
          )
        }
    </BatterContext.Consumer>
  )
}
function Middle() {
  return (
    <Leaf />
  )
}
function App() {
  const [battery,setBattery] = useState(60)
  const [online, setOnline] = useState(false)
  return (
    <BatterContext.Provider value={battery}>
      <OnlineContext.Provider value={online}>
      <button type="button" onClick={()=> {
        // let a = battery -1
        setBattery(battery -1)
        setOnline(!online)
      }}>
      -1
      </button>
        <Middle></Middle>
      </OnlineContext.Provider>

      </BatterContext.Provider>
  );
}

export default App;
