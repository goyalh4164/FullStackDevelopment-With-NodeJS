import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked")
        let newText=text;
        newText=newText.toUpperCase();
        setText(newText)
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    
    const [text,setText] = useState('Enter text here');
    // text="new text"; //wrong way to change the state of text
    // setText("new text") //correct way

  return (
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>        
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
