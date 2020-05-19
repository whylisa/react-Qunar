import React, {createContext} from 'react';
import './App.css';
const BatterContext = createContext()
function Leaf() {
  return (
    <BatterContext.Consumer>
        {
          battery => <h1> Battery: {battery}</h1>
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
  
  return (
    <BatterContext.Provider value={60}>
        <Middle></Middle>
      </BatterContext.Provider>
  );
}

export default App;
