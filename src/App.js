// eslint-disable-next-line no-unused-vars
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import About from "./component/About";
import { useState } from "react";
import Alert from "./component/Alert";

// let name="sparsh";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#414141";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#414141";
      showAlert("Light Mode has been enabled", "Success");
    }
  };
  return (
    <>
      <div>
        <Navbar
          about=" myabout"
          title="TextUtil"
          mode={mode}
          toggleMode={togglemode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <TextForm
            heading="Enter the text to analyze "
            mode={mode}
            showAlert={showAlert}
          />
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
