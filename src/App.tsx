import React from "react";
import "./App.css";

function App() {
  function add(a: number, b: number): number {
    return a + b;
  }

  const result = add(1, 2)

  return <div className="App"></div>;
}

export default App;
