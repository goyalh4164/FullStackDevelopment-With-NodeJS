import NoteContext from "./noteContext";

const NoteState = (props)=>{
    //we are providing the initial state to the NoteState
    const state ={
        "name" : "Harry",
        "class" : "5b"
    }
    return (
        // where ever you want to use this context there you can wrap it with NoteState
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;