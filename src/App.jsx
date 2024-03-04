import React, { useState } from 'react';

function ChildComponent({receivingData}){

  let data ="Hi,This is from Child Component"
  

 const buttonClick = () =>{
  receivingData(data);
 }

  return(
    <div>
    <button onClick={buttonClick}>pressPropsToParent</button>
    </div>
  )
}

function App() {

  const [dataFromChild,setDataFromChild] = useState('');

    const ReceivingFromChild = (notes) =>{
      setDataFromChild(notes);
    }

  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is a parent Component</p>
      <p>`Receiving from the Child:{dataFromChild}`</p>
      <ChildComponent receivingData ={ReceivingFromChild}/>
    </div>
  )
}

export default App;