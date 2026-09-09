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
      <h1>{article.title}</h1>
      <h2>{article.author}</h2>
      <h3>ID: {unwrappedParams.id}</h3>
      <p>{article.content}</p>
    </div>
  );
}
