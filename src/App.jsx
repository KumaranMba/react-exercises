import React, { useState } from 'react';

function App() {
  // using useState and rendering the state condition.
  const [count,setCount]= useState(0);
 
  function plusButtonClick(){
    setCount(count+1);
  }

  

  return (
    <div>
    <p>Counter:{count}</p>
    <button onClick={plusButtonClick}>plus</button>
    </div>
  )
}

export default App;




