import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <p>ここはヘッダーです。</p>
        </header>
        <main>{children}</main>
        <footer>
          <p>ここはフッターです。</p>
        </footer>
      </body>
    </html>
  );
}
