import React, { Component } from "react";
import "./styles.css";

class Counter extends Component {
  render() {
    const { children, name, start } = this.props;

    return (
      <div>
        <div>Hello, {name}</div>
        {children}
        My counter, start: {start}
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>test</p>
      <Counter name="Claudia" start={0}>
        <span>Test: </span>
      </Counter>
      <br />
      <Counter name="Anamaria" start={3}>
        <span>Test: </span>
      </Counter>
    </div>
  );
}
