"use client";
import { useState } from "react";

export default function Search() {
  const [keyword, setKeyword] = useState("");

  function handleInput(event) {
    setKeyword(event.target.value);
  }

  function clearInput() {
    setKeyword("");
  }

  function handleSearch() {
    console.log(`検索したワードは${keyword}です`);
    clearInput();
  }
  return (
    <div>
      <input
        onChange={handleInput}
        type="text"
        value={keyword}
        placeholder="検索ワードを入力"
      ></input>
      <button onClick={handleSearch}>検索</button>
    </div>
  );
}
