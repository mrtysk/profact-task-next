"use client";

import { ARTICLES } from "@/constants/common";
import { use } from "react";

export default function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const unwrappedParams = use(params);

  const article = ARTICLES.find((item) => item.id === unwrappedParams.id);

  if (!article) {
    return <div>記事が見つかりません。</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <h3>{article.author}</h3>
      <p>ID: {unwrappedParams.id}</p>
      <p>{article.content}</p>
    </div>
  );
}
