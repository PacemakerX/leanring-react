import React, { useState } from "react";
import "../TextForm.css";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("button was clicked" + text); for clarity

    let newText = text.toUpperCase();
    props.showAlert("The Text is Converted to Upper  Case", "Success");
    setText(newText);
  };

  const handleDownClick = () => {
    // console.log("button was clicked" + text); for clarity

    let newText = text.toLowerCase();

    setText(newText);

    props.showAlert("The Text is Converted to lower Case", "Success");
  };

  const handle = () => {
    // console.log("button was clicked" + text); for clarity
    props.showAlert("The Text is cleared ", "Success");
    setText("");
  };

  const handleNumclick = () => {
    // console.log("button was clicked" + text); for clarity

    let newText;
    if (!(text.length > 10)) {
      newText = text;
    } else {
      newText = text[0] + (text.length - 2) + text[text.length - 1];
    }
    props.showAlert("The Text is Converted to Numerical Case", "Success");
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("on change "); for clarity

    setText(event.target.value);
  };

  const copyToClipboard = () => {
    // Create a textarea element to hold the text to copy
    const textarea = document.createElement("textarea");
    textarea.value = text;

    // Make sure the textarea is not visible
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";

    // Append the textarea to the body
    document.body.appendChild(textarea);

    // Select and copy the text inside the textarea
    textarea.select();
    document.execCommand("copy");

    // Clean up - remove the textarea from the DOM
    document.body.removeChild(textarea);

    props.showAlert("The Text  is copied to clipboard", "Success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
      // style={{
      //   backgroundColor: props.mode === "dark" ? "white" : "#414141",
      //   color: props.mode === "dark" ? "white" : "#414141",
      // }}
      >
        <h1>{props.heading} </h1>
        <div className={`form-group mb-3 ${props.mode}`}>
          <textarea
            placeholder="Enter your text"
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#414141" : "white",
              color: props.mode === "dark" ? "white" : "#414141",
            }}
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

        <button className="btn btn-primary mx-2 my-2" onClick={handle}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={copyToClipboard}>
          Copy text
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
        <p>{text === "" ? "Enter some  text, to see the preview" : text}</p>
      </div>
    </>
  );
}
