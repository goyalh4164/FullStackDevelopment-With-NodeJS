import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props)=>{
    const notesInitial=[
        {
          "_id": "642431ea3407da5326d7ba6dc1",
          "user": "6420474d001b04311e274e8c",
          "title": "emotional",
          "description": "be with family",
          "tag": "personal by me mom",
          "date": "2023-03-29T12:41:14.018Z",
          "__v": 0
        },
        {
          "_id": "642432183407da5631d7ba6dc4",
          "user": "6420474d001b04311e274e8c",
          "title": "hard coding",
          "description": "notes for testing the data",
          "tag": "testing",
          "date": "2023-03-29T12:42:00.767Z",
          "__v": 0
        },
        {
          "_id": "642431ea3407da56d7ba6342dc1",
          "user": "6420474d001b04311e274e8c",
          "title": "emotional",
          "description": "be with family",
          "tag": "personal by me mom",
          "date": "2023-03-29T12:41:14.018Z",
          "__v": 0
        },
        {
          "_id": "642432183407da56d75342ba6dc4",
          "user": "6420474d001b04311e274e8c",
          "title": "hard coding",
          "description": "notes for testing the data",
          "tag": "testing",
          "date": "2023-03-29T12:42:00.767Z",
          "__v": 0
        },
        {
          "_id": "642431ea3407df2a56d7ba6dc1",
          "user": "6420474d001b04311e274e8c",
          "title": "emotional",
          "description": "be with family",
          "tag": "personal by me mom",
          "date": "2023-03-29T12:41:14.018Z",
          "__v": 0
        },
        {
          "_id": "642432183407da56d7ba6dferg3tk34c4",
          "user": "6420474d001b04311e274e8c",
          "title": "hard coding",
          "description": "notes for testing the data",
          "tag": "testing",
          "date": "2023-03-29T12:42:00.767Z",
          "__v": 0
        },
        {
          "_id": "642431ea3407da56d7g3tk34ba6dc1",
          "user": "6420474d001b04311e274e8c",
          "title": "emotional",
          "description": "be with family",
          "tag": "personal by me mom",
          "date": "2023-03-29T12:41:14.018Z",
          "__v": 0
        },
        {
          "_id": "642432183g3tk34407da56d7ba6dc4",
          "user": "6420474d001b04311e274e8c",
          "title": "hard coding",
          "description": "notes for testing the data",
          "tag": "testing",
          "date": "2023-03-29T12:42:00.767Z",
          "__v": 0
        },
        {
          "_id": "642431ea3407da56d7bg3tk34a6dngkj923c1",
          "user": "6420474d001b04311e274e8c",
          "title": "emotional",
          "description": "be with family",
          "tag": "personal by me mom",
          "date": "2023-03-29T12:41:14.018Z",
          "__v": 0
        },
        {
          "_id": "642432183407da56d7ba6ngkj923dc4",
          "user": "6420474d001b04311e274e8c",
          "title": "hard coding",
          "description": "notes for testing the data",
          "tag": "testing",
          "date": "2023-03-29T12:42:00.767Z",
          "__v": 0
        },
        {
          "_id": "642431ea3407ngkj923da56d7ba6dc1",
          "user": "6420474d001b04311e274e8c",
          "title": "emotional",
          "description": "be with family",
          "tag": "personal by me mom",
          "date": "2023-03-29T12:41:14.018Z",
          "__v": 0
        },
        {
          "_id": "642432183407da56d7ba6dngkj923c4",
          "user": "6420474d001b04311e274e8c",
          "title": "hard coding",
          "description": "notes for testing the data",
          "tag": "testing",
          "date": "2023-03-29T12:42:00.767Z",
          "__v": 0
        }
      ]
      const [notes,setNotes] = useState(notesInitial)

      //Add a Note
      const addNote = (title,description,tag)=>{
        const note={
          "_id": "642432183407da56d7ba6dngkfewj923c4",
          "user": "6420474d001b04311e274e8c",
          "title": "hard coding added",
          "description": "notes for testing the data added",
          "tag": "testing added",
          "date": "2023-03-29T12:42:00.767Z",
          "__v": 0
        };
        setNotes(notes.push(note)) //it will update
      }
      //Delete a Note
      const deleteNote = ()=>{

      }
      //Edit a Note
      const editNote = ()=>{

      }
    return ( 
        // exporting notes and setnotes
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;