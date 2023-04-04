import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props)=>{
  const host="http://localhost:5000"
    const notesInitial=[]
      const [notes,setNotes] = useState(notesInitial)
      //get all notes
      const getNotes = async ()=>{
        //api working
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token" :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMDQwZTU1MDQ5ZTViYjA3YjNiYTAxIn0sImlhdCI6MTY3OTgzNTM5Mn0.EuoirGQJ9QiW2DAXbhGOHHFj7QyOU7sN9BjWvq--TUc"
          },
        });
        const json=await response.json();
        console.log(json);
        setNotes(json);
      }
      //Add a Note
      const addNote = async (title,description,tag)=>{
        //api working
        const response = await fetch(`${host}/api/notes/addnote`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token" :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMDQwZTU1MDQ5ZTViYjA3YjNiYTAxIn0sImlhdCI6MTY3OTgzNTM5Mn0.EuoirGQJ9QiW2DAXbhGOHHFj7QyOU7sN9BjWvq--TUc"
          },
          body: JSON.stringify({title, description, tag})
        });
        const note=await response.json();
        console.log(note)
        setNotes(notes.concat(note)) //it will update the upcoming note
      }
      //Delete a Note
      const deleteNote = async(id)=>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token" :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMDQwZTU1MDQ5ZTViYjA3YjNiYTAxIn0sImlhdCI6MTY3OTgzNTM5Mn0.EuoirGQJ9QiW2DAXbhGOHHFj7QyOU7sN9BjWvq--TUc"
          },
        });
        const json=response.json();
        console.log(json)
        //deleting a note at client side
        console.log("deleting the note with the given id: "+id)
        let newNotes=notes.filter((note)=>{return note._id!==id}) //it will add all the notes except that id
        setNotes(newNotes); //setting the note tot he new note
      }
      //Edit a Note
      const editNote = async (id,title,description,tag)=>{
        //api working
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token" :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMDQwZTU1MDQ5ZTViYjA3YjNiYTAxIn0sImlhdCI6MTY3OTgzNTM5Mn0.EuoirGQJ9QiW2DAXbhGOHHFj7QyOU7sN9BjWvq--TUc"
          },
          body: JSON.stringify(id,title,description,tag),
        });
        const json=response.json();
        //client side login
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element.id===id){
            element.title=title;
            element.tag=tag;
            element.description=description;
          }
        }
      }
    return ( 
        // exporting notes and setnotes
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;