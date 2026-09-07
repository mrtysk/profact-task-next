import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <span></span>
          <Link
            href="/login"
            style={{
              padding: "4px 12px",
              backgroundColor: "#000",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            ログイン
          </Link>
        </header>

        {children}

        <footer style={{ textAlign: "center", padding: "20px" }}>
          <Link
            href="/profile"
            style={{ textDecoration: "underline", color: "blue" }}
          >
            プロフィールへ
          </Link>
        </footer>
      </body>
    </html>
  );
}
