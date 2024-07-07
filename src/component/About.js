export default function About(props) {
  return (
    <div            style={{
      backgroundColor: props.mode === "dark" ? "#414141" : "white",
      color: props.mode === "dark" ? "white" : "#414141",
    }}>
      <h1 className="my-5 ">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div style={{
              backgroundColor: props.mode === "dark" ? "#414141" : "white",
              color: props.mode === "dark" ? "white" : "#414141",
            }} className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
              backgroundColor: props.mode === "dark" ? "#414141" : "white",
              color: props.mode === "dark" ? "white" : "#414141",
            }}
            >
              Upper Case Conversion
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            <strong>Upper Case Conversion:</strong> Convert your text into upper case with just a click. Perfect for making your text stand out.
            </div>
          </div>
        </div>
        <div style={{
              backgroundColor: props.mode === "dark" ? "#414141" : "white",
              color: props.mode === "dark" ? "white" : "#414141",
            }} className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={{
              backgroundColor: props.mode === "dark" ? "#414141" : "white",
              color: props.mode === "dark" ? "white" : "#414141",
            }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Lower Case Conversion
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            <strong>Lower Case Conversion:</strong> Convert your text into lower case for a more subtle and formal look.
            </div>
          </div>
        </div>
        <div style={{
              backgroundColor: props.mode === "dark" ? "#414141" : "white",
              color: props.mode === "dark" ? "white" : "#414141",
            }} className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              style={{
              backgroundColor: props.mode === "dark" ? "#414141" : "white",
              color: props.mode === "dark" ? "white" : "#414141",
            }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Numerical Case Conversion
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            <strong>Numerical Form Conversion:</strong> Convert your text into numerical form, making it easy to handle various numeric data formats.
            </div>
          </div>
        </div>
      </div>
      {/* <button
        onClick={toggleStyle}
        type="button "
        className="btn btn-primary my-3"
      >
        {btnText}
      </button> */}
    </div>
  );
}
