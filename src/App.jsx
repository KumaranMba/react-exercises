import React, { useState } from 'react';
import "./Styles/App.css";

function Button ({value,onClick}) {
  return(<button className='square' onClick={onClick}>{value}</button>);
}

function App() {
  const[square,setSquare] = useState(Array(9).fill(null));
  const[XIsNext,setXIsNext] = useState(true);

  const handleClick = (i) => {
    console.log(i,"clicked");

    
    const nextSquare = square.slice();
    if(square[i] || checkWinner(square) ) {
      return;
    }
    
    if(XIsNext){
      nextSquare[i] = "X";
    }else{
      nextSquare[i] = "O";
    }

    setSquare(nextSquare);
    setXIsNext(!XIsNext);
    
    console.log(square);
    
  }
  const checkWinner = (square) =>{
      const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ];

      for(let i=0; i<lines.length; i++){
          const [a, b, c] = lines[i];
        if(square[a] && square[a] == square[b] && square[a] == square[c]){
          return square[a];
        }
      }
      
  }

  let winner = checkWinner(square);
  let status;
  if(winner){
    status = "winner" + winner;
  }else{
    status = "Next player:" +(XIsNext? "X":"O");
  }


  return (
        
    <div>
        <p>{status}</p>
        <div className='row'>
        <Button value={square[0]} onClick ={()=>handleClick(0)}/>
        <Button value={square[1]} onClick ={()=>handleClick(1)}/>
        <Button value={square[2]} onClick ={()=>handleClick(2)}/>
        </div>
        <div className='row'>
        <Button value={square[3]} onClick ={()=>handleClick(3)}/>
        <Button value={square[4]} onClick ={()=>handleClick(4)}/>
        <Button value={square[5]} onClick ={()=>handleClick(5)}/>
        </div>
        <div className='row'>
        <Button value={square[6]} onClick ={()=>handleClick(6)}/>
        <Button value={square[7]} onClick ={()=>handleClick(7)}/>
        <Button value={square[8]} onClick ={()=>handleClick(8)}/>
        </div>
    </div>
  )
}

export default App;