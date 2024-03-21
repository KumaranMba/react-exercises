import React from 'react';
import { useState } from 'react';

function App() {

  const[count,setCount] = useState(0);
  const[clickHistory,setClickHistory] = useState([]);

  const Increment =() =>{
    setCount(count+1);
    setClickHistory(clickHistory.concat('Incr'));
  }
  
  const Decrement =() =>{
    if(count > 0){
      setCount(count-1);
      setClickHistory(clickHistory.concat('Decr'));
    }
  }

  const Reset = ()=>{
    setCount(0);
    setClickHistory(clickHistory.concat('Reset'));
  }

  return (
    <div>
        <p>Count:{count}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>

        <h5>Track user Interaction history</h5>
        <p>{clickHistory.join(' ')}</p>

    </div>
  )
}

export default App;