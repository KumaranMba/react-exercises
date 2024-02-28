import React, { Component } from 'react';

class Hello extends Component{
  render(){
    const {name} = this.props
    return(
      <div>
        <p>
          Hello {name}!
        </p>
      </div>
    )
    
  }
}


 class App extends Component {
  render() {
    return (
      <div>
          <Hello name ="Dinesh"/>
      </div>
    )
  }
}

export default App;



