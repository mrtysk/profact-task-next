"use client";
import { useTodoListStore } from "@/store/useTodoListStore";
import { use, useState } from "react";

export default function Todo({ params }: { params: Promise<{ id: string }> }) {
  const unwrapParams = use(params);
  const { id } = unwrapParams;

  const { todolists } = useTodoListStore();

  const deleteTodo = useTodoListStore((state) => state.deleteTodoList);

  const addTodo = useTodoListStore((state) => state.addTodoList);

  const [todoText, setTodoText] = useState("");
  const [datetime, setDatetime] = useState("");

  // -------------------------------------------

  function handleEventAdd() {
    addTodo(todoText);
    return (
      // 以下が追加操作によってレンダリングしたいTodoの構成要素
      <div>
        <input onClick={handleClickCheckbox} type="checkbox" />
        <li>リスト</li>
        <button onClick={handleClickDelete}>
          <img src="/trash.svg" width="10" height="10" />
        </button>
      </div>
    );
  }

  function handleClickCheckbox() {
    console.log("C");
  }

  const handleClickDelete = (id: string) => () => {
    deleteTodo(id);
  };

  // -------------------------------------------
  // 一致するIDのデータ選別
  let selectTodo = null;
  for (let i = 0; i < todolists.length; i++) {
    if (todolists[i].id === id) {
      selectTodo = todolists[i];
      break;
    }
  }
  // データがないときのガード
  if (selectTodo === null) {
    return <h1>NOT FOUND</h1>;
  }

  // 一致するIDのデータ表示
  return (
    <>
      {/* ページの情報 */}
      <div>
        <h1>Todo一覧（詳細ページ）</h1>
        <p>現在のTodoリストのIDは {id} です。</p>
      </div>

      {/* リストの情報 */}
      <div>
        <p>{selectTodo.title}</p>
        <p>{selectTodo.description}</p>
        <p>
          作成日：
          {`${selectTodo.createdAt.getFullYear()}年${selectTodo.createdAt.getMonth() + 1}月${selectTodo.createdAt.getDate()}日`}
        </p>
      </div>

      {/* 以下がTodo追加機能の構成要素 */}
      <div>
        <textarea
          onChange={(e) => setTodoText(event.target.value)}
          value={todoText}
          maxLength="100"
          placeholder="追加するTodoを入力"
        ></textarea>

        <input
          type="datetime-local"
          onChange={(event) => setDatetime(event.target.value)}
          value={datetime}
        />

        <button
          onClick={handleEventAdd}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleEventAdd();
            }
          }}
        >
          追加
        </button>
      </div>
    </>
  );
}

// -------------------------------------------
