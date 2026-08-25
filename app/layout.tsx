import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header>ここはヘッダーです。</header>
        {children}
        <footer>ここはフッターです。</footer>
      </body>
    </html>
  );
}
