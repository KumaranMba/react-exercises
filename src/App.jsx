import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);// to call the parent class constructor
    this.state={
      count:0
    }
  }

  increment =()=>{
    this.setState({
      count:this.state.count + 1
    })
  }

  decrement =()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  reset =()=>{
    this.setState({
      count:0
    })
  }

  render() {
    return (
      <div>
        <p>count:{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>  
      </div>
    )
  }
}

export default App




