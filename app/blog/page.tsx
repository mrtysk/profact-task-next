"use client";

export default function ArticleDetail() {
  const articleCard = [
    {
      id: "1",
      title: "ブログ記事1...",
      author: "山田 太郎",
      content: "ブログ内容...",
    },
  ];

  return (
    <div>
      <ul>
        {articleCard.map((article, index) => (
          <li key={index}>
            <h1>{article.title}</h1>
            <h2>{article.author}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
