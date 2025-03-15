import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className='counter'>
        <div id='title'>
          A simple counter
        </div>
        Count: {count}
        <br /><br />
        <button id='incrBtn' onClick={() => {setCount(count + 1);}}>Increment</button>
        <button id='decrBtn' onClick={() => {setCount(count - 1);}} disabled={count === 0}>Decrement</button>
        <button id='rstBtn' onClick={() => {setCount(0);}} disabled={count === 0}>Reset</button>
      </div>
      <div id='dev-info'>
        <br /><br />
        Made by Shivam Tadas
      </div>
    </div>
  );
}

export default App;
