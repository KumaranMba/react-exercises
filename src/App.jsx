import React from 'react';
import { useRef } from 'react';

function App() {
  const buttonRef = useRef(null);

  const changeColor = ()=>{

    const colors = ["green","blue","red","white","grey","pink","whilet","brown","black","purple"];

    const randomNumber = colors[Math.floor(Math.random()*10)];
    console.log(randomNumber);
    buttonRef.current.style.backgroundColor=randomNumber;
  }

  return (
    <div>
    <h1>Button color change using useRef</h1>
    <button ref = {buttonRef} onClick={changeColor}>click to  change button color</button>
    </div>
  )
}

export default App;