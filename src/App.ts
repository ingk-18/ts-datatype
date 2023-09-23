import React from "react";

function App() {
  // ジェネリクスを使用しない場合
  class StringStorage {
    private data: string[] = [];

    addItem(item: string) {
      this.data.push(item);
    }

    getItem(index: number): string {
      return this.data[index];
    }
  }

  class NumberStorage {
    private data: number[] = [];

    addItem(item: number) {
      this.data.push(item);
    }

    getItem(index: number): number {
      return this.data[index];
    }
  }

  // ジェネリクスを使用する場合
  class Storage<T> {
    private data: T[] = [];

    addItem(item: T) {
      this.data.push(item);
    }

    getItem(index: number): T {
      return this.data[index];
    }
  }

  const stringStorage = new Storage<string>();
  stringStorage.addItem("Hello");
  const stringValue = stringStorage.getItem(0);

  const numberStorage = new Storage<number>();
  numberStorage.addItem(42);
  const numberValue = numberStorage.getItem(0);
}

export default App;
