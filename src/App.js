import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InputChild from "./ChildComponent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "I am Parrent"
    };
  }
  render() {
    return (
      <div className="App">
        <h1>open console to check clearly</h1>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={e => this.setState({ inputValue: e.target.value })}
        />
        <InputChild />
      </div>
    );
  }
}

export default App;
