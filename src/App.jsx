import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Children from './Components/Children';

const ValueContext =  createContext();

function App() {

  const [info,setInfo] = useState('Hi this is the info from the parent');
  const[number,setNumber] = useState([,10,25,50,78,98]);

  return (
    <div>
        <h1>Parent component</h1>
        <p>passing data to child component using  context</p>
        <ValueContext.Provider value ={{info,number}}>
          <Children/>
        </ValueContext.Provider>
    </div>
  )
}

export {App as default,ValueContext};