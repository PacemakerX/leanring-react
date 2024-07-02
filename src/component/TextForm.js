import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {

    // console.log("button was clicked" + text); for clarity

    let newText = text.toUpperCase();

    setText(newText);
  };
  const handleOnChange = (event) => 
    {
    
      // console.log("on change "); for clarity 

    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");

  return (
    <div>
      <h1>{props.heading} </h1>
      <div className="form-group mb-3">
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
