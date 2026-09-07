// ログインフォーム

"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(`メールアドレス: ${email} | パスワード: ${password}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            メールアドレス:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            パスワード:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">ログイン</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <Link href="/">Topに戻る</Link>
      </div>
    </div>
  );
}
