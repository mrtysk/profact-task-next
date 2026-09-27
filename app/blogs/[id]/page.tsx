"use client";

import { ARTICLE_DATAS } from "@/constants/common";
import { use } from "react";

export default function BlogDetail({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const unwrapParams = use(params);
  const { id } = unwrapParams;

  return (
    <div>
      <h1>{ARTICLE_DATAS[id - 1].title}</h1>
      <h2>{ARTICLE_DATAS[id - 1].author}</h2>
      <h3>{id}</h3>
      <p>{ARTICLE_DATAS[id - 1].content}</p>
    </div>
  );
}
