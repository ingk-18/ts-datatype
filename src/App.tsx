import React from "react";
import "./App.css";

function App() {
  // 基礎的な型定義
  // function add(a: number, b: number): number {
  //   return a + b;
  // }

  // const result = add(1, 2)

  // const result = add(1, 1)

  // 引数に違う型を入れた場合はエラーになる
  // function add(a: number, b: number): number {
  //   return a + b;
  // }

  // const result = add(1, 'hoge')

  // 戻り値が無いパターン
  function sayHello(name: string): void {
    console.log(`Hello, ${name}!`);
  }

  // タイプエイリアスを使用する
  type Math = (a: number, b: number) => number;

  const add: Math = (a, b) => {
    return a + b;
  };

  const result = add(1,4)

  console.log(result);
  return <div className="App"></div>;
}

export default App;
