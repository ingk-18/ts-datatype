import React from "react";

function App() {
  // ジェネリクスを使用しない場合;
  function echoString(value: string): string {
    return value;
  }

  function echoNumber(value: number): number {
    return value;
  }

  // ジェネリクスを使用する場合;
  function echo<T>(value: T): T {
    return value;
  }

  // resultStringはstring型
  const resultString = echo<string>("Hello, TypeScript!");

  // 型推論によりresultNumberはnumber型になる
  const resultNumber = echo(42);
}

export default App;
