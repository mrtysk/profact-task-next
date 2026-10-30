"use client";

import { ARTICLE_DATAS } from "@/constants/common";

export default function Home() {
  return (
    <div>
      <h1>トップページ</h1>
      <div className="grid-container">
        {ARTICLE_DATAS.map((article) => (
          <div key={article.id} className="article-card">
            <h2>{article.title}</h2>
            <p>作者: {article.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
