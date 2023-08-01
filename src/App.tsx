import React from "react";
import "./App.css";

function App() {
  // 文字列
  let str: string = "Hello";
  str = "Bye";
  console.log(str);

  // 数値
  let num: number = 102;
  console.log(num);

  // 巨大な数値（nはBigIntを示すために付け加える必要がある）
  let bignum: bigint = 103n;
  console.log(bignum);

  // 真偽値
  let bool: boolean = true;
  console.log(bool);

  // null
  let nullValue: null = null;
  console.log(nullValue);

  // undefined
  let undefinedValue: undefined = undefined;
  console.log(undefinedValue);

  // リテラル型
  // 型の中でも特定の値を定義するもの、数値・文字列、真偽値

  // 文字列リテラル型
  type Fruit = "apple" | "orange" | "banana";
  let fruit: Fruit;

  fruit = "apple"; // OK
  fruit = "orange"; // OK
  // fruit = "grape"; // エラー：'grape'はFruit型に含まれていない値

  // 数値リテラル型
  type Age = 18 | 20 | 25;
  let age: Age;

  age = 18; // OK
  age = 20; // OK
  // age = 30; // エラー：30はAge型に含まれていない値

  // 真偽値リテラル型
  type Status = true | false;
  let status: Status;

  status = true; // OK
  status = false; // OK
  // status = 1; // エラー：1はStatus型に含まれていない値

  return <div className="App"></div>;
}

export default App;
