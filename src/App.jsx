import React from 'react';
import { useReducer } from 'react';
 
// create the initial state

const initialState = {
  value:" ",
}

//define reducer

const inputChange = (state,action)=>{
  switch(action.type){
      case"change":
        return{value:action.payload};
        
      default:
        return state;
  }
}



function App() {

  const [state,discharge] = useReducer(inputChange,initialState);

  return (
    <div>
         <input type='text' placeholder='type any text' onChange={(e)=>discharge({type:"change",payload:e.target.value})}/>
         <p>value:{state.value}</p>
    </div>
  )
}

export default App;