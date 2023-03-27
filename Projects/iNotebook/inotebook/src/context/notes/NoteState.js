import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props)=>{
    //we are providing the initial state to the NoteState
    const s1 ={
        "name" : "Harry",
        "class" : "5b"
    }
    const [state, setstate] = useState(s1);
    const update = ()=>{
        setTimeout(() => {
            setstate({
                "name" : "Larry",
                "class" : "10b"
            })
        }, 1000);
    }
    return (
        // where ever you want to use this context there you can wrap it with NoteState
        // we are exporting the state and update
        <NoteContext.Provider value={{state,update}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;