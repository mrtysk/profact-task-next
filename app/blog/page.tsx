"use client";

const articleData = [
  {
    id: "1",
    title: "ブログ記事1...",
    author: "山田 太郎",
    content: "ブログ内容...",
  },
];

export default function ArticleDetail() {
  const displayContent = [];
  for (let i = 0; i < articleData.length; i++) {
    displayContent.push(
      <div key={articleData[i].id}>
        <h1>{articleData[i].title}</h1>
        <h2>{articleData[i].author}</h2>
        <p>{articleData[i].content}</p>
      </div>,
    );
  }
  return <>{displayContent}</>;
}
