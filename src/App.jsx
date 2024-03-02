import React, { useEffect, useState } from 'react';

function App() {

  const[count,setCount] = useState(0);

  useEffect(()=>{
    document.title =`count:${count}`
  },[count])

  const Increase = () =>{
    setCount(count+1);
  }

  
  return (
    <div>
    <p>Count:{count}</p>
      <button onClick={Increase}>IncreaseCount</button>
    </div>
  )
}

export default App;

