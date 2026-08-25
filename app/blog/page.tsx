"use client";

export default function BlogDetail() {
  const article = {
    id: "1",
    title: "ブログ記事1...",
    author: "山田 太郎",
    content: "ブログ内容...",
  };

  return (
    <div className="page-padding">
      <h1>{article.title}</h1>
      <h2>{article.author}</h2>
      <p>{article.content}</p>
    </div>
  );
}
