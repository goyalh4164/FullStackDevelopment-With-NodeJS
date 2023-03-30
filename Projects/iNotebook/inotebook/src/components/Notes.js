import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';
const Notes = () => {
    const context = useContext(noteContext);
  const {notes,setNotes} =context; //through destructuring we bought notes and setnotes
  return (
    <>
    <h1>Your Notes</h1>
    <div className="row my-3 text-center">
        {notes.map((note)=>{
            return <NoteItem ket={note.id} note={note}/>
        })}
    </div>
    </>
  )
}

export default Notes
