import React, { useState } from 'react';

function Display({count}){
  return(
    <>
      <p>Counter:{count}</p>
    </>
  )
}

function App() {
  // using useState and rendering the state condition.
  const [count,setCount]= useState(0);
 
  function plusButtonClick(){
    setCount(count+1);
  }
function minusButtonClick(){
  setCount(count-1);
}
function zeroButtonClick(){
  setCount(0);
}
  

  return (
    <div>
    <Display count={count}/>
    <button onClick={plusButtonClick}>plus</button>
    <button onClick={minusButtonClick}>Minus</button>
    <button onClick={zeroButtonClick}>Zero</button>
    </div>
  )
}

export default App;




