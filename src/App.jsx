import React, {useState } from 'react';
import Children from './Components/Children';


function App() {
    const [message,setMessage] = useState('Hello grandChild');
    const [coins,setCoins] = useState([1,2,3,4,5]);

    let boolean = (true+true) * (true+true) -1;
    console.log(boolean);

  return (
    <div>
         <h1>Grand Parent passing data as a props</h1>
         <Children message={message} coins={coins}/>
         <hr></hr>
    </div>
  )
}

export default App;