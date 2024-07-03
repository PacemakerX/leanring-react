import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("button was clicked" + text); for clarity

    let newText = text.toUpperCase();

    setText(newText);
  };

  const handleDownClick = () => {
    // console.log("button was clicked" + text); for clarity

    let newText = copyText.toLowerCase();

    setText(newText);
  };

  const handle = () => {
    // console.log("button was clicked" + text); for clarity

    setText("");
  };

  const handleNumclick = () => {
    // console.log("button was clicked" + text); for clarity
    copyText = text;

    let newText;
    if (!(text.length > 10)) {
      newText = text;
    } else {
      newText = text[0] + (text.length - 2) + text[text.length - 1];
    }

    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("on change "); for clarity

    setText(event.target.value);
  };
  const [text, setText] = useState("");
  let copyText = text;

  return (
    <>
      <div>
        <h1>{props.heading} </h1>
        <div className="form-group mb-3">
          <textarea
            placeholder="Enter your text"
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleNumclick}>
          Convert to numercal form
        </button>

        <button className="btn btn-primary mx-2" onClick={handle}>
          Clear text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          Your text has {text.length} character Your text has{" "}
          {text.split(" ").length} words
        </p>
        <p>
          {" "}
          Your text can be read in {Math.ceil(
            0.008 * text.split(" ").length
          )}{" "}
          minutes
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
