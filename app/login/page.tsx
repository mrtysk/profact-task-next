"use client";
import { useState } from "react";

export default function Login() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  function handleLogin() {
    console.log(`メールアドレス: ${mail} | パスワード: ${pass}`);
  }

  return (
    <div className="page-padding">
      <h1>ログインページ</h1>
      <input
        className="input-style"
        onChange={(event) => setMail(event.target.value)}
        type="text"
        value={mail}
        placeholder="メールアドレス"
      />
      <input
        className="input-style"
        onChange={(event) => setPass(event.target.value)}
        type="password"
        value={pass}
        placeholder="パスワード"
      />

      <button className="button-style" onClick={handleLogin}>
        ログイン
      </button>
      <div className="page-padding">
        <a href="./">Topに戻る</a>
      </div>
    </div>
  );
}
