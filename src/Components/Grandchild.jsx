import React, { useContext } from 'react';
import { ValueContext } from '../App';

function Grandchild() {
  const {info,number} = useContext(ValueContext);
  const sum = () =>{  
         return number.reduce((prev,curr)=>(prev+curr),0);
  }
  

  return (
    <div>
        <h1>Grandchild</h1>
        <p>Reciving from the Parent:{info}</p>
        <p>Total Coins:{sum()}</p>
    </div>
  )
}

export default Grandchild;