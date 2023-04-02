import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} =context; //through destructuring we bought notes and setnotes

    const [note, setnote] = useState({title: "",description:"",tag:""})
    const handleClick = (e)=>{
      e.preventDefault(); //so that the page not reload again
      addNote(note.title,note.description,note.tag); //it will add the note
    }
    const onchange = (e)=>{
      setnote({...note,[e.target.name] : e.target.value}) //used spread operator
    }
  return (
    <div className="container m-3 p-3">
      <h1>Add a Note</h1>
      <form>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" placeholder="Enter Title" onChange={onchange}/>
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <input type="text" name="description" className="form-control" id="description" placeholder="Enter Description" onChange={onchange}/>
  </div>
  {/* <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>

</div>
  )
}

export default AddNote
