import { create } from "zustand";
import type { TodoList } from "@/types/todo";

interface TodoListStore {
  todolists: TodoList[];

  addTodoList: (todoList: TodoList) => void;
  updateTodoList: (id: string, data: Partial<TodoList>) => void;
  deleteTodoList: (id: string) => void;
}

export const useTodoListStore = create<TodoListStore>()((set) => ({
  todolists: [
    {
      id: "1",
      title: "買い物リスト",
      description: "今週の買い物予定",
      createdAt: new Date("2024-1-15"),
      todos: [],
    },
    {
      id: "2",
      title: "仕事のタスク",
      description: "今月の業務予定",
      createdAt: new Date("2024-1-10"),
      todos: [],
    },
    {
      id: "3",
      title: "勉強計画",
      description: "プログラミング学習の進捗管理",
      createdAt: new Date("2024-1-8"),
      todos: [],
    },
    {
      id: "4",
      title: "旅行準備",
      description: "来月の旅行の準備リスト",
      createdAt: new Date("2024-1-20"),
      todos: [],
    },
    {
      id: "5",
      title: "健康管理",
      description: "日々の健康管理タスク",
      createdAt: new Date("2024-1-5"),
      todos: [],
    },
    {
      id: "6",
      title: "読書リスト",
      description: "今年読みたい本のリスト",
      createdAt: new Date("2024-1-1"),
      todos: [],
    },
  ],

  // 追加
  addTodoList: (todoList) =>
    set((state) => ({
      todolists: [...state.todolists, todoList],
    })),

  // 編集
  updateTodoList: (id, data) =>
    set((state) => ({
      todolists: state.todolists.map((todoList) =>
        todoList.id === id
          ? { ...todoList, ...data, id: todoList.id }
          : todoList,
      ),
    })),

  // 削除
  deleteTodoList: (id) =>
    set((state) => ({
      todolists: state.todolists.filter((todoList) => todoList.id !== id),
    })),
}));

// 使い方としては
// addTodoList: todolistsに追加する関数。使う時はaddTodoList(データ)で使うとそのデータ をtodolistsに追加して反映できる
// updateTodoList: todolistsにある対象のデータを変更できる。使う時はupdateTodoList(データのid,変更後のデータ)で使うとそのid と一致するデータを変更後のデータに上書きして反映できる
// deleteTodoList: todolistsにある対象のデータを削除できる。使う時はdeleteTodoList(データのid) で使うとtodolistsからそのid と一致するデータだけ無くなった状態になって反映
