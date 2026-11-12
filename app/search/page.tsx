"use client";
import { useState } from "react";
import { useTodoListStore } from "@/store/useTodoListStore";
// import { TodoList } from "@/types/todo";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [searchData, setSearchData] = useState([]);
  const { todolists } = useTodoListStore();

  function handleSearch() {
    const matchData = [];
    for (let i = 0; i < todolists.length; i++) {
      if (todolists[i].title.startsWith(keyword)) {
        matchData.push(todolists[i]);
      }
    }
    setSearchData(matchData);
  }

  return (
    <div>
      <input
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        value={keyword}
        placeholder="検索"
      />
      <button onClick={handleSearch}>検索</button>

      <p>検索結果</p>
      {searchData.map((searchResult) => (
        <p key={searchResult.id}>
          <a href={`todo/${searchResult.id}`}>{searchResult.title}</a>
        </p>
      ))}
    </div>
  );
}
