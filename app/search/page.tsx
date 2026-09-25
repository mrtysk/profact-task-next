"use client";
import { useState } from "react";

export default function Search() {
  const [text, setText] = useState("");

  function handleInput(event) {
    setText(event.target.value);
  }

  function searchButton() {
    console.log(`検索したワードは${text}です`);
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
        placeholder="検索ワードを入力"
      />
      <button onClick={searchButton}>検索</button>
    </div>
  );
}
