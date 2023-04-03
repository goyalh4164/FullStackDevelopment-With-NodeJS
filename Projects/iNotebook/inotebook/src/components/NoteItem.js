import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
const NoteItem = (props) => {
  const context=useContext(noteContext);
  const {deleteNote}=context;
    const {note}=props;
  return (
  <div className="col-md-3">
      {/* {note.title}
      {note.description} */}
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-sharp fa-solid fa-trash mx-2" onClick={()=>{
                          deleteNote(note._id);
            }}></i>
            <i className="fa-regular fa-pen-to-square mx-2"></i>
            </div>
            <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos porro aspernatur blanditiis dicta. At iste sunt inventore repellat laudantium adipisci fugiat incidunt molestias provident! Asperiores nihil ducimus laborum dicta.</p>
            </div>
        </div>
    </div>
    
  )
}

export default NoteItem
