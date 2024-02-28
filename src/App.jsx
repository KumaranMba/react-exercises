import React, { Component } from 'react';

class Hello extends Component{
  render(){
    return(
      <div>
        <p>
          Hello World!
        </p>
      </div>
    )
    
  }
}


 class App extends Component {
  render() {
    return (
      <div>
          <Hello/>
      </div>
    )
  }
}

export default App;



