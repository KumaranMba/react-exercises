import React from 'react';
import { Link,Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './assets/Components/Home';
import Notes from './assets/Components/notes';
import About from './assets/Components/About';
import Note from './assets/Components/Note';

function App({notes}) {
  const styles ={
    padding:10,
    margin:5
  }
  return (
    <Router>
      <div>
        <Link to="/" style={styles}>home</Link>
        <Link to={"/notes"} style={styles}>notes</Link>
        <Link to={"/about"} style={styles}>about</Link>
      </div>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/notes"} element={<Notes notes={notes}/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/notes/:noteid"} element={<Note notes={notes}/>}/>

      </Routes>
    </Router>
  )
}

export default App;