// 詳細ページの表示
// ゴール：/lists/● を開くと、idが●のリストの情報・ToDo一覧が表示されている

// ・ToDo一覧を表示する
//     ・ul を置く
//     ・list.todos の要素を繰り返し、li を並べる【繰り返し】
//     ・各 li に、todoText を表示する
//     ・各 li に、(後回し)③の部品へ expiresAt を渡して表示【既存処理の利用】
//     ・各 li に、チェックボックスを置き、checked に completed を設定する【既存処理の利用】(押したときの処理は⑦)
//     ・各 li に、削除ボタンを置く(押したときの処理は⑦)

// ・タイトル・概要・作成日を表示する
//   ・h1 に title を表示する
//   ・p に description を表示する
//   ・createdAt を表示する【既存処理の利用】

// ・ストアから該当リストを取り出す
//   ・useTodoListStore のtodolists を使う準備
//   ・todolistsから id が URLの id と一致するものを探す
//   ・変数 list に入れる【変数】【既存処理の利用】

// ・URLの●を取り出す
//   ・文字列として変数 id に入れる

// ・ページを用意する
//   ・app/lists/[id]/page.tsx を用意
// スタート

// ToDo追加機能
// ゴール：テキストと任意の期限を入れ、「追加」ボタンでtodos に新しいToDoが増えている
// ・追加処理 handleAdd を作る
//   ・ifで条件分岐：テキストの前後の空白を除いたものが空【条件分岐】
//     ・何もせず終了する(return)
//   ・期限を決める
//     ・期限を入れる変数 expiresAt をいったん宣言【変数】
//     ・ifで条件分岐：日付の文字列が空でない【条件分岐】
//       ・expiresAt に、new Date(日付の文字列) を入れる【変数】
//   ・ストアの addTodo を、
// 　　- listId
// 　　- Todo型のデータ→ { todoText: 空白を除いたテキスト, completed: false, expiresAt } で呼ぶ【既存処理の利用】
//   ・テキスト用stateと日付用stateを '' に戻す【変数】

// ・追加処理をつなぐ
//   ・新しい関数 handleAdd を作成する
//   ・ボタンの onClick で handleAdd を呼ぶ【既存処理の利用】
//   ・テキスト欄の onKeyDown で、ifで条件分岐：e.key が "Enter" のとき【条件分岐】
//     ・handleAdd を呼ぶ【既存処理の利用】

// ・入力値を受け取れるようにする
//   ・テキスト用useStateを 用意する【変数】
//   ・日付用useStateを 用意する【変数】
//   ・テキスト欄の value にテキストstateを、onChange にその更新を設定する【既存処理の利用】
//   ・日付欄の value に日付stateを、onChange にその更新を設定する【既存処理の利用】

// ・追加の道具を取り出す
//   ・useTodoListStore に、addTodo を使う準備【既存処理の利用】

// ・入力欄とボタンを置く
//   ・テキスト欄を置く
//   ・日付欄を置く
//   ・「追加」ボタンを置く
// スタート

// 完了切替・削除
// ゴール：チェックで完了/未完了が切り替わり、削除ボタンでそのToDoが消えている
// ・見た目を切り替える
//   ・li の className を、ifでtodo.completed が true【条件分岐】
//     ・打ち消し線とグレー背景のクラスにする
//   ・それ以外
//     ・通常のクラスにする

// ・削除の設定
//   ・useTodoListStore に、deleteTodo を使う準備【既存処理の利用】
//   ・削除ボタンの onClick で、deleteTodo を呼ぶ【既存処理の利用】

// ・チェックの設定
//   ・useTodoListStore に、updateTodo を使う準備【既存処理の利用】
//   ・チェックボックスの onChange で、updateTodo を呼ぶ(使う)【既存処理の利用】
// スタート

// -------------------------------------------

"use client";
import { useTodoListStore } from "@/store/useTodoListStore";
import { use, useState } from "react";
import type { Todo } from "@/types/todo";

export default function Todo({ params }: { params: Promise<{ id: string }> }) {
  const unwrapParams = use(params);
  const { id } = unwrapParams;

  const { todolists } = useTodoListStore();

  const addTodo = useTodoListStore((state) => state.addTodo);
  const updateTodo = useTodoListStore((state) => state.updateTodo);
  const deleteTodo = useTodoListStore((state) => state.deleteTodo);

  const [todoText, setTodoText] = useState("");
  const [datetime, setDatetime] = useState("");

  function handleAdd() {
    if (todoText === "") return;

    let expiresAt = undefined;
    if (datetime !== "") {
      expiresAt = new Date(datetime);
    }

    addTodo(listId, {
      id: id,
      todoText: todoText,
      completed: false,
      expiresAt: expiresAt,
    });

    setTodoText("");
    setDatetime("");
  }

  // 一致するIDのデータ選別
  let list = null;
  for (let i = 0; i < todolists.length; i++) {
    if (todolists[i].id === id) {
      list = todolists[i];
      break;
    }
  }

  // データがないときのガード
  if (list === null) {
    return <h1>NOT FOUND</h1>;
  }

  // 一致するIDのデータ表示
  return (
    <>
      {/* リストの情報 */}
      <div>
        <h1>{list.title}</h1>
        <p>{list.description}</p>
        <p>
          作成日：
          {`${list.createdAt.getFullYear()}年${list.createdAt.getMonth() + 1}月${list.createdAt.getDate()}日`}
        </p>
      </div>

      {/* 以下がTodo追加機能の構成要素 */}
      <div>
        <textarea
          onChange={(event) => setTodoText(event.target.value)}
          value={todoText}
          maxLength={100}
          placeholder={"追加するTodoを入力"}
        ></textarea>

        <input
          type="datetime-local"
          onChange={(event) => setDatetime(event.target.value)}
          value={datetime}
        />

        <button
          onClick={handleAdd}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAdd();
            }
          }}
        >
          追加
        </button>
      </div>

      {/* 以下が追加ボタンによるTodo要素 */}
      <div>
        <h2>Todo一覧</h2>
        <ul>
          {list.todos.map((todo) => (
            <li key={todo.id}>
              <input
                className={todo.completed ? "completed" : ""}
                type="checkbox"
                checked={todo.completed}
                onChange={function () {
                  updateTodo();
                }}
              />
              <span>{todo.todoText}</span>
              <span>期限: {new Date(todo.expiresAt)}</span>
              <button
                onClick={function () {
                  deleteTodo(id, todo.id);
                }}
              >
                <img src="/trash.svg" width="10" height="10" alt="削除" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
