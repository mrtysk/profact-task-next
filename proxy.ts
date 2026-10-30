import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  const LoggedIn = false;

  if (request.nextUrl.pathname === "/profile" && !LoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
