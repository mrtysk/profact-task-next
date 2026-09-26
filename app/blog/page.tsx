"use client";

export default function ArticleDetail() {
  const displayArticleData = {
    id: "1",
    title: "ブログ記事1...",
    author: "山田 太郎",
    content: "ブログ内容...",
  };

  return (
    <div>
      <h1>{displayArticleData.title}</h1>
      <h2>{displayArticleData.author}</h2>
      <p>{displayArticleData.content}</p>
    </div>
  );
}
