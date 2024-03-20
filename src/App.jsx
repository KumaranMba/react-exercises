import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

// useRef
// Its a react's build in feature.
// To create and manage reference of DOM elements.



function App() {
  const inputRef = useRef(null); // creating a reference object.

  const handleinput =() =>{
    // console.log(inputRef.current.value);
    // inputRef.current.value ="dinesh";
    // inputRef.current.focus();
  }

  // Another  way to use the function call at the time of loading
  useEffect(()=>{
    handleinput();
  },[]);

  return (
    <div>
     <input type="text" placeholder='type a message' ref={inputRef} />
     <button>Focus input</button>


    </div>
  )
}

export default App;