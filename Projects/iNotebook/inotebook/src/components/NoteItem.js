import React from 'react'

const NoteItem = (props) => {
    const {note}=props;
  return (
  <div className="col-md-3">
      {/* {note.title}
      {note.description} */}
      <div className="card my-3">
        <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos porro aspernatur blanditiis dicta. At iste sunt inventore repellat laudantium adipisci fugiat incidunt molestias provident! Asperiores nihil ducimus laborum dicta.</p>
            </div>
        </div>
    </div>
    
  )
}

export default NoteItem
