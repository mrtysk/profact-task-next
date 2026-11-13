"use client";
import { useTodoListStore } from "@/store/useTodoListStore";
// import Todo from "./todo/id/page";

export default function Home() {
  const { todolists } = useTodoListStore();

  // let earliestDate = undefined;
  // earliestDate = todolists;
  // for (let i = 1; i < todolists.length; i++) {
  //   const judge = todolists[i].todos.expiresAt;
  //   if (judge > earliestDate) {
  //     earliestDate = judge;
  //   }
  // }

  return (
    <>
      <div>
        <h1>TodoLists</h1>
        <p>あなたのTodoリストを管理しましょう</p>
      </div>
      <div className="gridLayout">
        {todolists.map(function (todo) {
          return (
            <ul className="listStyle" key={todo.id}>
              <li className="title">
                <a href={`todo/${todo.id}`}>{todo.title}</a>
              </li>
              <li>{todo.description}</li>
              <li>
                作成日：
                {`${todo.createdAt.getFullYear()}年${todo.createdAt.getMonth() + 1}月${todo.createdAt.getDate()}日`}
              </li>
              <li>最短期限：{todo.expiresAt}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
}

// "use client";

// import { useTodoListStore } from "@/store/useTodoListStore";

// export default function Home() {
//   const { todoLists } = useTodoListStore();

//   return (
//     <>
//       <div>
//         <h1>TodoLists</h1>
//         <p>あなたのTodoリストを管理しましょう</p>
//         {todoLists.map((todo) => (
//           <p>{todo.title}</p>
//         ))}
//       </div>
//     </>
//   );
// }
