"use client";
import { SEARCH_RESULT_LIMIT } from "@/constants/common";

import { useState } from "react";

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    console.log(
      `検索したワードは${keyword}です。最大取得数は${SEARCH_RESULT_LIMIT}件です。`,
    );
  };

  return (
    <div className="page-padding">
      <h2>検索ページ</h2>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="検索ワードを入力..."
        className="input-style"
      />
      <button onClick={handleSearch} className="button-style">
        検索ボタン
      </button>
    </div>
  );
}
