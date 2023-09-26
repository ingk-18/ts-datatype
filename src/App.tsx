import React from "react";

function App() {
  // tsxでアロー関数を定義するときは注意！
  const echo = <T, >(value: T): T {
    return value;
  }
}

export default App;
