// eslint-disable-next-line no-unused-vars
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import About from "./component/About";

// let name="sparsh";
function App() {
  return (
    <>
      <div>
        <Navbar about=" myabout" title="TextUtil" />
        {/* we are passing props  , well this is the method to use comments inside the tags*/}

        {/* <Navbar/>  */}
        <div className="container my-3">
          <TextForm heading="Enter the text to analyze " />
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
