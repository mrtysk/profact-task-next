"use client";
import { useState } from "react";

export default function Login() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  function handleLogin() {
    if (mail !== "" && pass !== "") {
      console.log(
        `入力したメールアドレス:${mail} | 入力したパスワード:${pass}`,
      );
    }
  }

  return (
    <div>
      <input
        onChange={(e) => setMail(e.target.value)}
        type="text"
        value={mail}
        placeholder="メールアドレス"
      />
      <input
        onChange={(e) => setPass(e.target.value)}
        type="password"
        value={pass}
        placeholder="パスワード"
      />
      <button onClick={handleLogin}>ログイン</button>
    </div>
  );
}
