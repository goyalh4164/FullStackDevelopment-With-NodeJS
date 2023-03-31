import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
const Notes = () => {
  const context = useContext(noteContext);
  const {notes,addNote} =context; //through destructuring we bought notes and setnotes
  return (
    <>
    <AddNote/>
    <h1>Your Notes</h1>
    <div className="row my-3 text-center">
        {notes.map((note)=>{
            return <NoteItem key={note._id} note={note}/>
        })}
    </div>
    </>
  )
}

export default Notes
