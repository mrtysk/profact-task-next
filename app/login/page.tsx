"use client";

import { useState } from "react";

export default function Login() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  function handleInputMail(event) {
    setMail(event.target.value);
  }

  function handleInputPass(event) {
    setPass(event.target.value);
  }

  function loginButton() {
    console.log(`メールアドレス: ${mail} | パスワード: ${pass}`);
  }

  return (
    <>
      <div>
        <label>メールアドレス: </label>
        <input
          type="text"
          onChange={handleInputMail}
          placeholder="メールアドレスを入力"
        />
        <br></br>
        <label>パスワード: </label>
        <input
          type="password"
          onChange={handleInputPass}
          placeholder="パスワードを入力"
        />
        <button onClick={loginButton}>ログイン</button>
      </div>
      <div>
        <a href="/.">Topに戻る</a>
      </div>
    </>
  );
}
