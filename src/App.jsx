import React, { useRef, useState } from 'react';

function App(props) {
  // console.log(props);
  const[notes,setNotes] = useState(props.notes);
  
  // const {notes} = props;
  const newNoteContentRef = useRef(null);
  const[newNoteasinput,setnewNoteasInput] = useState(' ');
  console.log(newNoteasinput);

  return (
    <div> 
          <h1>Notes</h1>
        <ul> {notes.map((note)=>
        {
          return<li key= {note.id}>{note.content}</li>

          })}</ul>
          <hr></hr>
          <h1>Add a content</h1>
          <form>
            <label htmlFor="newNote">
              Content: &nbsp;&nbsp;&nbsp;
            </label>
            <input id='newNote' 
            type='text' 
            placeholder='Enter a content' 
            ref={newNoteContentRef}
            value={newNoteasinput}
            onChange={e=> setnewNoteasInput(e.target.value)}
            />
          </form>

    </div>
  )
}

export default App;