import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  const [name, setName] = useState('');//usestate for storiing values from input
// variable, function name to update the value when changes
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="my-name">Shyam</h1>
        <span id="a">shyamng48@gmail.com</span>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <form>
      <h1>{name}</h1>
      <input type="text" placeholder="Enter your name" 
      value={name}
      onChange = {(e) => setName(e.target.value)}></input>
      <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

// render: showcasing the output
