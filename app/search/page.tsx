"use client";

import { ARTICLE_DATAS } from "@/constants/common";
import { useState } from "react";

export default function Search() {
  const [text, setText] = useState("");

  function handleInput(event) {
    setText(event.target.value);
  }

  function searchButton() {
    console.log(
      `検索したワードは${text}です。最大取得数は${ARTICLE_DATAS.length}件です。`,
    );
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
