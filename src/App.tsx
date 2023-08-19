import React from "react";
import "./App.css";

function App() {
  // 先頭大文字のパスカルケースを使う
  type User = {
    name: string;
    age: number;
  };

  const user: User = {
    name: "Taro",
    age: 20,
  };

  type UserName = string;
  type UserAge = number;
  // リテラル型
  type UserGender = "man" | "woman" | "others";

  const userProfile: UserProfile = {
    name: "Ryo",
    age: 21,
    gender: "others",
  };

  return <div className="App"></div>;
}

export default App;
