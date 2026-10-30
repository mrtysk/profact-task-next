import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header className="header-style">
          <button>
            <a href="/login">ログイン</a>
          </button>
        </header>
        <main>{children}</main>
        <footer className="footer-style">
          <a href="/profile">プロフィールへ</a>
        </footer>
      </body>
    </html>
  );
}
