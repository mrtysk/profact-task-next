"use client";
import "./globals.css";
import { ARTICLE_DATAS } from "@/constants/common";

export default function Article() {
  return (
    <div>
      <ul className="grid-item">
        {ARTICLE_DATAS.map((article, index) => (
          <li className="grid-line" key={index}>
            {article.title}
            {article.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
