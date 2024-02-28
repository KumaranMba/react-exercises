import React from 'react';

  function Hello({name}){
    return(
      <div>
        <p>Hello {name}</p>
      </div>
    )
  }

function App() {
  return (
    <div>
    <Hello name="Dinesh"/>
    </div>
  )
}

export default App;



