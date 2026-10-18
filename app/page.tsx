"use client";
import "./globals.css";

const articleDatas = [
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

export default function ArticleCards() {
  const pickArticleDatas = [];
  for (let i = 0; i < articleDatas.length; i++) {
    pickArticleDatas.push({
      id: articleDatas[i].id,
      title: articleDatas[i].title,
      author: articleDatas[i].author,
    });
  }

  const elArticleDatas = [];
  for (let a = 0; a < pickArticleDatas.length; a++) {
    elArticleDatas.push(
      <li className="cardStyle" key={pickArticleDatas[a].id}>
        <div> {pickArticleDatas[a].title}</div>
        <div>{pickArticleDatas[a].author}</div>
      </li>,
    );
  }

  return (
    <>
      <div>
        <ul className="gridLayout">{elArticleDatas}</ul>
      </div>
    </>
  );
}
