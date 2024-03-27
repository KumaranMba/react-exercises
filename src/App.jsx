import React, { useRef, useState } from 'react';

function App(props) {
  // console.log(props);
  const[notes,setNotes] = useState(props.notes);
  
  // const {notes} = props;
  const newNoteContentRef = useRef(null);
  const[newNoteasinput,setNewNoteasInput] = useState(' ');
  const[newNoteimportant,setNewNoteimportant] = useState(' ');
  

  const addNotes = (event) =>{
    event.preventDefault();
    let newNotes = {
      id:notes.length +1,
      content:newNoteasinput,
      important:newNoteimportant === "True", 
    }
    
    setNotes(notes.concat(newNotes));
    setNewNoteasInput(' ');
    setNewNoteimportant(' ');

    
    newNoteContentRef.current.focus();


  }

  return (
    <div> 
          <h1>Notes</h1>
        <ul> {notes.map((note)=>
        {
          return<li key= {note.id}>{note.content}</li>

          })}</ul>
          <hr></hr>
          <h1>Add a content</h1>
          <form onSubmit={addNotes}>
            <label htmlFor="newNote">
              Content: &nbsp;&nbsp;&nbsp;
              <input id='newNote' 
            type='text' 
            placeholder='Enter a content' 
            ref={newNoteContentRef}
            value={newNoteasinput}
            onChange={e=> setNewNoteasInput(e.target.value)}/>
            </label>
            <br></br>
            <br></br>
            <label>Is Important:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <select value={newNoteimportant} onChange={e => setNewNoteimportant(e.target.value)}>
              <option disabled >----Select----</option>
              <option>True</option>
              <option>False</option>
            </select><br></br>
            <br></br>
            <button type="submit">Add New Notes</button>
          </form>

    </div>
  )
}

export default App;