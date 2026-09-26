import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="headerRight">
          <button>
            <a href="login/.">ログインへ</a>
          </button>
        </header>
        <main>{children}</main>
        <footer className="footerCenter">
          <a href="profile/.">プロフィールへ</a>
        </footer>
      </body>
    </html>
  );
}
