import React from 'react';
import './App.css';
import { useCounter } from './utils/useCounter';

function App() {
  const {Count, incr, dcr} = useCounter()
  return (
    <>
      <p>{Count}</p>
      <button onClick={incr}>increment</button>
      <button onClick={dcr}>decrement</button>
    </>
  )
}

export default App;
