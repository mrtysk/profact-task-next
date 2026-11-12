import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <header>
          <img src="/person.svg" width="50" height="50" />
          <a href="search/">検索</a>
          <a href="profile/">プロフィール</a>
          <button>
            <a href="login/">ログイン</a>
          </button>
        </header>
        <main>{children}</main>
        <footer>
          <Link href="./">Topに戻る</Link>
        </footer>
      </body>
    </html>
  );
}
