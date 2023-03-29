import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props)=>{
    const notesInitial=[
        {
          "_id": "642431ea3407da56d7ba6dc1",
          "user": "6420474d001b04311e274e8c",
          "title": "emotional",
          "description": "be with family",
          "tag": "personal by me mom",
          "date": "2023-03-29T12:41:14.018Z",
          "__v": 0
        },
        {
          "_id": "642432183407da56d7ba6dc4",
          "user": "6420474d001b04311e274e8c",
          "title": "hard coding",
          "description": "notes for testing the data",
          "tag": "testing",
          "date": "2023-03-29T12:42:00.767Z",
          "__v": 0
        }
      ]
      const [notes,setNotes] = useState(notesInitial)
    return ( 
        // exporting notes and setnotes
        <NoteContext.Provider value={{notes,setNotes}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;