import React, { createContext, useState } from 'react';
import Children from './Components/Children';

const Messagecontext = createContext();

function App() {
    const [message,setMessage] = useState('Hello grandChild');
    const [coins,setCoins] = useState([1,2,3,4,5]);

  return (
    <div>
         <h1>Grand Parent passing data as a props</h1>
         <Messagecontext.Provider value={{message,coins}}>
            <Children/>
         </Messagecontext.Provider>
         
         <hr></hr>
    </div>
  )
}

export {App as default,Messagecontext};