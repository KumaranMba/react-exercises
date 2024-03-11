import React from 'react';
import { Link,Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./assets/Home";
import Notes from "./assets/Notes";
import Users from "./assets/Users";


function App() {
  const padding = {
    padding:"10px"
  }

  
  return (
    <Router>
      <div>
        <Link to="/" style={padding}>Home</Link>
        <Link to="/Users" style={padding}>Users</Link>
        <Link to="/Notes" style={padding}>Notes</Link>
      </div>
      <Routes>
        <Route path ="/" element= {<Home/>} />
        <Route path ="/Users" element = {<Users/>} />
        <Route path ="/Notes" element ={<Notes/>} />
      </Routes>
      <div>
        <i>Note Application</i>
      </div>
    </Router>

    
  )
}

export default App;