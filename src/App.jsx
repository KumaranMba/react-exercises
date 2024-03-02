import React from 'react';

function GrandChild({data}){
  console.log(`From Grand Child:${data}`);
  return(
    <div>
        <h5>Grand Child</h5>
        
    </div>
  )
}

function ChildComponent({data}){
  return(
    <div>
      <h5>Child Component</h5>
      <GrandChild data ={data}/>
    </div>
  )
}

function App() {
  const parentComponent = `Hello from parent`;
  return (
    <div>
      <h5>Parent  Component</h5>
      <ChildComponent data ={parentComponent}/>
    </div>
  )
}

export default App;

