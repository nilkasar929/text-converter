import React, {useState} from 'react'

export default function Form(props) {
    
      const [text, setText] = useState("Enter text here");
      setText("Enter new text");
  return (
    <>
    
    <h1>{props.heading}</h1>
   <div className='mb-3'>
    <textarea className='form-control' id="box" value={text}  rows="8"></textarea>
   </div>
  <button className="btn btn-primary">Convert</button>

</>
  )
}
