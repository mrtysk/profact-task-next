// Proxy処理

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // 未ログイン状態と仮定
  const isUserLoggedIn = false;

  // アクセス先がプロフィールページであり、かつ未ログイン
  if (request.nextUrl.pathname === "/profile" && !isUserLoggedIn) {
    console.log("ログインしていません。ログインページへリダイレクトします。");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"],
};
