import React from 'react';

function Grandchild({message,coins}) {
    const sum = () =>{
     return coins.reduce((prev,curr)=>(prev+curr),0)
    }
  return (
    <div>
      <h1> Grandchild</h1>
      <p>Receiving message from the Grand Parent: {message} </p>
      <p>Receiving cumulative:{sum()}</p>     
    </div>
  )
}

export default Grandchild;