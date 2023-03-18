import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked")
        let newText=text;
        newText=newText.toUpperCase();
        setText(newText)
    }
    const handleLoClick =()=>{
        // console.log("Uppercase was clicked")
        let newText=text;
        newText=newText.toLowerCase();
        setText(newText)
    }
    const handleClearClick =()=>{
        // console.log("Uppercase was clicked")
        let newText=text;
        newText='';
        setText(newText)
    }

    const handleCopy = ()=>{
      var text=document.getElementById('myBox');
      // text.select();  //to select the text
      navigator.clipboard.writeText(text.value);
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    
    const [text,setText] = useState('');
    // text="new text"; //wrong way to change the state of text
    // setText("new text") //correct way

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>        
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
    </div>
    <div className="container my-3">
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words and {text.length}</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
