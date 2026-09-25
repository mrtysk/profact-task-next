"use client";
import "./globals.css";

export default function Article() {
  const articleCard = [
    {
      id: "1",
      title: "ブログ記事1...",
      author: "山田 太郎",
      content: "ブログ内容...",
    },
    {
      id: "2",
      title: "ブログ記事2...",
      author: "山田 太郎",
      content: "ブログ内容...",
    },
    {
      id: "3",
      title: "ブログ記事3...",
      author: "山田 太郎",
      content: "ブログ内容...",
    },
    {
      id: "4",
      title: "ブログ記事4...",
      author: "山田 太郎",
      content: "ブログ内容...",
    },
    {
      id: "5",
      title: "ブログ記事5...",
      author: "山田 太郎",
      content: "ブログ内容...",
    },
    {
      id: "6",
      title: "ブログ記事6...",
      author: "山田 太郎",
      content: "ブログ内容...",
    },
    {
      id: "7",
      title: "ブログ記事7...",
      author: "山田 太郎",
      content: "ブログ内容...",
    },
    {
      id: "8",
      title: "ブログ記事8...",
      author: "山田 太郎",
      content: "ブログ内容...",
    },
    {
      id: "9",
      title: "ブログ記事9...",
      author: "山田 太郎",
      content: "ブログ内容...",
    },
    {
      id: "10",
      title: "ブログ記事10...",
      author: "山田 太郎",
      content: "ブログ内容...",
    },
    {
      id: "11",
      title: "ブログ記事11...",
      author: "山田 太郎",
      content: "ブログ内容...",
    },
    {
      id: "12",
      title: "ブログ記事12...",
      author: "山田 太郎",
      content: "ブログ内容...",
    },
  ];

  return (
    <div>
      <ul className="grid-item">
        {articleCard.map((article, index) => (
          <li className="grid-line" key={index}>
            {article.title}
            {article.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
