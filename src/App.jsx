// import React from 'react'; //not necessay, from react 17.



// It is a functional component or stateless component
// It is just a javascript function
// It  needs to return JSX (Javascript XML)=> HTML and javascript embeded. 

// function App() {
//   return (
//     <div>
//         Hello world
//     </div>
//   )
// }

// export default App;

// stateless component
//class components

import { Component } from "react";

class App extends Component{
  render(){
    return(
      <div>
        <p>Hello World</p>
      </div>
    )
  }
}

export default App;


