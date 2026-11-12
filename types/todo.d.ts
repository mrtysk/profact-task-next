export interface TodoList {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  todos: Todo[];
}

export interface Todo {
  id: string;
  todoText: string;
  completed: boolean;
  expiresAt?: Date;
}
