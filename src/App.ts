import React from "react";

function App() {
  // ジェネリクス、型引数(type parameters)
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  };

  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  };

  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  };
  const strArray = repeatStr("hello", 3);
  console.log(strArray);
}

export default App;
