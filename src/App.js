import "./App.css";
import { AiOutlineHeart } from "react-icons/ai";
import Generator from "./components/Generator";
import Tips from "./components/Tips";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h2>Password Generator Tool</h2>
          <h1>Generate a Secure Password</h1>
        </div>

        <Generator />
        <Tips />
        <div className="footer">
          <p>
            Made with{" "}
            <span className="icon">
              <AiOutlineHeart />
            </span>{" "}
            by{" "}
            <a
              href="https://f3hint0la.netlify.app"
              title="Fehintola's Portfolio"
            >
              Fehintola Akhumere
            </a>
          </p>
          <a href="https://f3hint0la.netlify.app">Have a look at the code</a>
        </div>
      </div>
    </div>
  );
}

export default App;
