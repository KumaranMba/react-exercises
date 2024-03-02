import React, { useState } from 'react';

import Display from './component/display';

function Button({handleClick,names}){
  return(
    
      <button onClick={handleClick}>{names}</button>
    
  );
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
    <Button handleClick={plusButtonClick} names="plus"/>
    <Button handleClick={minusButtonClick} names="minus"/>
    <Button handleClick={zeroButtonClick} names="reset"/>
    </div>
  )
}

export default App;




