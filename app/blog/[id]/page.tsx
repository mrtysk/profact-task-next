"use client";
import { use } from "react";
import { ARTICLE_DATAS } from "@/constants/common";
import { Blog } from "@/types/blog";

export default function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const unwrapParams = use(params);
  const { id } = unwrapParams;

  let selectArticle: Blog | null = null;

  for (let i = 0; i < ARTICLE_DATAS.length; i++) {
    if (ARTICLE_DATAS[i].id === id) {
      selectArticle = ARTICLE_DATAS[i];
      break;
    }
  }

  if (selectArticle === null) {
    return <h1>NOT FOUND</h1>;
  }

  return (
    <div className="page-padding">
      <h1>{selectArticle.title}</h1>
      <h2>{selectArticle.author}</h2>
      <h3>{selectArticle.id}</h3>
      <p>{selectArticle.content}</p>
    </div>
  );
}
