// トップページ

"use client";

import { ARTICLES } from "@/constants/common";

export default function BlogDetail() {
  return (
    <div className="grid-container">
      {ARTICLES.map((article) => (
        <div key={article.id} className="article-card">
          <div>
            <h1>{article.title}</h1>
            <h2>{article.author}</h2>
            <h3>ID: {article.id}</h3>
            <p>{article.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
