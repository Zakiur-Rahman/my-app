import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpclick = ()=>{
       // console.log("Uppercase is clicked"+text)
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowclick = ()=>{
        // console.log("Uppercase is clicked"+text)
         let newText=text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to Lowercase","success");

     }
     const handleClearclick = ()=>{
      
       setText(" ");
       props.showAlert("Cleared","success");

     }
     const handleFindchange = (event)=>{
      
      console.log(findWord(event.target.value));
    }
    const handleReplacechange = (event)=>{
      replaceWord(event.target.value);
    }
    const handleReplaceclick = ()=>{
      let nText = text.replaceAll(fWord,rWord);
      setText(nText);
      props.showAlert("Replaced!","success");

    }
    const handleOnchange = (event)=>{
        //console.log("Onchange is clicked")
        setText(event.target.value);
    }
    const handleCopy = ()=>{
      var ctext = document.getElementById("Textarea1");
      ctext.select();
      navigator.clipboard.writeText(ctext.value);
      props.showAlert("Text Copied","success");

  }
    const [text,setText] = useState("Enter text here");
    const [fWord,findWord] = useState("");
    const [rWord,replaceWord] = useState("");
    
    //Correct way to change the state:- setText("new text")
  return (
    <>
    <div className='container' style={{color : props.mode==='light'?'black':'white'}}>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} id="Textarea1" rows="5"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowclick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <div className="mb-3">
        <h4>Find</h4>
        <textarea className="form-control mx-2 my-3" value={fWord} onChange={handleFindchange} id="Textarea2" rows="1">Find</textarea>
      </div>
      <h4>Replace</h4>
      <div className="mb-3">
        <textarea className="form-control mx-2" value={rWord} onChange={handleReplacechange} id="Textarea3" rows="1">Replace with</textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleReplaceclick}>Replace</button>
    </div>
    <div className="conatiner my-3" style={{color : props.mode==='light'?'black':'white'}}>
        <h3>Text Summary</h3>
        <p>{text.split(" ").length>1?text.split(" ").length:0} words and {text.length} characters.</p>
        <p>{0.008 * text.length} minutes to read.</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
