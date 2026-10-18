"use client";

const articleData = {
  id: "1",
  title: "ブログ記事1...",
  author: "山田 太郎",
  content: "ブログ内容...",
};

export default function ArticleDetail() {
  return (
    <div>
      <h1>{articleData.title}</h1>
      <h2>{articleData.author}</h2>
      <p>{articleData.content}</p>
    </div>
  );
}
