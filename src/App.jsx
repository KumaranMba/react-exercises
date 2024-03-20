import React from 'react';
import { useRef } from 'react';

function App() {
  const bodyRef = useRef(document.body);

  const changeColor = ()=>{

    const colors = ["green","blue","red","white","grey","pink","whilet","brown","black","purple"];

    const randomNumber = colors[Math.floor(Math.random()*10)];
    console.log(randomNumber);
    bodyRef.current.style.backgroundColor=randomNumber;
  }

  return (
    <div>
    <h1>Button color change using useRef</h1>
    <button  onClick={changeColor}>click to  change button color</button>
    </div>
  )
}

export default App;