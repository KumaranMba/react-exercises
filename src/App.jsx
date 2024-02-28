import { Component } from "react";

class App extends Component{
  // class component lifecycle

  //It called after the component is render 
  componentDidMount(){
    console.log("App mounted");
  }

  // It will called after the  props or state changes
  componentDidUpdate(){
    console.log("App is rerender/update");
  }
  
  componentWillUnmount(){
    // it will  call when a component is removed from DOM
    // it will called before the component is removed from the Dom
    // it will be detach the events  and clean up the data
    // kindly refer the sir git hub 
  }

  render(){
    return(
      <div>
        <p>Hello World!</p>
      </div>
    )
  }
}

export default App;


