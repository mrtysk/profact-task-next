"use client";

import { useState } from "react";
import { ARTICLE_DATAS } from "@/constants/common";

export default function SearchPage() {
  let limit = 0;
  limit = ARTICLE_DATAS.length;

  const [keyword, setKeyword] = useState("");
  const handleSearch = () => {
    console.log(`検索したワードは${keyword}です。最大取得数は${limit}件です。`);
  };

  return (
    <div className="page-padding">
      <h1>検索ページ</h1>
      <input
        type="text"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="検索ワードを入力..."
        className="input-style"
      />
      <button onClick={handleSearch} className="button-style">
        検索ボタン
      </button>
    </div>
  );
}
