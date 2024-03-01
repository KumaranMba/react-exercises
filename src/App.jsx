import React, { useState } from 'react';

function App() {
  // using useState and rendering the state condition.
  const [count,setCount]= useState(0);
 
  setTimeout(()=>{
    setCount(count+1);
  },1000);

  console.log("Render",count);

  return (
    <div>App</div>
  )
}

export default App;




