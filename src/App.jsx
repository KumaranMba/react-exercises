import React, { useRef, useState } from 'react';

function App(props) {
  // console.log(props);
  const[notes,setNotes] = useState(props.notes);
  
  // const {notes} = props;
  const newNoteContentRef = useRef(null);
  const[newNoteasinput,setNewNoteasInput] = useState('');
  const[newNoteimportant,setNewNoteimportant] = useState('true');
  const[showStatus,setShowStatus] = useState('all')

  const addNotes = (event) =>{
    event.preventDefault();

    let newNotes = {
      id:notes.length +1,
      content:newNoteasinput,
      important:newNoteimportant === "true", 
    }
    
    setNotes(notes.concat(newNotes));

    setNewNoteasInput(' ');
    setNewNoteimportant(' ');


    newNoteContentRef.current.focus();


  }

  const handleStatusChange = (e) =>{
    setShowStatus(e.target.value);
  }

  const filternotes = (notes,showStatus) =>{
      switch(showStatus){
        case "all":
          return notes;

        case "imp":
          return notes.filter(note=> note.important === true);
        
        case "notimp":
          return notes.filter(note=> note.important === false);
      }
  }

  const notesFiltered = filternotes(notes,showStatus)
  return (
    <div> 
          <h1>Notes</h1>

          <label>
            <input 
            type="radio"
            name="filter"
            value="all"
            onChange={handleStatusChange}
            checked= {showStatus === "all"}
             />All Notes
          </label>

          <label>
            <input 
            type="radio"
            name="filter"
            value="imp" 
            onChange={handleStatusChange}
            />Important Notes
          </label>

          <label>
            <input type='radio'
              name="filter"
              value="notimp"
              onChange={handleStatusChange}
            />Not-Important Notes
          </label>

        <ul> {
          notesFiltered.map((note)=>
        {
          return<li key= {note.id}>{note.content}</li>

          })}</ul>
          <hr></hr>
          <h1>Add a content</h1>
          <form onSubmit={addNotes}>
            <label
             htmlFor="newNote">
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
              <option value='true'>true</option>
              <option value='false'>false</option>
            </select><br></br>
            <br></br>
            <button type="submit">Add New Notes</button>
          </form>

    </div>
  )
}

export default App;