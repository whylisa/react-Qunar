import React, { lazy,Suspense }from 'react';
import './App.css';
const About = lazy(() => import('./about.js'))
// Error Boundary
function App() {
  return (
     <Suspense fallback={<div>loding</div>}>
       <About></About>
     </Suspense>
  )
}

export default App;
