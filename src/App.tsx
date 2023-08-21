import React from "react";
import "./App.css";

function App() {
  // 先頭大文字のパスカルケースを使う
  type Name = string;
  const user: Name = "Hoge太郎";

  // 配列の型エイリアス
  type Numbers = number[];

  const numbers: Numbers = [1, 2, 3, 4, 5];

  // 数値のリテラル型
  type Age = 30; // 30という値のみを持つ型

  // 文字列のリテラル型
  type Gender = "male" | "female"; // "male" または "female" のみを持つ型

  // 真偽値のリテラル型
  type Status = true; // true という値のみを持つ型

  // 複数のリテラル型を組み合わせたユニオン型
  type Direction = "north" | "east" | "south" | "west"; // 指定された値のいずれかを持つ型

  // オブジェクトの型エイリアス
  type PersonData = {
    name: string;
    age: number;
    hobbies: string[];
  };

  const person: PersonData = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "hiking"],
  };
  return <div className="App"></div>;
}

export default App;
