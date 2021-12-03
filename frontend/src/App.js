import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      Hello Word
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm changing this code in <code>src/App.js</code> .....[ Kasa dia Phr
          Hhahaha ]
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Got to react official website
        </a>
      </header>
    </div>
  );
}

export default App;
