import React, { useState } from 'react';
import Home from "./assets/Home";
import Notes from "./assets/Notes";
import Users from "./assets/Users";

function App() {

  const [page,setPage] = useState("home");

  const padding = {
    padding:"10px"
  }

  const content = ()=>{
      if(page ==="home"){
        return<Home/>
      }else if(page ==="notes"){
        return<Notes/>
      }else if(page ==="users"){
        return<Users/>
      }
  }

  const topage =(page)=> (event) =>{
    event.preventDefault();
        setPage(page);
  }

  return (
    <div>
    <div>
    <a href='' style={padding} onClick={topage('home')}>Home</a>
    <a href='' style={padding} onClick={topage('notes')}>Notes</a>
    <a href='' style={padding} onClick={topage('users')}>Users</a>
    {content()}
    </div>
    </div>
  )
}

export default App;